import { useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";

export const useGlossaryHook = () => {
   const alphabetsArray2 = Array.from(Array(26), (_, i) =>
    String.fromCharCode(65 + i)
  );

  const [list] = useState(alphabetsArray2);
  const [data, setData] = useState([]);
  const [active, setActive] = useState("A");
  const [allList, setAllList] = useState([]);

  const locale = useLocale();
  useEffect(() => {
    axios
      .get(
        `https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/glossary/${locale}.json`
      )
      .then((res) => {
        setData(res?.data["A"]);
        setAllList(res?.data);
      })
      .catch(() => {
        console.log("errr");
      });
  }, []);

  useEffect(() => {
    const filter = allList[active];
     setData(filter);
  }, [active]);

  console.log({ data });
  return {
    list,
    active,
    setActive,
    data,
  };
};


