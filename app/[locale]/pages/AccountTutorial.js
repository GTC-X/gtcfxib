'use client'
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useTranslations } from "next-intl";



const AccountTutorialPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const t = useTranslations("tutorialVideo.bannerSection")

  const videos = [
    {
      id: 1,
      title: "How to Open Account in GTCFX Portal",
      thumbnail: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/tutorial-videos/account.png",
      url: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/tutorial-videos/how-to-register.mp4",
    },
    
  ];

  return (
    <div className="container mx-auto py-14">
        <div className="text-center  mb-10">
        <h2 className="HeadingH2 font-medium">{t("title")}</h2>
        <p className="text">{t("des")}</p>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaPlay className="w-12 h-12 text-white" />
            </div>
            <p className="text-center text-sm font-semibold mt-2 py-5">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-60"></div>
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl p-4">
          <button
            className="absolute top-2 right-2 text-gray-300 hover:text-white"
            onClick={() => setSelectedVideo(null)}
          >
            <IoCloseCircleSharp className="w-6 h-6" />
          </button>
          {selectedVideo && (
            <iframe
              className="w-full h-64 md:h-96 rounded"
              src={selectedVideo.url}
              title={selectedVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default AccountTutorialPage
