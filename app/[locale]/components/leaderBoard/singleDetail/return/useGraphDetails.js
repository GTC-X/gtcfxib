import { useEffect, useState } from "react";
import { map } from "lodash";
import axios from "axios";

const useGraphDetails = (props) => {
    const {
        item,
        id
    } = props;

    const [graphDetails, setGraphDetails] = useState([]);
    const [quarterlyGraphData, setQuarterlyGraphData] = useState([]);

    const getCurrentJSONList = () => {
        return graphDetails;
    };

    let hydrocarbonList = [];
    const calculateGraphData = () => {
        const historyList = getCurrentJSONList();
        map(historyList, (item) => {
            const hydroValue = { x: "", y: "" };
            // if (item?.value !== undefined) {
            hydroValue.x = item?.month;
            hydroValue.y = Number(item?.returnChange);
            hydrocarbonList.push(hydroValue);
        });
        const graphData = [{ name: "Return" || "", data: hydrocarbonList, type: "bar" }];
        setQuarterlyGraphData(graphData);
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}history/${160}/monthly?widget_key=social_platform_ratings`
            )
            .then((res) => {
                setGraphDetails(res?.data);
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [id]);

    useEffect(() => {
        calculateGraphData();
    }, [graphDetails]);

    return {
        quarterlyGraphData,
        item,
    };
};

export default useGraphDetails;
