import React from "react";

const ContactUsSection = () => {
  return (
    <section className=" bg-gradient-to-r from-white via-[#fff1eb] to-white text-gray-800 px-6 py-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div>
          <h2 className="text-4xl font-bold mb-3 leading-snug text-gray-900">
            Let’s Build Something Great Together!
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Reach out and we’ll get back to you within a few hours.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
              />
              <input
                type="email"
                placeholder="Email *"
                className="p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm"
            />
            <textarea
              placeholder="Your Message *"
              rows={5}
              className="w-full p-4 rounded-xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none shadow-sm"
            />
            <button
              type="submit"
              className="w-72 hover:bg-gradient-to-r from-orange-400 to-purple-500 hover:text-white bg-white text-black hover:opacity-90 transition-colors py-4 text-lg rounded-xl font-semibold shadow-md"
            >
              Send Your Query →
            </button>

            <p className="text-sm text-gray-500 mt-2">
              ✅ 100% Confidential | 📝 We Sign NDA
            </p>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-4 leading-relaxed text-sm">
            <strong>📍 Address:</strong>
            <br />
            Second floor, ST Square Building Plot No C-167, Phase 8B,
            <br />
             Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar,
            <br />
             Mohali, Punjab 160071.
          </p>
          <p className="mb-2 text-sm">
            <strong>📞 Phone :</strong> +91 78148 52571
          </p>
          <p className="mb-6 text-sm">
            <strong>📧 Email :</strong> info@nugeninfo.com
          </p>
          <div className="rounded overflow-hidden border border-purple-300 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.007378245253!2d76.69593763440173!3d30.70334136422268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef113b57669%3A0x7b7d3b65b84f9b19!2sNugen%20I.T.%20Services!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
