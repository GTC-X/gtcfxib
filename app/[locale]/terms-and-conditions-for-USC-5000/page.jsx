import React from 'react'

const page = () => {
  return (
    <section className='terms-condition py-10 md:py-14 2xl:py-16'>
      <div className='container'>
        <div className='text-left'>
          <h2 className='text-2xl font-bold mb-6'>Terms And Conditions</h2>

          <ul className='list-disc pl-6 space-y-3'>
            <li>The bonus amount per customer is up to USC 5,000.</li>
            <li>
             The bonus is credited solely as a trading deposit. The Client does not have the right to withdraw the bonus or consider it as part of their deposited funds.
             <div className='py-5 text-sm '>
              <p className='mb-5'>This losable bonus can be withdrawn under the following conditions:</p>
              <ul className='list-disc pl-6 space-y-3'>
                <li>1. Complete a minimum of 500 lots (5 standard lots) round-trip trades on FX, Metals, and Oils.</li>
                <li>2. Deposit at least $100 into your trading account.</li>
              </ul>
             </div>
            </li>
            <li>
              This losable bonus can be withdrawn at a rate of 500 lots (5 standard lots) round trip traded on FX, Metals, and Oils only.
            </li>
            <li>
              If the customer opts to withdraw only the profits generated from trading, the unconverted bonus amount will be deducted.
            </li>
            <li>
              An internal transfer request from the bonus account will be treated as a withdrawal from that trading account. If the client wishes to do an internal transfer to another trading account, the client needs to maintain the initial deposit amount of equity.
            </li>
            <li>
              The bonus is applicable only on the deposited amount to the bonus-designated account. The client is not eligible for the bonus on internal transfers.
            </li>
            <li>
              Clients must complete trading requirements within 30 days of receiving the bonus. If the full trading requirements are not met at the time of expiry, clients are only entitled to a percentage of the bonus calculated pro rata.
            </li>
            <li>This bonus cannot be used in combination with any other bonuses.</li>
            <li>
              Indices, Shares, and Crypto trading do not count towards trading volume requirements.
            </li>
            <li>
              GTC reserves the right to correct the trading calculation in the event of any suspected abuse or manipulation of this bonus policy and promotion.
            </li>
            <li>Clients who are trading under a MAM or PAMM are not entitled to any bonus.</li>
            <li>
              If the client's positions are closed due to a stop-out before having the bonus added, the client is not eligible for the bonus.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default page