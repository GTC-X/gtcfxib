 import { chunk } from "lodash";
import { useEffect, useMemo, useState } from "react";

export const usePagination = ({ list, filterStatus, size = 8 ,activeInnerTabKey}) => {
  const [pagination, setPagination] = useState({ page: 0, total: 0 });
  const [items, setItems] = useState(list);
  const filteredList = useMemo(() => {
     if (!filterStatus) return list;
    return list?.filter((item) => {
      // const percentage = calculatePercantage(item?.data?.value, item?.data?.target, item?.data?.polarity);
      // const color = getIndicator(percentage.percentage).style.circle;
      return item;
    });
  }, [filterStatus, list]);
  const chunkList = useMemo(() => chunk(filteredList, size), [filteredList,size]);

  // useEffect(() => {
  //   setItems(chunkList[pagination.page]||[]);
  // }, [chunkList, pagination.page]);

  // useEffect(() => {
  //   setPagination({ page: 0, total: 0 });
  // }, [filterStatus,activeInnerTabKey]);

  // useEffect(() => {
  //   setPagination((pagination) => ({ ...pagination, total: (chunkList?.length || 0) - 1 }));
  // }, [chunkList]);

  const onPageChange = (page) => {
    setPagination((pagination) => ({ ...pagination, page }));
  };

  return { list: items, pagination, onPageChange };
};
