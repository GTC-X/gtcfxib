"use client";

const BonusPromoTable = () => {
  const tiers = [
    {
      tier: "Start Trading 🚀",
      bonus: "20% Bonus on first deposit",
      tradeRequirement: "Trade 90 lots to convert every $100 bonus to balance",
      redepositBonus: "10% Bonus on second deposit",
    },
  ];

  return (
    <div className="bonus-promo-container bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        

        <div className="relative text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[600] xl:text-[30px] 2xl:text-[32px] capitalize max-w-xl leading-tight mb-10">Exclusive Bonus Promo</h2>
            </div>

        {/* Table */}
        <table className="w-full text-sm md:text-base text-left border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] text-white">
              <th className="border border-gray-500 px-4 py-2">Tier</th>
              <th className="border border-gray-500 px-4 py-2">Bonus</th>
              <th className="border border-gray-500 px-4 py-2">
                Trade Requirement
              </th>
              <th className="border border-gray-500 px-4 py-2">
                Redeposit Bonus
              </th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <td className="border border-gray-400 px-4 py-2">{tier.tier}</td>
                <td className="border border-gray-400 px-4 py-2">{tier.bonus}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {tier.tradeRequirement}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {tier.redepositBonus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Promo Details */}
        <div className="promo-details mt-8">
          <p className="text-sm md:text-xl text-red-500">
            <strong>Note:</strong> 
            This offer is not valid for residents of China, Pakistan, or
            Indonesia.
          </p>
        </div>

        {/* Call to Action */}
        <div className="call-to-action text-center mt-6">
          <p className="text-lg font-semibold mb-4">
            🎯 Act Now! This exclusive promo is available for a limited time
            only.
          </p>
          <div className="text-center">
          <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("register2")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#05033162] rounded-lg shadow-lg overflow-hidden text-white 3xl:text-xl px-8 py-3 text-center md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-gradient-to-b hover:from-secondary hover:to-primary duration-500 hover:text-white"
                >
                  Register Now
                </button>
              
              <p className="text-sm cursor-pointer mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("register3")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
               *Terms and conditions apply.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusPromoTable;
