'use client';
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 12;

const IBGallery = ({ images = [] }) => {  // Ensure images is an array by default
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Safely check if images array exists and has content
  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  // Open modal with the clicked image
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Show next image in the modal
  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Show previous image in the modal
  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Change to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Change to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the images for the current page
  const getPaginatedImages = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return images.slice(startIndex, endIndex);
  };

  return (
    <div className="container mx-auto pb-12 md:pb-14 xl:pb-16 2xl:pb-24">
      <div className="text-center mb-10">
        <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
          VIP IBs event organized by GTCFX in Dubai
        </h2>
        <p className="text">Here are the highlights from 3 days luxury events</p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {getPaginatedImages().map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => openModal(index)}
          >
            <div className="w-full h-64 relative">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        {/* Previous page button */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] text-white text-sm 3xl:text-xl px-8 py-3 text-center rounded-md md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e]  ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "shine-button"
          }`}
        >
          Previous
        </button>

        {/* Current page and total pages */}
        <span className="hidden md:block text-lg">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next page button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`bg-gradient-to-r from-[hsl(227,53%,33%)] via-[#1b2258] to-[#10122d] text-white text-sm 3xl:text-xl px-8 py-3 text-center rounded-md md:w-auto uppercase w-[300px] md:m-0 mx-auto duration-500 transition-colors hover:bg-gradient-to-r hover:from-[#10122d]  hover:to-[#1b245e] ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "shine-button"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal with Carousel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative max-w-4xl w-full p-4">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white text-2xl z-50"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            {/* Previous image button */}
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-2xl z-50"
              onClick={showPrevImage}
            >
              <FaChevronLeft />
            </button>

            {/* Current image */}
            <div className="w-full h-[70vh] relative">
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            {/* Next image button */}
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl z-50"
              onClick={showNextImage}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IBGallery;
