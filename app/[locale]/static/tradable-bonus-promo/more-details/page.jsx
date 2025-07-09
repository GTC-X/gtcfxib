import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tradable-bonus-promo/more-details`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/tradable-bonus-promo/more-details`;

  return {
    title: 'Boost Your Trading More Details | GTC FX',
    description: 'Maximize your trading potential at GTC FX! Get a 20% tradable bonus up to $15,000 and take your trading to the next level. Open your account today and start trading with extra funds to increase your investment opportunities.',
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return (
    <>
     <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white">
      <div className="container mx-auto px-4">
      <div className='text-center pb-8'>
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">Client Agreement</h2>
        </div>
   
        <h3 className="text-xl font-semibold mt-6">Client Responsibilities</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The Client acknowledges and agrees that all trading activities are undertaken at their own risk.</li>
          <li>The Client is fully responsible for all trades and investment decisions made using their trading account.</li>
          <li>The Company does not provide any guarantees or assurances regarding the success or profitability of the Client's trading activities.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Limitation of Liability</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The Company shall not be held responsible for any losses incurred by the Client as a result of trading activities, including, but not limited to, losses of the initial deposit, the bonus amount, or any additional funds.</li>
          <li>The Client agrees that they cannot take any legal action whatsoever against the Company, its other offices, subsidiaries, affiliates, officers, directors, employees, agents, or representatives in the event of any trading losses.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">No Legal Recourse</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The Client agrees that by accepting the bonus, they waive any right to seek legal recourse against the Company or its affiliates for any trading losses or other damages incurred.</li>
          <li>This waiver of legal recourse applies to any and all claims, disputes, or causes of action arising out of or in connection with this Agreement or the Client's trading activities.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Miscellaneous</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous understandings or agreements, whether written or oral.</li>
          <li>Any amendments or modifications to this Agreement must be in writing and signed by both parties.</li>
          <li>This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company is incorporated, without regard to its conflict of law principles.</li>
          <li>If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700">
          The above terms apply to the 20% bonus promotion and form an addendum to the Client Agreement. Please ensure you have read and understood all Terms and Conditions applicable to your account.
        </p>
      </div>
    </section>
    </>
  )
}

export default Page