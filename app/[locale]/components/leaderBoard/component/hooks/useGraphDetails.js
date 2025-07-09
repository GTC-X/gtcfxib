import { useEffect, useState } from "react";
import { filter, head, last, map, max, min, uniq } from "lodash";

const useGraphDetails = (props) => {
    const {
        item,
        date
    } = props;

    const [graphDetails, setGraphDetails] = useState(item);
    const [quarterlyGraphData, setQuarterlyGraphData] = useState([]);
   
    const getCurrentJSONList = () => {
        const dateAgo = new Date();
        if (date == "3months") {
            dateAgo.setMonth(dateAgo.getMonth() - 3);
            const filteredData = item?.history?.entries?.filter(record => {
                const recordDate = new Date(record.tp);
                return recordDate >= dateAgo;
            });
            return filteredData;
        }
        if (date == "1months") {
            dateAgo.setMonth(dateAgo.getMonth() - 1);
            const filteredData = item?.history?.entries?.filter(record => {
                const recordDate = new Date(record.tp);
                return recordDate >= dateAgo;
            });
            return filteredData;
        }
        if (date == "week") {
            dateAgo.setDate(dateAgo.getDate() - 7);
            const filteredData = item?.history?.entries?.filter(record => {
                const recordDate = new Date(record.tp);
                return recordDate > dateAgo;
            });
            return filteredData;
        }
        if (date == "all") {
            return item?.history?.entries
        }
        if (date == "year") {
            dateAgo.setFullYear(dateAgo.getFullYear() - 1);
            const filteredData = item?.history?.entries?.filter(record => {
                const recordDate = new Date(record.tp);
                return recordDate < dateAgo;
            });
            return filteredData;
        }
        return item?.history?.entries;
    };

    let hydrocarbonList = [];
    const calculateGraphData = () => {
        const historyList = getCurrentJSONList();
        map(historyList, (item) => {
            const hydroValue = { x: "", y: "" };
            // if (item?.value !== undefined) {
            hydroValue.x = item?.tp;
            hydroValue.y = Number(item?.eb);
            hydrocarbonList.push(hydroValue);
        });

        const graphData = [{ name: "Return" || "", data: hydrocarbonList, type: "area" }];
        setQuarterlyGraphData(graphData);
    };

    useEffect(() => {
        setGraphDetails(item);
    }, [item, date]);

    useEffect(() => {
        calculateGraphData();
    }, [item, date]);

    return {
        quarterlyGraphData,
        item,
    };
};

export default useGraphDetails;
