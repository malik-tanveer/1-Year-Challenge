import React from "react";

interface ModalProps {
  isOpen: boolean;             // modal show/hide control
  onClose: () => void;         // close modal function
  title?: string;              // modal heading
  children?: React.ReactNode;  // content inside modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // agar open false hai to kuch render na ho

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        {/* close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
