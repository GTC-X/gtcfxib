'use client'
import { useState, useEffect } from 'react';
import LervageHero from '../components/LeverageCom/LervageHero';
import WhatLervage from '../components/LeverageCom/WhatLervage';
import LeverageTable from '../components/LeverageCom/leverageTable';
import LeveragePop from '../components/LeverageCom/LeveragePop';
import TieredLeverageFAQ from '../components/LeverageCom/TieredLeverageFAQ ';
import LervageNewUpdate from '../components/LeverageCom/LervageNewUpdate';

const DynamicLervagePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup only when the component mounts
    setIsPopupOpen(false);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <LervageHero />
      <WhatLervage />
      <LeverageTable />
      <LervageNewUpdate />
      <LeveragePop isOpen={isPopupOpen} onClose={handleClosePopup} />
      <TieredLeverageFAQ />
    </>
  );
};

export default DynamicLervagePage;
