import { FaAngleRight } from "react-icons/fa"
import './style.scss'
import Charts from "./component/graph"
import { useRouter } from "next/navigation"
import axios from "axios"

const LeaderCard = (props) => {
    const { data, view } = props
    const router = useRouter()
    function checkImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }
    return (
        <div className='container mt-6'>
            {view == "grid" ?
                <div className=" grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3">
                    {data?.items?.map((single, index) => {
                        const countryCode = single?.account?.countryCode?.toLowerCase();
                        return (
                            <div key={index} className="card-leader"
                                onClick={() => {
                                    router.push(`/leaderboard/${single?.profileId}`)
                                }}
                            >
                                <div className='w-full p-3  cursor-pointer'
                                >
                                    <div className=' flex justify-between items-center'>
                                        <div className="flex items-center gap-3">
                                            <div className=" relative">
                                                <img className=' w-12 h-12 rounded-full' src={single?.public?.avatarPath || "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"} alt="" />
                                                <div className=' absolute h-4 w-4 rounded-full top-0 -right-1'>
                                                    {countryCode?.length > 3 || countryCode == "" ?

                                                        <img className=' w-full h-full object-cover rounded-full' src={"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"} alt="" />
                                                        :
                                                        <img className=' w-full h-full object-cover rounded-full' src={`https://flagcdn.com/96x72/${single?.account?.countryCode?.toLowerCase()}.webp` || "/uz.svg"} alt="" />
                                                    }
                                                </div>

                                            </div>
                                            <div className="mt-2">
                                                <h4 className='text-base font-semibold text-secondary'>{single?.accountName}</h4>
                                                {/* <p className='text-[#8B96B6] text-sm'>{single?.public?.alternativeName || ""}</p> */}
                                            </div>
                                        </div>
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                window.open(`https://gtccopy.com/portal/registration/subscription?provider=${single?.profileId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`, "_blank")
                                            }}
                                        >
                                            <button className='text-sm border-2 border-secondary rounded-[25px] py-1 px-2'>Copy</button>
                                        </div>
                                    </div>

                                    <div className='mt-1 flex justify-between items-end'>
                                        <div>
                                            <h5 className='text-[10px] whitespace-pre'>Max Profit</h5>
                                            <p className='text-sm font-semibold'>{single?.maxProfit}%</p>
                                        </div>
                                        <Charts item={single} height={150} width={"100%"} />
                                        <FaAngleRight className='text-secondary e' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className=" grid grid-cols-1 gap-x-5 gap-y-2">

                    {data?.items?.map((single, index) => {
                        const countryCode = single?.account?.countryCode?.toLowerCase();
                        return (
                            <div key={index} className="card-leader"
                                onClick={() => {
                                    router.push(`/leaderboard/${single?.profileId}`)
                                }}
                            >
                                <div className='w-full px-3 py-1 cursor-pointer grid md:grid-cols-3 grid-cols-1'
                                >
                                    <div className=' flex justify-between items-center'>
                                        <div className="flex items-center gap-3">
                                            <div className=" relative">
                                                <img className=' w-12 h-12 rounded-full' src={single?.public?.avatarPath || "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"} alt="" />
                                                <div className=' absolute h-4 w-4 rounded-full top-0 -right-1'>
                                                    {countryCode?.length > 3 || countryCode == "" ?

                                                        <img className=' w-full h-full object-cover rounded-full' src={"https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"} alt="" />
                                                        :
                                                        <img className=' w-full h-full object-cover rounded-full' src={`https://flagcdn.com/96x72/${single?.account?.countryCode?.toLowerCase()}.webp` || "/uz.svg"} alt="" />
                                                    }
                                                </div>

                                            </div>
                                            <div className="mt-2">
                                                <h4 className='text-base font-semibold text-secondary'>{single?.accountName}</h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-4">
                                        {/*<p className='text-[#8B96B6] text-sm'>{single?.public?.alternativeName || ""}</p>*/}
                                        <div className="flex gap-1 items-center">
                                            <h5 className='text-[10px] whitespace-pre'>Max Profit</h5>
                                            <p className='text-sm font-semibold'>{single?.maxProfit}%</p>
                                        </div>
                                    </div>
                                    <div className='mt-1 flex justify-between items-center'>
                                        <Charts item={single} height={90} width={250} />
                                        <button className='text-sm border-2 border-secondary rounded-[25px] py-1 px-2'
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                window.open(`https://gtccopy.com/portal/registration/subscription?provider=${single?.accountId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`, "_blank")
                                            }}
                                        >Copy</button>
                                        <FaAngleRight className='text-secondary e' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            }
        </div>
    )
}
export default LeaderCard