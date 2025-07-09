import { useEffect, useState } from "react";
import {  map } from "lodash";
import axios from "axios";

const useGraphDetails = (props) => {
    const {
        data,
        id,
        filter
    } = props;

    const [quarterlyGraphData, setQuarterlyGraphData] = useState([]);
    const [graphDetails, setGraphDetails] = useState([]);
    const [tableData, setTableData] = useState(null)

    const getCurrentJSONList = () => {
        return graphDetails?.distribution;
    };

    let hydrocarbonList = [];
    const calculateGraphData = () => {
        const historyList = getCurrentJSONList();
        map(historyList, (item) => {
            const hydroValue = { x: "", y: "" };
            hydroValue.x = item?.symbol;
            hydroValue.y = filter == 'count' ? Number(item?.count) : Number(item?.volume);
            hydrocarbonList.push(hydroValue);
        });
        const graphData = {
            data: {
                label: hydrocarbonList?.map(single => `${single?.x}: ${single?.y}`),
                data: hydrocarbonList?.map(single => single?.y)
            },
            type: "pie"
        };
        setQuarterlyGraphData(graphData);
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}reports/${id}/instruments?widget_key=social_platform_ratings`
            )
            .then((res) => {
                setGraphDetails(res?.data);
            })
            .catch((err) => {
                console.log({ err });
            });
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}reports/${id}/trading?widget_key=social_platform_ratings`
            )
            .then((res) => {
                setTableData(res?.data?.summary);
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [id]);

    useEffect(() => {
        calculateGraphData();
    }, [graphDetails, filter]);


    return {
        quarterlyGraphData,
        data,
        tableData
    };
};

export default useGraphDetails;
