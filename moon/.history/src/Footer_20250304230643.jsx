import React from "react";

const Footer = () => {

  return (
    <div className="w-full bg-purple-900 text-white py-3">
      <div className="container  text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eswaran Suyamprakasam. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
