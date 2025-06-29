import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <MdEmail size={20} />,
      label: "Email",
      value: "afkar.net11@gmail.com",
      link: "mailto:afkar.net11@gmail.com",
    },
    {
      icon: <MdLocationOn size={20} />,
      label: "Location",
      value: "Dickwella, Sri Lanka",
      link: null,
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "@afkarahamed",
      link: "https://github.com/afkarahamed",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: "afkar-ahamed",
      link: "https://www.linkedin.com/in/afkar-ahamed/",
    },
    {
      icon: <MdPhone size={20} />,
      label: "Phone",
      value: "+94-77 559 8418",
      link: "tel:+94775598418",
    },
  ];

  return (
    <div className="min-h-screen px-4 pt-8 md:pt-16 md:px-8 flex flex-col items-center justify-start bg-[#0f172a]">      <div className="max-w-xl w-full border border-blue-500 rounded-xl p-8 backdrop-blur bg-black/40">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 underline decoration-blue-500">
          Get in Touch
        </h2>
        <p className="text-white text-center mb-8">
          I'm always open to new opportunities. Reach out!
        </p>
        <div className="flex flex-col space-y-4 text-white">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-blue-400">{item.icon}</div>
              {item.link ? (
                <a
                  href={item.link}
                  className="hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;