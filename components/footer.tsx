import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; Aaron Edmiston {new Date().getFullYear()} All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
