import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  defaultOption: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="dropdown-button flex items-center justify-between w-35 bg-white text-xs text-gray-dark font-normal px-2.5 py-3">
        {selectedOption}
        {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <a
              key={option}
              href="#"
              onClick={() => handleOptionClick(option)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};