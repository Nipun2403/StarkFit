// Imports
import React from "react";

// Main Function
function ActionButton({ title, className }) {
  return (
    <p
      className={`text-white font-medium ${className} py-2 px-5 rounded-xl w-max hover:bg-transparent hover:ring-primary-200 hover:ring-2 `}
    >
      {title}
    </p>
  );
}

// Exports
export default ActionButton;
