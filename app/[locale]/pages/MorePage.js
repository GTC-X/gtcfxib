import React from 'react'

const MorePage = () => {

    const content = [
        {
          sectionTitle: "Client Responsibilities",
          items: [
            "The Client acknowledges and agrees that all trading activities are undertaken at their own risk.",
            "The Client is fully responsible for all trades and investment decisions made using their trading account.",
            "The Company does not provide any guarantees or assurances regarding the success or profitability of the Client's trading activities."
          ]
        },
        {
          sectionTitle: "Limitation of Liability",
          items: [
            "The Company shall not be held responsible for any losses incurred by the Client as a result of trading activities, including, but not limited to, losses of the initial deposit, the bonus amount, or any additional funds.",
            "The Client agrees that they cannot take any legal action whatsoever against the Company, its other offices, subsidiaries, affiliates, officers, directors, employees, agents, or representatives in the event of any trading losses."
          ]
        },
        {
          sectionTitle: "No Legal Recourse",
          items: [
            "The Client agrees that by accepting the bonus, they waive any right to seek legal recourse against the Company or its affiliates for any trading losses or other damages incurred.",
            "This waiver of legal recourse applies to any and all claims, disputes, or causes of action arising out of or in connection with this Agreement or the Client's trading activities."
          ]
        },
        {
          sectionTitle: "Miscellaneous",
          items: [
            "This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous understandings or agreements, whether written or oral.",
            "Any amendments or modifications to this Agreement must be in writing and signed by both parties.",
            "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company is incorporated, without regard to its conflict of law principles.",
            "If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect."
          ]
        }
      ];
    
      const footerNote = "The above terms apply to the 20% bonus promotion and form an addendum to the Client Agreement. Please ensure you have read and understood all Terms and Conditions applicable to your account.";


  return (
     <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center pb-8">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight">
              Client Agreement
            </h2>
          </div>

          {content.map((section, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-xl font-semibold">{section.sectionTitle}</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-4 text-sm text-gray-700">{footerNote}</p>
        </div>
      </section>
  )
}

export default MorePage