import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="border-t border-b py-2 text-center text-xs">
        <p>© {new Date().getFullYear()} QuickNotes | Your Notes. Your Space.</p>
      </div>
    </footer>
  );
};
