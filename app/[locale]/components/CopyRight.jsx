import { useTranslations } from 'next-intl'
import React from 'react'

const CopyRight = () => {
    const t = useTranslations('footerCopyRight');
  return (
    <div className='bg-white text-primary flex justify-center items-center p-4 text-[8px] md:text-sm  text-center'>
        {t("copyRightText")}
    </div>
  )
}

export default CopyRight