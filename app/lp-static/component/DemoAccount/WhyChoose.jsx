import React, { useState, useEffect } from "react";

const Counter = ({ start, end, prefix = "", suffix = "", label }) => {
    const [count, setCount] = useState(start);
    const duration = 2000; // Duration of the count animation in milliseconds

    useEffect(() => {
        let frameRate = 1000 / 60; // 60 FPS
        let totalFrames = Math.round(duration / frameRate);
        let increment = (end - start) / totalFrames;

        let counter = setInterval(() => {
            const nextCount = count + increment;
            if (nextCount < end) {
                setCount(nextCount);
            } else {
                clearInterval(counter);
                setCount(end); // Make sure to set to the exact end value when done
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [count, end, start, duration]);

    return (
        <div className="counter flex flex-col gap-4 justify-center items-center bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43]  border border-gray-300 h-40 drop-shadow-2xl cursor-pointer hover:bg-gray-300">
            <h2 className="bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-medium">
                {prefix}
                {Math.floor(count).toLocaleString()}
                {suffix}
            </h2>
            <p className="text md:text-xl text-white">{label}</p>
        </div>
    );
};

const WhyChooseIconLp = () => {
    const counters = [
        { start: 0, end: 985000, label: "Served Clients", suffix: "+" },
        { start: 0, end: 85000, label: "Introducing Broker", suffix: "+" },
        {
            start: 0,
            end: 20,
            prefix: "",
            suffix: "+ Destinations",
            label: "Worldwide",
        },
        {
            start: 0,
            end: 35,
            prefix: "$",
            suffix: " Billion",
            label: "Daily trades",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto pt-10 relative z-50 ">
            <div className='content-inner text-center mb-10'>
                <h2 className='bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-5'>About Us</h2>
                <p className='text text-xl'>Globally Trusted & Multi-Regulated Broker</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {counters.map((counter, index) => (
                    <Counter
                        key={index}
                        start={counter.start}
                        end={counter.end}
                        prefix={counter.prefix}
                        suffix={counter.suffix}
                        label={counter.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default WhyChooseIconLp;
