"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/app/[locale]/components/common/Carousel";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next-intl/link";
import Separator from "@/app/[locale]/components/common/Separator";
import { useLocale } from "next-intl";

const ProductsTabs = ({pagesTabs}) => {
    const pathname = usePathname();
    const locale= useLocale();
    return <Carousel className={'mb-5'}>
        <CarouselContent className={'ml-0'}>
            {pagesTabs.map(({key, label}, index) => {
                const isActive = pathname.includes(key)
                return (
                        <CarouselItem
                            className={cn(`p-0 h-full text-neutral/80 last:border-none border-r border-r-neutral/10 font-[500] basis-1/7 mx-auto `, isActive && 'border-b-2 transition-all duration-500 border-b-neutral shadow-xl  text-neutral')}>
                            <div className={cn(`py-3 px-4 min-w-24 lg:py-4 lg:px-[1.7rem] text-sm lg:text-lg h-full flex cursor-pointer justify-center`)} >
                                <Link key={key} href={`/${key}`} locale={locale} >
                                {label}
                                </Link>
                             </div>
                        </CarouselItem>
               )
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
    </Carousel>
}

export default ProductsTabs;