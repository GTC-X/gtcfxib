import {cn} from "@/lib/utils";

const Separator = ({ className, orientation = "horizontal", ...props}) => {

    return <div className={cn("shrink-0 bg-neutral/20", orientation === "horizontal" ? "h-[0.0625rem] w-full" : "h-full w-[0.0625rem]", className)} {...props} />
}

export default Separator;