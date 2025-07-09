'use client';

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const t = useTranslations("thankYouLiveAccount.content")
  console.log(message)

  return (
    <section className='py-10 md:py-14 xl:py-20 3xl:py-20 5xl:py-28'>
      <div className='container'>
        <h1 className='text-[2em] md:text-[2em] text-primary text-center mb-0'>{t("heading")}</h1>
        <p className='text-secondary font-[400] md:text-[1.5rem] text-center mb-5' >{t("heading1")}</p>
        {message == "true" &&
          <p className='text-secondary pb-2 text-center mx-auto'>Please check your email. The details have been sent to the provided email address.</p>
        }
        <p className='text pb-2 max-w-96 mx-auto'>{t("des")}</p>
        <p className='text pb-2'>{t("des1")}</p>
        <p className='text pb-2'>{t("footer")}</p>
        <p className='text pb-2'>
          {t("footer1")}
          <a className='cursor-pointer ml-2 text-secondary' href='mailto:support@gtcfx.com'>
            support@gtcfx.com.
          </a>
        </p>
      </div>
    </section>
  )
}

export default ThankYouPage;