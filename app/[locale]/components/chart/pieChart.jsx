import dynamic from 'next/dynamic';
import { useRef } from "react";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const PieChart = (props) => {
    const {
        seriesData
    } = props
    const chartRef = useRef(null);
    const options =
    {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            labels: seriesData?.data?.label,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    };

    return (
        <Chart
            ref={(ref) => (chartRef.current = ref)}
            options={options?.options}
            series={seriesData?.data?.data || []}
            type={"donut" || undefined}
            width={400}
            height={400}
        />
    );
};

export default PieChart;

