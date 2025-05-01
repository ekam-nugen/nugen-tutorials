import React from "react";

const TeamChoose = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Nugen I.T. Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h3>
              <p>
                We leverage AI, blockchain, and cloud technologies to deliver
                forward-thinking solutions tailored to your business.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>
                Our developers are skilled in modern frameworks and tools,
                ensuring high-quality deliverables.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Client-Centric Approach
              </h3>
              <p>
                We prioritize your needs, offering customized apps, SEO, and
                UI/UX design to boost your success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamChoose;
