"use client"
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
const ProjectsCounter = () => {
    const t = useTranslations("home")
    const counters = [
        { label: t("counter.option.first"), maxValue: 50, icon: "+" },
        { label: t("counter.option.second"), maxValue: 0, icon: ".0" },
        { label: t("counter.option.thrid"), maxValue: 15, icon: "+" },
        { label: t("counter.option.four"), maxValue: 12 },
        { label: t("counter.option.five"), maxValue: 18 },
        { label: t("counter.option.six"), maxValue: 24, icon: "/7" },
      ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          if (prevCounts[index] >= counter.maxValue) {
            clearInterval(intervals[index]);
            return prevCounts;
          }
          const newCounts = [...prevCounts];
          newCounts[index] = prevCounts[index] + 1;
          return newCounts;
        });
      }, 10); // Increment every 1000 milliseconds (1 second)
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [counters]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-6">
      {counters.map((counter, index) => (
        <div key={index} className="text-center">
          <h2 className='mainHeading text-4xl lg:text-7xl mb-3 flex justify-center gap-0'>{counts[index]}{counter.icon}</h2>
          <p className='font-normal leading-5 line-clamp-2 text-center capitalize'>{counter.label} </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCounter