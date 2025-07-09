import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdCardMembership } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";

import { FaCreditCard } from "react-icons/fa";


const Solutions = () => {
  return (
    <div className="payment-solution mb-10">
      <div className="container">
        <div className="text-center">
          <h2 className="HeadingH2">Diverse Payment Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="flex justify-center items-center gap-4 bg-primary p-5 rounded-lg">
            <div className="text-secondary">
              <FaMoneyCheckDollar size={36} />
            </div>
            <h4 className="text-white text-xl font-semibold">Bank Transfers</h4>
          </div>
          <div className="flex justify-center items-center gap-4 bg-primary p-5 rounded-lg">
            <div className="text-secondary">
              <FaCreditCard size={36} />
            </div>
            <h4 className="text-white text-xl font-semibold">Credit/Debit Card</h4>
          </div>
          <div className="flex justify-center items-center gap-4 bg-primary p-5 rounded-lg">
            <div className="text-secondary">
              <BsCurrencyExchange size={36} />
            </div>
            <h4 className="text-white text-xl font-semibold">Digital Currencies</h4>
          </div>
          <div className="flex justify-center items-center gap-4 bg-primary p-5 rounded-lg">
            <div className="text-secondary">
              <MdCardMembership size={36} />
            </div>
            <h4 className="text-white text-xl font-semibold">Online Payments</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
