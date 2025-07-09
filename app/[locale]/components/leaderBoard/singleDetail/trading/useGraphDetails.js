import { useEffect, useState } from "react";
import { map } from "lodash";

const useGraphDetails = (props) => {
    const {
        data,
        id
    } = props;

    const [quarterlyGraphData, setQuarterlyGraphData] = useState([]);

    const getCurrentJSONList = () => {
        return data?.history?.entries;
    };

    let hydrocarbonList = [];
    const calculateGraphData = () => {
        const historyList = getCurrentJSONList();
        map(historyList, (item) => {
            const hydroValue = { x: "", y: "" };
            hydroValue.x = item?.tp;
            hydroValue.y = Number(item?.eb);
            hydrocarbonList.push(hydroValue);
        });

        const graphData = [{ name: "Leverage" || "", data: hydrocarbonList, type: "bar" }];
        setQuarterlyGraphData(graphData);
    };

    useEffect(() => {
        calculateGraphData();
    }, [data]);

    return {
        quarterlyGraphData,
        data,

    };
};

export default useGraphDetails;
