import Link from "next/link";

export default function NotFound(){
  return(
    <section className="mb-5">
      <div>
        <img className="mx-auto" src="/not-found.webp" alt="not found logo"/>
      </div>
      <Link className="yellowButton capitalize hover:bg-white hover:text-primary cursor-pointer mx-auto block w-[250px]" href='https://www.gtcfx.com/'>Back to Home page</Link>
    </section>
  )
}
