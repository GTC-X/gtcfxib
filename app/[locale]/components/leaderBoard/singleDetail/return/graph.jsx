import { useRef } from "react";
import useGraphDetails from "./hooks/useGraphDetails";
import ColumnChart from "../../chart";

const Monthly = (props) => {
    const { item, height, width, date, label } = props;
    const ref = useRef(null)
    const {
        quarterlyGraphData,
    } = useGraphDetails({
        item,
        date
    });

    return (
        <div
            className=' w-full flex flex-col gap-4  relative h-full'
            ref={ref}
        >
            <div className='flex gap-1 h-full'>
                <div className='grid grid-cols-1 flex-1 min-h-8 relative line-last-series'>
                    <ColumnChart
                        height={height}
                        width={width}
                        seriesData={quarterlyGraphData}
                        showAxis={true}
                        label={label}
                    />
                </div>
            </div>
        </div >
    );
};

export default Monthly;
