import { useTranslations } from "next-intl";
import { FaChartLine } from "react-icons/fa";

const TradingNotes = () => {
    const t = useTranslations("market_overview.TradingNotes");
  const notes = [
    t('line1'),
    t('line2'),
    t('line3'),
    t('line4')
  ];

  return (
    <div className="grid md:grid-cols-1 gap-6 bg-primary text-white p-6 mt-14 text-sm md:text-base leading-relaxed">
      {notes.map((note, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <FaChartLine className="text-blue-400 mt-1" />
          <p className="text-left">{note}</p>
        </div>
      ))}
    </div>
  );
};

export default TradingNotes;
