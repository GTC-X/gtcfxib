import axios from "axios";
import { useEffect, useState } from "react";

export const useLanguageHook = ({ locale, messages }) => {
  const [translation, settranslation] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (locale == "en" || locale == "zh-hans" || locale == "ar-AE") {
      settranslation(messages);
      setLoading(false);
    } else {
      setLoading(true);
      axios
        .get(
          `https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/messages/${locale}.json`
        )
        .then((res) => {
          settranslation(res?.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, []);

  return {
    translation,
    loading,
  };
};
