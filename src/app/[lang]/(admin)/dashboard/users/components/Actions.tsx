'use client';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import React, { useRef, useState } from 'react';

const Actions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={domNode} className="w-full py-2 pb-2">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white  hover:bg-gray-100 focus:ring-1 focus:outline-no font-medium rounded-md text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          <svg
            className="w-5 h-5 fill-secondaryColor"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-14 top-2 mt-0 w-30 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {' '}
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {' '}
                  Deactivate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-red-600 px-4 py-2 text-sm  hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {' '}
                  Delete
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Actions;
