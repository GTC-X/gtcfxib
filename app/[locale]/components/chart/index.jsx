// import { useRef } from "react";
// import dynamic from 'next/dynamic';
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// const ColumnChart = (props) => {
//     const chartRef = useRef(null);
//     const {
//         width,
//         seriesData = [],
//         height,
//         label,
//         strokeWidth = [1],
//         showAxis = false,
//         grid = false
//     } = props;

//     const options =
//     {
//         chart: {
//             type: 'line',
//             zoom: {
//                 enabled: false
//             },
//             toolbar: {
//                 show: false,
//             },
//         },
//         dataLabels: {
//             enabled: false
//         },
//         colors: ["#1039af"],
//         stroke: {
//             show: true,
//             curve: "straight",
//             lineCap: "butt",
//             width: strokeWidth,
//             dashArray: 0,
//         },
//         xaxis: {
//             type: 'datetime',
//             labels: {
//                 show: showAxis||false
//             },
//             axisBorder: {
//                 show: false
//             },
//             axisTicks: {
//                 show: false,
//             },
//             crosshairs: {
//                 show: false
//             }
//         },
//         yaxis: {
//             tickAmount: 4,
//             labels: {
//                 show: showAxis||false
//             },
//             title: {
//                 text: label,
//                 style: {
//                     color: "#b68756",
//                     fontSize: '16px',
//                     fontWeight: 600,
//                     cssClass: 'apexcharts-yaxis-title',
//                 },
//             }
//         },
//         grid: {
//             show: grid||false,
//         },
//         tooltip: {
//             enabled: true
//         },
//         legend: {
//             horizontalAlign: 'left'
//         },
//         annotations: {
//             yaxis: [{
//                 y: 0,
//                 //   borderColor: executiveReport ? "" : Colors.primary,
//                 strokeDashArray: 0,
//             },],
//             xaxis: [
//                 {
//                     x: 0,
//                     borderColor: "",
//                 },
//             ],
//         },
//     };

//     return (
//         <div className="w-full">
//             <Chart options={options} series={seriesData}
//                 type="area" height={height || 350} width={width || 250}
//                 className="chartss"
//             />
//         </div>
//     );
// };

// export default ColumnChart;

import dynamic from 'next/dynamic';
import { useRef } from "react";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ColumnChart = (props) => {
    const chartRef = useRef(null);
    //   fillColor
    // legendColors
    // legendFillColors
    const {
        width,
        seriesData = [],
        height,
        label,
        strokeWidth = [1],
        showAxis = false,
        grid = false
    } = props;

    const options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        
    },
        dataLabels: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#1039af"],
        stroke: {
            show: true,
            curve: "straight",
            lineCap: "butt",
            width: strokeWidth,
            dashArray: 0,
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: showAxis || false
},
    axisBorder: {
        show: false
    },
    axisTicks: {
        show: false,
    },
    crosshairs: {
        show: false
    }
        },
yaxis: {
    tickAmount: 4,
        labels: {
        show: showAxis || false
    },
    title: {
        text: label,
            style: {
            color: "#b68756",
                fontSize: '16px',
                    fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-title',
                },
    }
},
grid: {
    show: grid || false,
        },
legend: {
    horizontalAlign: 'left'
}
    };

return (
    <div className="w-full">
        <Chart options={options} series={seriesData}
            ref={(ref) => (chartRef.current = ref)}
            type="area" height={height || 350} width={width || 250}
            className="chartss"
        />
    </div>
);
};

export default ColumnChart;

