import { GiMetalBar, GiTakeMyMoney } from 'react-icons/gi';
import { FaArrowTrendUp, FaHandHoldingDollar } from 'react-icons/fa6';

import { ProductItem } from '../../components/home/OurProducts';
const StartUsing = () => {
    const productData = [
        {
            icon: <GiTakeMyMoney size={50} />,
            title: 'Autochartist MetaTrader Plugin',
            link: "https://ac-ai-ea.s3.eu-west-1.amazonaws.com/AutochartistMTEASetup.exe",
        },
        {
            icon: <GiMetalBar size={50} />,
            title: 'Login to your Client Portal',
            link: "https://www.my.gtcfx.com",
        },
        {
            icon: <FaHandHoldingDollar size={50} />,
            title: 'Subscribe to Autochartist Emails',
            link: "#",
        },
        {
            icon: <FaArrowTrendUp size={50} />,
            title: 'Autochartist Mobile Application',
            link: "https://play.google.com/store/apps/details?id=com.autochartist.mobile",
        },
    ];
  return (
    <section className='bg-gradient mb-6 md:mb-36 relative'>
        <div className='container'>
    <h2 className='HeadingH2 text-white'>Start Using Autochartist Now!</h2>
    <div className="md:grid grid-cols-1 md:grid-cols-4 md:w-[70%] mx-auto md:absolute left-0 right-0">
        {productData.map((product, index) => (
            <ProductItem
                key={index}
                icon={product.icon}
                title={product.title}
                link={product.link}
                isLast={index == productData?.length - 1} // Check if it's the last item
            />
        ))}
    </div>
    </div>
</section>
  )
}
export default StartUsing