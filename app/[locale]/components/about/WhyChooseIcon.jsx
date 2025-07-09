import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Counter = ({ start, end, prefix = "", suffix = "", label }) => {
  const [count, setCount] = useState(start);
  const duration = 2000; // Duration of the count animation in milliseconds

  const router = useParams();
  const { locale } = router;

  // Adjust value dynamically based on locale
  const dynamicEndValue = locale === "zh-hans" || locale === "zh-TW" ? 1350 : 135;

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
    <div className="counter flex flex-col gap-4 justify-center items-center bg-[#f9f9f9] border b0rder-gray-300 h-40 drop-shadow-2xl cursor-pointer hover:bg-white">
      <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-medium">
        {prefix}
        {Math.floor(count).toLocaleString()}
        {suffix}
      </h2>
      <p className="text md:text-xl">{label}</p>
    </div>
  );
};

const WhyChooseIcon = () => {
  const t = useTranslations("home.hero");
  const router = useParams();
  const { locale } = router;

  // Adjust value dynamically based on locale
  const dynamicEndValue = locale === "zh-hans" || locale === "zh-TW" ? 1350 : 135;
   // Adjust dollar sign position based on locale
   const prefix = locale === "zh-hans" || locale === "zh-TW" ? "" : "$";
   const suffix = locale === "zh-hans" || locale === "zh-TW" ? "$" : t("fact_no4");

  const counters = [
    { start: 0, end: 985000, label: t("fact_desc1"), suffix: ""},
    { start: 0, end: 27000, label: t("fact_desc2"),  suffix: ""},
    {
      start: 0,
      end: 20,
      prefix: "",
      suffix: "",
      label: t("fact_desc3"),
    },
   {
      start: 0,
      end: dynamicEndValue, // Dynamically set based on locale
      prefix: prefix, // Dynamic prefix based on locale
      suffix: suffix, // Dynamic suffix based on locale
      label: t("fact_desc4"),
    },
  ];

  return (
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
  );
};

export default WhyChooseIcon;
