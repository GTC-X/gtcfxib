
  
  export default function VPSBoxingPak () {

    const features = [
        {
          title: 'Improved Trading Performance',
          description: [
            'VPS provides fast internet and low latency.',
            'This ensures seamless order execution and real-time data processing.',
            'Traders can quickly respond to changes and capitalize on opportunities.'
          ]
        },
        {
          title: 'Reliable and Consistent Connectivity',
          description: [
            'VPS offers a stable, always-on connection.',
            'Traders can execute trades without interruptions.',
            'This reduces the risk of missing critical market movements.'
          ]
        },
        {
          title: 'Enhanced Trading Security',
          description: [
            'VPS hosting has robust security measures.',
            'This protects traders\' data and accounts from threats.',
            'Traders can focus on strategies without security worries.'
          ]
        },
        {
          title: 'Automated Trading Capabilities',
          description: [
            'VPS enables traders to run automated bots 24/7.',
            'Automated trading can capitalize on opportunities round the clock.',
            'This can lead to increased profitability.'
          ]
        },
        {
          title: 'Scalability and Flexibility',
          description: [
            'VPS plans can be scaled up or down easily.',
            'This ensures optimal performance during high activity.',
            'Traders can quickly adapt to changing conditions and strategies.'
          ]
        },
        {
          title: 'Cost-Effective Solution',
          description: [
            'VPS is more cost-effective than a dedicated server.',
            'The monthly fee is significantly lower.',
            'Traders don\'t have upfront and ongoing infrastructure costs.'
          ]
        }
      ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative bg-gradient-to-r from-[#f9f9f9] from-10% via-[#f2f2f2] via-30% to-[#f4f4f4] to-90% px-8 pt-5 pb-8 shadow-2xl border-gray-400"
          >
            <div className="mt-4">
              <h3 className="text-lg font-normal  text-secondary">
                {feature.title}
              </h3>
              <ul className="mt-2 text-sm text-primary list-disc pl-5 leading-6">
                {feature.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
