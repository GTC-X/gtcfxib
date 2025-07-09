import Link from "next/link";


const PdfDocument = ({dir,url})=>{
    return(
        <section className="py-12 container">
        <Link
          target="_blank"
          href={url}
          className="text-[#c36] border-2 border-[#c36] text-center rounded-[3px] py-[0.5rem] px-[1rem] bg-white hover:bg-[#c36] hover:text-[#FFF]"
        >
          View Fullscreen
        </Link>
        <div>
          <iframe
            className="mt-10"
            loading="lazy"
            width="100%"
            height="840px"
            src={dir}
            data-gtm-yt-inspected-9="true"
          ></iframe>
        </div>
      </section>
    )
}

export default PdfDocument;