
import { useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';


const Markets = () => {
    const t = useTranslations("home.markets_ct");
    const [marketDataArray, setMarketDataArray] = useState([]);
    const [filteredDataArray, setFilteredDataArray] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("Most traded"); // Default selected filter
    const [currentItemTitle, setCurrentItemTitle] = useState("Gold");

    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [chart, setChart] = useState(null); // State to hold chart instance
    const [chartData, setChartData] = useState({ labels: [], data: [] });
    const [valueParam, setValueParam] = useState('XAUUSD'); // Initial value parameter

    const [currFilter, setCurrFilter] = useState('Most traded');

    const data = [
        {
            imageSrc: "/icons/gold.svg",
            title: "Gold",
            symbol: "XAUUSD",
            categories: ["Commodities", "Most traded"],
            buy: "2416.88",
            sell: "2417.24"
        },
        {
            imageSrc: "/icons/silver.svg",
            title: "Silver",
            symbol: "XAGUSD",
            categories: ["Commodities", "Most traded"],
            buy: "30.927",
            sell: "30.952"
        },
        {
            imageSrc: "/icons/oil.svg",
            title: "Crude Oil",
            symbol: "WTIUSD",
            categories: ["Commodities"],
            buy: "74.65",
            sell: "74.62"
        },
        {
            imageSrc: "/icons/oil.svg",
            title: "Brent Oil",
            symbol: "BRNUSD",
            categories: ["Commodities"],
            buy: "78.23",
            sell: "78.19"
        },



        //Indices 
    
        {
            imageSrc: "/icons/usa.svg",
            title: "ASX 200",
            symbol: "AUS200c",
            categories: ["Indices"],
            buy: "7825.82",
            sell: "7824.12"
        },
        {
            imageSrc: "/icons/china.svg",
            title: "China 50",
            symbol: "CN50c",
            categories: ["Indices"],
            buy: "11675.3",
            sell: "11659.3"
        },
        {
            imageSrc: "/icons/china.svg",
            title: "Hong Kong 50",
            symbol: "HK50c",
            categories: ["Indices"],
            buy: "16899.20",
            sell: "16895.70"
        },
        {
            imageSrc: "/icons/china.svg",
            title: "Nikkei 225",
            symbol: "JPN225c",
            categories: ["Indices"],
            buy: "34820.56",
            sell: "34780.56"
        },
        {
            imageSrc: "/icons/china.svg",
            title: "FTSE 100",
            symbol: "UK100c",
            categories: ["Indices", "Most traded"],
            buy: "8220.35",
            sell: "8218.65"
        },
        {
            imageSrc: "/icons/usa.svg",
            title: "Dow Jones",
            symbol: "US30c",
            categories: ["Indices"],
            buy: "39604.40",
            sell: "39592.60"
        },
        {
            imageSrc: "/icons/usa.svg",
            title: "S&P 500",
            symbol: "US500c",
            categories: ["Indices", "Most traded"],
            buy: "5328.58",
            sell: "5325.18"
        },

        // {
        //     imageSrc: "/icons/usa.svg",
        //     title: "US 500",
        //     symbol: "US500",
        //     categories: ["Indices", "Most traded"],
        //     buy: "5637.7",
        //     sell: "5637.2"
        // },
        // {
        //     imageSrc: "/icons/usa.svg",
        //     title: "US Wall Street 30",
        //     symbol: "US30.a.PPS",
        //     categories: ["Indices"],
        //     buy: "40231.5",
        //     sell: "40229.5"
        // },
        // {
        //     imageSrc: "/icons/ger.svg",
        //     title: "Germany 40",
        //     symbol: "GER40.a.PPS",
        //     categories: ["Indices"],
        //     buy: "18710.8",
        //     sell: "18710.8"
        // },
        // {
        //     imageSrc: "/icons/china.svg",
        //     title: "China A50",
        //     symbol: "CHINA50.MEX",
        //     categories: ["Indices"],
        //     buy: "12206.3",
        //     sell: "12199.7"
        // },
        // {
        //     imageSrc: "/icons/btc.svg",
        //     title: "Bitcoin / USD",
        //     symbol: "BTCUSD.p",
        //     categories: ["Cryptocurrencies", "Most traded"],
        //     buy: "62648.50",
        //     sell: "62542.50"
        // },
        // {
        //     imageSrc: "/icons/eth.svg",
        //     title: "Ethereum / USD",
        //     symbol: "ETHUSD.p",
        //     categories: ["Cryptocurrencies"],
        //     buy: "3339.39",
        //     sell: "3333.39"
        // }
        // ,
        // {
        //     imageSrc: "/icons/tsla.svg",
        //     title: "Tesla Inc",
        //     symbol: "TESLA",
        //     categories: ["Shares", "Most traded"],
        //     buy: "257.05",
        //     sell: "256.88"
        // },
        {
            imageSrc: "/icons/apple.svg",
            title: "Apple Inc",
            symbol: "APPLE",
            categories: ["Shares"],
            buy: "219.42",
            sell: "219.15"
        },
        {
            imageSrc: "/icons/nvidia.svg",
            title: "NVIDIA Corp",
            symbol: "NVDA",
            categories: ["Shares"],
            buy: "107.13",
            sell: "106.88"
        },
        // {
        //     imageSrc: "/icons/disney.svg",
        //     title: "Disney",
        //     symbol: "DISNEY",
        //     categories: ["Shares"],
        //     buy: "97.15",
        //     sell: "97.86"
        // }
        // ,
        {
            imageSrc: "/icons/alibaba.png",
            title: "ALIBABA",
            symbol: "ALIBABA",
            categories: ["Shares"],
            buy: "77.50",
            sell: "77.23"
        },
        {
            imageSrc: "/icons/microsoft.png",
            title: "MICROSOFT",
            symbol: "MICROSOFT",
            categories: ["Shares"],
            buy: "408.28",
            sell: "407.95"
        },
        {
            imageSrc: "/icons/ulvr.svg",
            title: "ULVR",
            symbol: "ULVR",
            categories: ["Shares"],
            buy: "49.04",
            sell: "47.83"
        },
        {
            imageSrc: "/icons/vod.svg",
            title: "VOD",
            symbol: "VOD",
            categories: ["Shares"],
            buy: "1.33",
            sell: "0.12"
        },



        {
            imageSrc: "/icons/eur.svg",
            title: "EUR/USD",
            symbol: "EURUSD",
            categories: ["Forex", "Most traded"],
            buy: "1.09124",
            sell: "1.09118"
        }
        ,
        {
            imageSrc: "/icons/usa.svg",
            title: "USD/JPY",
            symbol: "USDJPY",
            categories: ["Forex"],
            buy: "158.008",
            sell: "157.998"
        }
        ,
        {
            imageSrc: "/icons/china.svg",
            title: "GBP/USD",
            symbol: "GBPUSD",
            categories: ["Forex", "Most traded"],
            buy: "1.9796",
            sell: "1.29783"
        }
        ,
        {
            imageSrc: "/icons/china.svg",
            title: "USD/CAD",
            symbol: "USDCAD",
            categories: ["Forex"],
            buy: "1.36439",
            sell: "1.36419"
        }

        ,
        {
            imageSrc: "/icons/aus.svg",
            title: "AUD/USD",
            symbol: "AUDUSD",
            categories: ["Forex"],
            buy: "0.65109",
            sell: "0.65090"
        }

        ,
        {
            imageSrc: "/icons/nzld.svg",
            title: "NZD/USD",
            symbol: "NZDUSD",
            categories: ["Forex"],
            buy: "0.59583",
            sell: "0.59563"
        }

        ,
        {
            imageSrc: "/icons/usa.svg",
            title: "USD/CHF",
            symbol: "USDCHF",
            categories: ["Forex"],
            buy: "0.85807",
            sell: "0.85790"
        }

    ];


    useEffect(() => {
        localStorage.setItem('currFilter', 'Most traded');
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            // Update state with initial data
            setMarketDataArray(data);
            setFilteredDataArray(data);

            // Function to fetch updated buy and sell values
            const fetchUpdatedData = async () => {
                try {
                    const response = await axios.get('https://mt5mainapi-39c17ce520ca.herokuapp.com/api/symbols');
                    const rD = response.data;
                    const responseData = rD.data;

                    // Ensure responseData is an array
                    if (!Array.isArray(responseData)) {
                        console.error('Invalid response data format:', responseData);
                        return;
                    }

                    const updatedData = data.map(item => {
                        const symbolData = responseData.find(symbolItem => symbolItem.Symbol === item.symbol);
                        if (symbolData) {
                            const { Ask: sell, Bid: buy } = symbolData;
                            return { ...item, buy, sell };
                        }
                        return item;
                    });

                    // Update state with fetched buy and sell values
                    setMarketDataArray(updatedData);

                    // Update filteredDataArray based on current filter
                    const storedFilter = localStorage.getItem('currFilter');
                    if (storedFilter) {
                        const currentFilteredData = updatedData.filter(item => item.categories.includes(storedFilter));
                        setFilteredDataArray(currentFilteredData);
                    } else {
                        const currentFilteredData = updatedData.filter(item => item.categories.includes(selectedFilter));
                        setFilteredDataArray(currentFilteredData);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            // Call fetchUpdatedData once initially to fetch data immediately
            await fetchUpdatedData();

            const interval = setInterval(fetchUpdatedData, 2000);
            // Clear interval on component unmount
            return () => clearInterval(interval);
        };

        fetchData();
    }, []);


    useEffect(() => {
        const initialSelectedData = marketDataArray.find(item => item.title === currentItemTitle);
        setSelectedData(initialSelectedData);
    }, [marketDataArray]);


    useEffect(() => {
        const fetchChartData = async (value) => {
            try {
                const response = await axios.get(`https://mt5mainapi-39c17ce520ca.herokuapp.com/api/chart/symbol?value=${value}`);
                const { labels, data } = response.data;

                if (!chartInstanceRef.current) {
                    // Create chart instance
                    chartInstanceRef.current = am4core.create(chartRef.current, am4charts.XYChart);

                    // Create axes
                    let dateAxis = chartInstanceRef.current.xAxes.push(new am4charts.DateAxis());
                    dateAxis.renderer.minGridDistance = 50;
                    dateAxis.renderer.grid.template.disabled = true; // Disable vertical grid lines

                    let valueAxis = chartInstanceRef.current.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.renderer.opposite = true; // Move Y-axis to the right
                    valueAxis.renderer.grid.template.disabled = true; // Disable horizontal grid lines

                    // Add data
                    chartInstanceRef.current.data = labels.map((label, index) => ({
                        date: new Date(label),
                        value: data[index]
                    }));

                    // Create series
                    let series = chartInstanceRef.current.series.push(new am4charts.LineSeries());
                    series.dataFields.valueY = 'value';
                    series.dataFields.dateX = 'date';
                    series.tooltipText = '{value}';
                    series.strokeWidth = 2;
                    series.minBulletDistance = 10;

                    // Make bullets invisible
                    series.bullets.push(new am4charts.CircleBullet());
                    series.bullets.values[0].visible = false;

                    // Add cursor
                    chartInstanceRef.current.cursor = new am4charts.XYCursor();
                    chartInstanceRef.current.cursor.xAxis = dateAxis;

                    // Scrollbar control
                    chartInstanceRef.current.scrollbarX = new am4core.Scrollbar();
                    chartInstanceRef.current.scrollbarX.disabled = true; // Disable horizontal zoom scrollbar

                    chartInstanceRef.current.logo.disabled = true; // Hide chart logo
                } else {

                    // Save current zoom level and position
                    const start = chartInstanceRef.current.xAxes.getIndex(0).start;
                    const end = chartInstanceRef.current.xAxes.getIndex(0).end;

                    // Update chart data
                    const newData = labels.map((label, index) => ({
                        date: new Date(label),
                        value: data[index]
                    }));

                    // Add new data to the end and remove the first point if necessary
                    chartInstanceRef.current.data = [
                        ...chartInstanceRef.current.data.slice(newData.length),
                        ...newData
                    ];

                    // Apply the saved zoom level and position
                    chartInstanceRef.current.xAxes.getIndex(0).zoom({ start, end });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchChartData(valueParam);

        const intervalId = setInterval(() => {
            fetchChartData(valueParam);
        }, 15000);

        // Clean up the chart instance and interval on component unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.dispose();
                chartInstanceRef.current = null;
            }
            clearInterval(intervalId);
        };
    }, [valueParam]);





    const handleSwiperInit = (swiper) => {
        setSwiperInstance(swiper);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleFilterChange = (category) => {
        setSelectedFilter(category);
        localStorage.setItem('currFilter', category);
        var filteredData = marketDataArray.filter(item => item.categories.includes(category));
        setFilteredDataArray(filteredData);
        if (swiperInstance) {
            swiperInstance.slideTo(0);
        }
    };


    const handleSlideClick = (data) => {
        setCurrentItemTitle(data.title);
        setSelectedData(data);
        setValueParam(data.symbol);
    };


    const handleClick = () => {
        window.open('https://mygtcportal.com/getview?view=register&token=exhowwwweowwwwww', '_blank');
    };


    return (
        <section className="md:py-16 3xl:py-28 py-8 container border-b border-t border-b-gray-300">
            <h2 className="HeadingH2 mb-8">
                {t("title")}
            </h2>
            <p className="text-accent md:text-base text-sm 2xl:text-[17px] text-center max-w-4xl mx-auto">{t("sub_title")}</p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center my-4 space-x-4 space-y-2 " style={{ marginInline: '5px' }}>
                {['Most traded', 'Commodities', 'Indices', 'Shares', 'Forex'].map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg focus:outline-none ${selectedFilter === category ? 'bg-secondary text-white' : 'bg-gray-200'}`}
                        onClick={() => handleFilterChange(category)}
                    >
                        {category === 'Most traded' ? 'Most traded' : category}
                    </button>
                ))}
            </div>
            {/* Swiper */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={2.5}
                // centeredSlides={true}
                // centeredSlidesBounds={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5.5,
                        spaceBetween: 40,
                    },
                }}
                onInit={handleSwiperInit}
                onSlideChange={handleSlideChange}
            >
                {filteredDataArray.map((data, index) => (
                    <SwiperSlide key={index} onClick={() => handleSlideClick(data)}>
                        <div className={`grid grid-cols-4 bg-gray-100 gap-2 px-3 md:px-3 py-2 md:py-4 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 ${selectedData && selectedData.title === data.title ? 'bg-secondary text-white' : ''}`}>
                            <div className="col-span-1">
                                <img
                                    src={data.imageSrc}
                                    alt={data.title}
                                    className="w-11 h-11 md:w-11 md:h-11 object-contain rounded-full"
                                />
                            </div>
                            <div className="col-span-3">
                                <span className={`text-primary group-hover:text-[#FFF] text-sm 2xl:text-[17px] ${selectedData && selectedData.title === data.title ? 'text-white' : ''}`}>{data.title}</span>
                                <br />
                                <div className="flex justify-between">
                                    <small>{data.buy}</small>
                                    {/* <small className={getColorClass(data.percentageChange)}>{data.percentageChange}</small> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className={`swiper-button-prev ${isBeginning ? 'hidden' : ''}`}></div>
                <div className={`swiper-button-next ${isEnd ? 'hidden' : ''}`}></div>
            </Swiper>
            {/* <style jsx global>{`
                                    @media (min-width: 640px) {
                                    .swiper-wrapper {
                                        display: flex;
                                        place-content: center;
                                    }
                                    }
                                `}</style> */}

            {/* Selected Data Details */}
            {selectedData && (
                <div className="mt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="border border-solid rounded-lg p-4 w-full lg:w-[30%]">
                            <h3 className="text-lg font-semibold">{selectedData.title}</h3>
                            <div className="flex justify-between mt-2">
                                <div className="w-full lg:w-1/2 rounded-lg p-4 mr-2 flex flex-col items-start" style={{ backgroundColor: '#cf4447', cursor: 'pointer' }} onClick={handleClick}>
                                    <div className="text-white font-semibold">SELL</div>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-white text-lg font-bold">{selectedData.sell}</div>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 rounded-lg p-4 ml-2 flex flex-col items-end" style={{ backgroundColor: '#4c84cd', cursor: 'pointer' }} onClick={handleClick}>
                                    <div className="text-white font-semibold">BUY</div>
                                    <div className="flex items-center justify-between w-full">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd">
                                            <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
                                        </svg>
                                        <div className="text-white text-lg font-bold">{selectedData.buy}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg py-4 px-0 lg:px-4 w-full lg:w-[60%]">
                            <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "300px" }}></div>
                        </div>
                    </div>
                </div>


            )}
        </section>
    );
}

export default Markets;
