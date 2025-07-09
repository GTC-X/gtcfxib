import React, {Suspense} from "react";
import { useTranslations } from "next-intl";
import FrequentlyAskedQuestions from "../../../components/mam-account/FrequentlyAskedQuestions";
const ForexFAQ = ({ className }) => {
  const faqs = [
    {
      title: "What are Forex symbol in MT4/MT5?",
      paragraphs: [
        "In MetaTrader 4 (MT4) and MetaTrader 5 (MT5), Forex symbols are representations of different currency pairs that traders can trade on the platform. These symbols are typically composed of a three-letter abbreviation for the base currency and a three-letter abbreviation for the quote currency.",
        `For example, in the symbol "EUR/USD," "EUR" represents the Euro (base currency), and "USD" represents the US Dollar (quote currency). The Forex symbols are used to identify and track the value of one currency relative to another.`,
        `Here are a few examples of Forex symbols:<br />
        EUR/USD - Euro/US Dollar
        USD/JPY - US Dollar/Japanese Yen
        GBP/USD - British Pound/US Dollar
        AUD/JPY - Australian Dollar/Japanese Yen
        NZD/USD - New Zealand Dollar/US Dollar`,
      ],
    },
  ];

  return (
    <section className={className}>
      <div className="py-10 forex-faq">
        <div className="container">
          <Suspense>
            <FrequentlyAskedQuestions data={faqs} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ForexFAQ;

