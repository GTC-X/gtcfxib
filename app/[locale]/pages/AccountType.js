"use client";
import React from "react";
import { useTranslations } from "next-intl";
import AccountTypesTable from "../components/account/AccountTypesTable";

const AccountTypePage = () => {
  const t = useTranslations("account.accounting.bannerText")
  return (
    <>
         <div className="container pb-10">
        <AccountTypesTable/>
      </div>
    </>
  );
};

export default AccountTypePage;