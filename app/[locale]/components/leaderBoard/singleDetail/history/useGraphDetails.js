import { useEffect, useState } from "react";
import { filter, head, last, map, max, min, uniq } from "lodash";
import axios from "axios";

const useGraphDetails = (props) => {
    const {
        data,
        id,
        filter
    } = props;

    const [pagination, setPagination] = useState({ total: 0, skip: 20 })
    const [tableData, setTableData] = useState(null)
    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}trading/${id}/positions/public?scope=Any&$top=25&$orderby=openTime%20desc&$count=true&$skip=${pagination?.skip}&widget_key=social_platform_ratings`
            )
            .then((res) => {
                setTableData(res?.data)
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [id, pagination?.skip]);

    return {
        data,
        pagination,
        setPagination,
        tableData
    };
};

export default useGraphDetails;
