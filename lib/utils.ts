/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initializeCanvas(
  sectionRef: React.RefObject<HTMLElement | null>
) {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const section = sectionRef?.current;
  if (!canvas || !section) return;

  const context = canvas.getContext("2d")!;
  const resizeCanvas = () => {
    const rect = section.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";

  class Particle {
    x: number;
    y: number;
    radius: number;
    color: { r: number; g: number; b: number };
    dx: number;
    dy: number;
    lifespan: number;
    birthdate: number;
    opacity: number;

    constructor(
      x: number,
      y: number,
      radius: number,
      color: { r: number; g: number; b: number }
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.dx = Math.random() * 4 - 2;
      this.dy = Math.random() * 4 - 2;
      this.lifespan = 1000;
      this.birthdate = Date.now();
      this.opacity = 1;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
      context.fill();
    }

    update() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
        this.dx = -this.dx;
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
        this.dy = -this.dy;

      const age = Date.now() - this.birthdate;
      if (age > this.lifespan) {
        this.opacity -= 0.01;
        if (this.opacity <= 0) this.radius = 0;
      }
    }

    setColor() {
      const themeColors = [
        { r: 247, g: 140, b: 160 }, // #f78ca0
        { r: 251, g: 199, b: 212 }, // #fbc7d4
        { r: 243, g: 116, b: 88 }, // #f37458
      ];
      const color = themeColors[Math.floor(Math.random() * themeColors.length)];
      this.color = color;
    }
  }

  const particles: Particle[] = [];
  const maxParticles = 250;

  const handleMouseMove = (e: MouseEvent) => {
    const bounds = section.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    if (particles.length < maxParticles) {
      const p = new Particle(x, y, Math.random() * 5 + 1, {} as any);
      p.setColor();
      particles.push(p);
    }
  };

  section.addEventListener("mousemove", handleMouseMove);

  const animate = () => {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].radius <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }
  };

  animate();
  return () => {
    section.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", resizeCanvas);
  };
}
