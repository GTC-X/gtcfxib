"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { HiMiniMagnifyingGlassPlus,HiMagnifyingGlassMinus } from "react-icons/hi2";
import { TbZoomReset } from "react-icons/tb";


const ReceiveSimilarNewsletter = () => {
    const t = useTranslations("tradingTools.technicalTool.autoCharlist.ReceiveSimilarNewsletter");
  return (
    <section className='bg-gradient'>
    <div className='flex flex-col md:flex-row md:justify-center md:items-start items-center gap-8'>
        <div className='md:w-[40%] w-[70%]'>
            <TransformWrapper
                initialScale={1}
                >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="text-center pb-5 flex justify-center gap-4">
            <button onClick={() => zoomIn()}><HiMiniMagnifyingGlassPlus color="#FFF" size={30} /></button>
            <button onClick={() => zoomOut()}><HiMagnifyingGlassMinus color="#FFF"  size={30} /></button>
            <button onClick={() => resetTransform()}><TbZoomReset color="#FFF" size={30} /></button>
          </div>
          <TransformComponent>
          <img src='/autochartist-market-report.jpg' />
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
          
        </div>'
        <div className='space-y-6'>
            <h2 className='text-secondary text-3xl font-semibold text-center'>{t("title")}</h2>
            <Link href='/newsletter' className='text-center bg-secondary text-primary hover:bg-primary hover:text-secondary px-3 py-2 rounded font-semibold shadow-lg md:m-0 mx-auto block' >
            {t("btnTxt")}
            </Link>
        </div>
    </div>
</section>
  )
}
export default ReceiveSimilarNewsletter