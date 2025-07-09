'use client'
import React from 'react';
import { useTranslations } from "next-intl";

const JameelVideo = () => {
  // URLs for YouTube videos
  const videoUrl = "https://www.youtube.com/embed/DZBRY6L1L7M?modestbranding=1&showinfo=0&rel=0&start=2";
  const videoUrl2 = "https://www.youtube.com/embed/ZefHEtWSr4k?modestbranding=1&showinfo=0&rel=0&start=4";
  const videoUrl3 = "https://www.youtube.com/embed/FtjfD2bAWjQ?modestbranding=1&showinfo=0&rel=0&start=4";

  const t = useTranslations("compaign.webinar.aboutUs");

  return (
    <section className="pt-14" id='event'>
      <div className='container mx-auto'>
      <div className="text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block font-semibold text-transparent bg-clip-text text-2xl lg:text-[2.5rem] 2xl:text-[30px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem] mb-5">
            {t("title")}
            </h2>
          </div>

     
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
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

          <div className='w-full'>
  
  <div className="relative w-full h-0 pb-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={videoUrl3}
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

export default JameelVideo;
