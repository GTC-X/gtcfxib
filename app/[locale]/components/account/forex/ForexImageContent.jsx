import {cn} from "@/lib/utils";
import {sanitize} from "isomorphic-dompurify";
import Image from "next/image";

const ArticleImage = ({image, contentComponent, flip, className}) => {
    return (
        <div className={cn("grid grid-cols-1 md:gap-36 gap-5 md:grid-cols-2", className)}>
            <div className={cn("self-center flex justify-center", flip && "lg:order-1")}>
                {image ? <Image {...image} className='lg:max-w-[50%] max-w-[40%] mx-auto block' /> : <></>}
            </div>
            <div className="flex flex-col items-start justify-center">
                {contentComponent()}
            </div>
        </div>
    );
};

const ProductsImageContent = ({data, className}) => {

    return (
        <section className={className}>
            <div className="flex flex-col gap-4">
                {data.map(({image, title, description}, index) => (
                    <ArticleImage
                        key={title}
                        flip={index % 2 !== 0}
                        image={image}
                        contentComponent={() => (
                            <>
                                <h4 className="mb-4 HeadingH2 ">{title}</h4>
                                <p
                                    className="text-primary text ltr:text-left rtl:text-right"
                                    dangerouslySetInnerHTML={{__html: sanitize(description)}}
                                />
                            </>
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductsImageContent;
