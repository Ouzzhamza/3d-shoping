"use client"

import Title from '@/components/dom/Title';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Page() {


    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = () => {
      // Handle form submission here
      console.log("Form submitted:", formData);
    };

      const t = useTranslations("Contact");
    
  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2 h-screen">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        {/* Contact Form */}
        <div className="flex gap-40 pt-16">
          <div className="flex-1 max-w-2xl p-8 border-[1px] border-primary shadow-lg pt-16 backdrop-blur-3xl">
            <div className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block bold-18 mb-2 text-primary ">
                    {t("FirstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:border-primary focus:outline-none placeholder-gray-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block bold-18 mb-2 text-primary">
                    {t("LastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:border-primary focus:outline-none placeholder-gray-400 transition-all"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block bold-18 mb-2 text-primary">
                    {t("Email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:border-primary focus:outline-none placeholder-gray-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block bold-18 mb-2 text-primary">
                    {t("PhoneNumber")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:border-primary focus:outline-none placeholder-gray-400 transition-all"
                  />
                </div>
              </div>

             
              <div>
                <label className="block bold-18 mb-2 text-primary">
                  {t("Message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full max-h-20 min-h-20 border-b border-gray-300 bg-transparent focus:border-primary focus:outline-none placeholder-gray-400 transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl cursor-pointer"
                >
                  {t("Submit")}
                </button>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mt-12 max-w-2xl flex flex-col md:flex-row gap-20 justify-center items-center ">
            {/* Left side (Gmail + LinkedIn) */}
            <div className="flex flex-col sm:gap-10">
              {/* Gmail */}
              <div className="flex items-center gap-3  hover:text-primary transition-colors duration-200">
                <BiLogoGmail className="text-2xl" />
                <a
                  href="mailto:ouzzhamza@gmail.com"
                  className="text-lg font-medium underline underline-offset-4"
                >
                  ouzzhamza@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3  hover:text-primary transition-colors duration-200">
                <FaMapMarkerAlt className="text-2xl" />
                <span className="text-lg font-medium underline underline-offset-4">
                  Casablanca, Morocco
                </span>
              </div>
            </div>

            {/* Right side (Location + Phone) */}
            <div className="flex flex-col sm:gap-10">
              {/* Location */}

              <div className="flex items-center gap-3 hover:text-primary transition-colors duration-200">
                <FaLinkedin className="text-2xl" />
                <a
                  href="mailto:ouzzhamza@gmail.com"
                  className="text-lg font-medium underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3 hover:text-primary transition-colors duration-200">
                <FaPhoneAlt className="text-2xl" />

                <span className="text-lg font-medium underline underline-offset-4">
                  +212600000000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page