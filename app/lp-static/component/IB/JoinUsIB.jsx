import { GrMoney } from "react-icons/gr";
import { TbHeartHandshake } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMoney } from "react-icons/md";
import { GiSmokingFinger } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";



const JoinUsIB = () => {
    const benefits = [
        {
            "iconSrc": <GrMoney />,
            "text":'Increase Your Profits With The Highest Rebates & Commissions In The Industry.'
        },
        {
            "iconSrc": <TbHeartHandshake />,
            "text":'Become Part Of An Expanding Community Of Over 85,000 Introducing Brokers.'
        },
        {
            "iconSrc": <GiProgression />,
            "text":'Explore Our Tailored Ib Program Designed To Complement Your Business.'
        },
        {
            "iconSrc": <BiNetworkChart />,
            "text":'Ensure The Safety Of Your Funds And Enjoy Guaranteed Withdrawal Security Through Our Platform.'
        },
        {
            "iconSrc": <MdOutlineManageAccounts />,
            "text":'Expand Your Client Network Effortlessly With Our Advanced Partnership Solutions.'
        },
        {
            "iconSrc": <FaLaptopCode />,
            "text":'Offering A Comprehensive Ib Account Panel For Monitoring Rebates And Your Clients Account Activities.'
        },
        {
            "iconSrc": <MdOutlineMoney />,
            "text":'Offering A Comprehensive Ib Account Panel For Monitoring Rebates And Your Clients Account Activities.'
        },
        {
            "iconSrc": <GiSmokingFinger />,
            "text":'Trade Currencies & Derivatives with the World’s No.1 Financial Institution Broker'
        },
        {
            "iconSrc": <GrTechnology/>,
            "text":'Analysis And Technology Tools (Including Mam And Pamm Accounts)'
        }
    ]

  return (
    <section className='ib-broker pb-10'>
    <div className="container">
    <div className="text-center">
      <h2 className='HeadingH2 2xl:text-4xl font-[600] bg-gradient-to-r from-primary to-primary inline-block text-transparent bg-clip-text text-center'>Join Our Specialized IB Program
      </h2>
      <p className='text text-primary py-2'>to supercharge your business growth and skyrocket your earning potential.</p>
      </div>
   {/*
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-2">
            {benefits.map((benefit,index)=>(
                <div key={index} className="flex flex-row gap-6 mx-3 my-3 items-center border border-white p-5 bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% border-opacity-15 hover:bg-secondary hover:bg-opacity-10 cursor-pointer">
                    <p className="text-secondary text-2xl md:text-5xl">{benefit.iconSrc} </p>
                    <p className="text text-left text-white ltr:text-left rtl:text-right">{benefit.text}</p>
                </div>
            ))}
        </div>
 */}
        </div>
    </section>
  )
}

export default JoinUsIB