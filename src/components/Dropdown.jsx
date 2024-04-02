import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
  ];

  return (
    <div className="relative inline-block text-left md:w-60 lg:w-96 mt-5">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
          onClick={toggleDropdown}
        >
          {selectedLanguage || "Select Language"}
          <MdKeyboardArrowDown className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 md:w-60 lg:w-96">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language, index) => (
              <button
                key={index}
                onClick={() => handleLanguageSelect(language)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
