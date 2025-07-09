import { useTranslations } from "next-intl";
import React from "react";

const NoteNew = () => {
  const t = useTranslations("accounts.account_types");
 

  return (
    <>
    <p className="note text-sm pt-1">***  {t("subNote1")}</p>
    </>
 
  );
};

export default NoteNew