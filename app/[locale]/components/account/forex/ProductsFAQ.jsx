import React, {Suspense} from "react";
import Accordion from "../../common/Accordion";
import { useTranslations } from "next-intl";
import FrequentlyAskedQuestions from "../../../components/mam-account/FrequentlyAskedQuestions";

const ProductsFAQ = ({ faqs, className }) => {


  return (
    <>

    <section className={className}>
      <div className="forex-faq">
        <div className="container">
          <Suspense>
            <FrequentlyAskedQuestions data={faqs} />
          </Suspense>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductsFAQ;
