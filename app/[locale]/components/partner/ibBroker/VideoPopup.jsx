'use client'
import React from 'react';

const VideoPopup = () => {
  // URLs for YouTube videos
  const videoUrl = "https://www.youtube.com/embed/YFrloenn-J0?modestbranding=1&showinfo=0&rel=0&start=2";
  const videoUrl2 = "https://www.youtube.com/embed/Tah49-OSrx0?modestbranding=1&showinfo=0&rel=0&start=4";

  return (
    <section className="py-14" id='event'>
      <div className='container mx-auto'>
      <div className="text-center">
            <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center mb-10">
            Exclusive Events For Our VIP Clients
            </h2>
          </div>

     
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* First Video Column */}
          <div className='w-full'>
         
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="Desktop Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Second Video Column */}
          <div className='w-full'>
  
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl2}
                title="Mobile Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPopup;
