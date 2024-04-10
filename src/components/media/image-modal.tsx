import React from 'react';
import Image from 'next/image';

type ImageModalProps = {
  imageUrl: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, alt, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-100 opacity-75" onClick={onClose}></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
        <button
          className="absolute text-4xl top-1 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <Image src={imageUrl} alt={alt} width={500} height={500} />
      </div>
    </div>
  );
};

export default ImageModal;
