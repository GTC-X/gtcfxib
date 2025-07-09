"use client";
import React from "react";
import LiveAccountButton from "../liveAccountButton";


const MarginBonusContent = () => {
  return (
    <section className="container mx-auto py-10 text-primary">
    
    <div className="max-w-5xl mx-auto py-8">

    <div className="relative text-center mb-10">
            <h2 className="HeadingH2 capitalize leading-tight font-bold">
            What is the GTC Margin Bonus?
            </h2>

            <p className="mb-4 max-w-5xl mx-auto">
            A Margin Bonus is a non-withdrawable and non-transferable credit issued based on your deposit amount. Go ahead and see the terms and conditions below as they will explain all the details. Our Margin Bonus increases your account’s usable margin, giving you even more room to trade, which is apt as there's extreme market volatility right now.
      </p>

      <p className="mb-6 text-red-600 font-semibold">
        ⚠️ Important: The bonus can be lost and will not be restored if removed. It cannot be withdrawn or transferred at any point.
      </p>

          </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold text-left mb-6 text-primary">Margin Bonus Promotion – Terms & Conditions</h2>
                
              
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">1. Eligibility</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">The Margin Bonus Promotion ("Promotion") is available exclusively to clients with <b>fully verified live trading accounts</b> at GTCFX.</li>
                        <li className="pl-2">The Promotion applies to:
                            <ul className="list-disc pl-6 mt-1">
                                <li><b>First-time deposits of at least $500 made by new clients</b> during the active promotional period, and</li>
                                <li><b>Top-up deposits made by existing clients</b>, where the bonus is applied only to the <b>newly deposited amount.</b></li>
                            </ul>
                        </li>
                        <li className="pl-2">The Promotion is available on <b>all account types</b>, except for <b></b>Cent accounts.</li>
                        <li className="pl-2">Each client may participate in the Promotion once, unless otherwise authorized in writing by GTCFX.</li>
                        <li className="pl-2">Clients trading via MAM, PAMM, or Social Trading platforms are <b>not eligible</b> for the Promotion.</li>
                        <li className="pl-2">The Margin Bonus is a non-losing bonus used <b>exclusively to support margin</b>. It does not constitute actual balance and cannot be lost or withdrawn.</li>
                        <li className="pl-2">The Margin Bonus is <b>not available</b> to residents of the following jurisdictions:
                            <ul className="list-disc pl-6 mt-1">
                                <li>China</li>
                                <li>Vietnam</li>
                                <li>Taiwan</li>
                                <li>Hong Kong</li>
                            </ul>
                        </li>
                    </ol>
                </div>

            
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">2. Bonus Size and Structure</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">The bonus amount is calculated as follows:
                            <ul className="list-disc pl-6 mt-1">
                                <li><b>100% </b>of the deposit amount, for deposits <b>up to $10,000</b></li>
                                <li><b>50%</b> of the portion that exceeds $10,000</li>
                            </ul>
                        </li>
                        <li className="pl-2">The <b>maximum total bonus</b> per client is capped at <b>$20,000.</b></li>
                        <li className="pl-2">To receive the bonus, the client must first register for the promotion at <a href="https://www.gtcfx.com/margin-bonus" className="text-secondary hover:underline">https://www.gtcfx.com/margin-bonus</a> and then make a qualifying deposit. Bonus requests submitted without prior registration will not be processed.</li>
                        <li className="pl-2">Once the client has registered for the promotion and made the qualifying deposit, the bonus request will be automatically generated and processed. No separate manual request is required beyond the registration form.</li>
                    </ol>
                </div>

          
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">3. Cashback Conditions</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">Clients who receive the Margin Bonus are eligible to claim <b>$3 per full lot traded</b> on <b>FX pairs, gold, metals, and oil</b> within a <b>3-month period</b> from the date of their first qualifying deposit.</li>
                        <li className="pl-2">Cashback can be requested only once per participation in the promotion. To be eligible:
                            <ul className="list-disc pl-6 mt-1">
                                <li>The cashback amount must be at least $500, and</li>
                                <li>It must represent at least 20% of the bonus received.</li>
                            </ul>
                            <p className="mt-2 italic">Requests that do not meet both conditions will not be processed.</p>
                            <div className="bg-gray-100 p-4 rounded-md mt-3">
                                <h4 className="font-medium mb-2">Examples:</h4>
                                <ul className="list-disc space-y-2 pl-5">
                                    <li>If a client receives a $2,500 bonus, they must trade at least ~167 lots to earn $500 in cashback → <span className="text-green-600">✅ meets both $500 minimum and 20% of $2,500</span></li>
                                    <li>If a client receives a $3,000 bonus and trades only ~133 lots to earn $400 cashback → <span className="text-red-600">❌ ineligible due to both low cashback and being below 20% of bonus</span></li>
                                    <li>If a client receives a $1,000 bonus, they must trade at least ~167 lots to earn $500 cashback, which is over 50% of the bonus → <span className="text-green-600">✅ meets both conditions</span></li>
                                    <li>If a client receives a $5,000 bonus and trades 100 lots to earn $300 cashback → <span className="text-red-600">❌ ineligible: cashback is below both $500 and 20% threshold</span></li>
                                </ul>
                            </div>
                        </li>
                        <li className="pl-2">The total cashback is capped at the value of the bonus received.</li>
                        <li className="pl-2">Cashback must be requested through the client's personal account manager.</li>
                        <li className="pl-2">Cashback will be credited within 7 business days from the date the request is approved.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">4. Bonus Use and Nature</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">The Margin Bonus is strictly for trading margin support and cannot be:
                            <ul className="list-disc pl-6 mt-1">
                                <li>Withdrawn</li>
                                <li>Transferred</li>
                                <li>Used as tradable or real account balance</li>
                            </ul>
                        </li>
                        <li className="pl-2">Any withdrawal from the client's account will result in the automatic removal of the bonus.</li>
                    </ol>
                </div>

        
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">5. Withdrawal Conditions</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">GTCFX reserves the right to remove the bonus if the account equity falls below the bonus amount.</li>
                        <li className="pl-2">Once removed, the bonus will not be reinstated under any circumstances.</li>
                    </ol>
                </div>

             
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">6. Bonus Expiry</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">The Margin Bonus is valid for up to <b>3 months</b> from the date of the first qualifying deposit.</li>
                        <li className="pl-2">GTCFX may remove the bonus automatically <b>after the 3-month period</b>, regardless of trading activity.</li>
                        <li className="pl-2">If cashback conditions are not met within the 3-month period, <b>eligibility for cashback is forfeited</b>.</li>
                    </ol>
                </div>

       
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">7. Abuse Policy</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">Abuse of the promotion is strictly prohibited. Examples of abuse include but are not limited to:
                            <ul className="list-disc pl-6 mt-1">
                                <li>Hedging between multiple accounts or brokers</li>
                                <li>Latency arbitrage or other technical exploits</li>
                                <li>Coordinated manipulation of bonus terms</li>
                            </ul>
                        </li>
                        <li className="pl-2">GTCFX reserves the right to:
                            <ul className="list-disc pl-6 mt-1">
                                <li><b>Remove the bonus without prior notice</b></li>
                                <li><b>Cancel cashback or profits</b> obtained through abusive behavior</li>
                                <li><b>Suspend or terminate client accounts</b> involved in fraud or abuse</li>
                            </ul>
                        </li>
                    </ol>
                </div>

            
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">8. Stop Out Policy</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">If the account equity reaches the stop-out level, or if the floating loss equals the actual account balance, the Margin Bonus will be automatically removed.</li>
                    </ol>
                </div>

               
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-primary">9. Client Acknowledgment</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">By accepting the Margin Bonus, the client acknowledges and agrees to these Terms & Conditions.</li>
                        <li className="pl-2">Misuse of the Promotion may result in the removal of the bonus, forfeiture of profits, and/or suspension of the trading account.</li>
                    </ol>
                </div>

            
                <div className="bg-blue-50 p-6 rounded-md">
                    <h2 className="text-lg font-semibold mb-4 text-primary">How to Apply</h2>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="pl-2">Go to <a href="https://www.gtcfx.com/margin-bonus" className="text-secondary hover:underline">https://www.gtcfx.com/margin-bonus</a> and <b>register for the promotion</b> by submitting the form.</li>
                        <li className="pl-2">Make a <b>qualifying deposit of at least $500</b> into your verified live trading account.</li>
                        <li className="pl-2">Once both steps are completed, your bonus request will be automatically processed by the GTCFX Support Team.</li>
                        <li className="pl-2"><b>Only registered clients</b> will be eligible to receive the bonus.</li>
                    </ol>
                    
                </div>
                <p className="mt-4">To claim cashback, reach out directly to your <b>Personal Account Manager </b>once the trading and eligibility requirements are fulfilled.</p>
                    <p className="mt-2">For assistance, contact your Account Manager or the GTCFX Support Team.</p>

                    <div className=" mt-10 text-center">
                        <LiveAccountButton hoverStyle="text-white bg-[#141b43] text-[#fff] hover:bg-secondary hover:text-[#fff]" />
                    </div>
            </div>
        </div>
    </div>
  </section>
  
  

  );
};

export default MarginBonusContent