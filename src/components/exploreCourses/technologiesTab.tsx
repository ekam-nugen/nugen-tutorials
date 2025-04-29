"use client";

import { useState } from "react";
import { servicesTechData } from ".";

interface Link {
  href: string;
  text: string;
}

interface Item {
  title: string;
  description: string;
}

interface Tab {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>; 
  items: Item[];
  link?: Link;
  links?: Link[];
}

export interface Service {
  id: string;
  title: string;
  tabs: Tab[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleAccordion = (serviceId: string) => {
    if (activeService === serviceId) {
      setActiveService(null);
      setActiveTab(null);
    } else {
      setActiveService(serviceId);
      const service = servicesTechData.find((s: Service) => s.id === serviceId);
      setActiveTab(service?.tabs[0]?.id || null);
    }
  };

  const selectSubService = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-white via-[#fff1eb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Software Application
            <br className="hidden md:inline" /> Development Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Bespoke Mobile Apps or Web Apps. eCommerce or Chatbots. Product
            Development or Software Design Services. Dedicated Hiring or a Fixed
            Quote. One-Time or Ongoing. We Offer Everything To Cater to the
            Unique Needs of Our Clients.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12">
          {servicesTechData.map((service: Service) => (
            <div
              key={service.id}
              className="border-b border-gray-200 bg-white shadow-sm rounded-lg mb-4"
            >
              {/* Accordion Header */}
              <button
                className="w-full py-4 px-6 text-left text-lg font-semibold text-gray-900 flex justify-between items-center cursor-pointer text-gray-400"
                onClick={() => toggleAccordion(service.id)}
              >
                {service.title}
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    activeService === service.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              {activeService === service.id && (
                <div className="px-6 pb-6">
                  {/* Sub-Service Buttons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tabs.map((tab: Tab) => (
                      <button
                        key={tab.id}
                        className={`py-2 px-4 rounded-md text-base ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 text-white"
                            : "bg-[#fff1eb] text-gray-800 hover:bg-[#ffede4]"
                        }`}
                        onClick={() => selectSubService(tab.id)}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  {/* Sub-Service Content */}
                  {service.tabs.map(
                    (tab: Tab) =>
                      activeTab === tab.id && (
                        <div key={tab.id} className="transition-all">
                          <div className="flex items-center mb-4">
                            <tab.icon className="w-12 h-12 mr-4 text-gray-900" />
                            <h3 className="text-2xl font-semibold text-gray-900">
                              {tab.name}
                            </h3>
                          </div>
                          <ul className="space-y-4">
                            {tab.items.map((item: Item, index: number) => (
                              <li key={index}>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {item.title}
                                </h4>
                                <p className="text-gray-600">
                                  {item.description}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            {tab.links ? (
                              tab.links.map((link: Link, index: number) => (
                                <a
                                  key={index}
                                  href={link.href}
                                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                  {link.text}
                                  <svg
                                    className="ml-2 w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </a>
                              ))
                            ) : tab.link ? (
                              <a
                                href={tab.link.href}
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 text-white rounded-md "
                              >
                                {tab.link.text}
                                <svg
                                  className="ml-2 w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </a>
                            ) : null}
                          </div>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
