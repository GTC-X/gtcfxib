const AwardsLp = () => {
    const awardsList = [
        {
            name: "Expo",
            desc: "Worldwide Leading Broker",
            imgSRC: "/award2.png",
            by: "Awarded by Expo Dubai, UAE Award 2024",
        },
        {
            name: "BrokerView Expo",
            desc: "Most Trusted Broker!",
            imgSRC: "/award1.png",
            by: "Awarded by BrokerView Expo Abu Dhabi Award 2024",
        },
        {
            name: "WikiExpo",
            desc: "Best Trading Platform ",
            imgSRC: "/award4.png",
            by: "Awarded by Wiki Platform Asia Award 2024",
        },
        {
            name: "Jordan Financial Expo",
            desc: "Best Affiliate Program ",
            imgSRC: "/award3.png",
            by: "Awarded by Jordan Financial Expo Award 2024",
        },
    ];
    return (
        <div className="max-w-6xl mx-auto py-10 text-center ">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-5">GTCFX Awards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {awardsList?.map((single, index) => (
                    <div
                        className="relative bg-white shadow-2xl rounded-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 text-center"
                        key={index}
                    >
                        <img
                            src={single?.imgSRC}
                            alt={single?.name}
                            className=" h-20 md:h-28 mx-auto"
                        />
                        <div className=" inset-x-0 bottom-0 bg-white bg-opacity-75 p-4">
                            <h3 className="text-base font-semibold mb-2">{single?.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{single?.desc}</p>
                            <p className="text-xs text-gray-500 line-clamp-2">{single?.by}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardsLp;
