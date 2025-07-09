import { useRef } from "react";
import useGraphDetails from "./hooks/useGraphDetails";
import ColumnChart from "../../chart";

const Charts = (props) => {
    const { item, height, width } = props;
    const ref = useRef(null)
    const {
        maxYValue,
        minYValue,
        quarterlyGraphData,
        loading,
    } = useGraphDetails({
        item
    });

    return (
        <div
            className=' w-full flex flex-col gap-4  relative h-full'
            // dir={direction}
            id='priority-graph'
            ref={ref}
        >
            <>
                <div className='flex gap-1 h-full'
                >

                    <div
                        className='grid grid-cols-1 flex-1 min-h-8 relative line-last-series'
                        style={item?.config?.overlayText?.[code] ? { opacity: .3 } : { fontFamily: "Lusail" }}
                    >
                        <ColumnChart
                            height={height}
                            width={width}
                            seriesData={quarterlyGraphData}
                        />
                    </div>
                </div>
            </>
        </div>
    );
};

export default Charts;
