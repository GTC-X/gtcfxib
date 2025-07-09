'use client'
import React from 'react'
import Hero from '../component/CreditBonus/Hero'
import PaymentOption from '../component/PaymentOption'
import DepositRules from '../component/DepositRules'
import TermsCredit from '../component/CreditBonus/TermsCredit'
import { MdOutlinePayments } from 'react-icons/md';
import { LuWallet2 } from 'react-icons/lu';
import { BsBank } from 'react-icons/bs';

const ThaiBonus = () => {
  
  const customPaymentMethods = [
    {
      icon: <MdOutlinePayments />,
      title: "วิธีการชำระเงิน",
      description:"นอกจากนี้เรายังยอมรับช่องทางการชำระเงินออนไลน์ที่ปลอดภัยหลากหลายซึ่งจะแตกต่างกันไปตามประเทศของคุณ.",
    },
    {
      icon: <LuWallet2 />,
      title:"การชำระเงินกระเป๋าสตางค์",
      description: "คุณสามารถฝากเงินภายในยูโรโซนได้ จำนวนเงินขั้นต่ำสำหรับ SEPA คือ €250",
    },
    {
      icon: <BsBank />,
      title: "โอนเงินผ่านธนาคาร",
      description: "ครอบคลุมการโอนเงินที่หลากหลาย รวมถึงการโอนเงินไปยังธนาคารในประเทศ",
    },
  ];

  const customSteps = [
    {
      title: "1. เข้าสู่ระบบ",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part1.webp',
      alt: 'Fund Account',
      description: "เข้าถึงโดยการเข้าสู่พอร์ทัลลูกค้าของคุณ",
    },
    {
      title: "2. การฝากเงิน",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part2.webp',
      alt: 'Fund Account',
      description: "คุณสามารถคลิกที่ไอคอนกระเป๋าเงินหรือ 'ฝากเงิน' ในเมนูด้านซ้ายบนของหน้าจอ.",
    },
    {
      title: "3. เลือกวิธีการชำระเงิน",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part3.webp',
      alt: 'Fund Account',
      description: "เรียกดูหมวดหมู่เงินทุนและคลิกวิธีการชำระเงินที่คุณต้องการ",
    },
  ];

  const termsData = [
    "โบนัส 100% จะเติมให้กับลูกค้าที่ทำการฝากเงินขั้นต่ำ $500",
    "ลูกค้าจะรับโบนัสสูงสุดไม่เกิน $1,000",
    "ลูกค้าสามารถรับโบนัส 100% ทุกครั้งที่ฝากเงินตามจำนวนที่กำหนด แต่จะต้องไม่มีโบนัสที่ค้างอยู่ในบัญชี, และสามารถรับโบนัสได้ทั้งในการฝากเงินครั้งแรกและการฝากเงินครั้งถัดไป",
    "โบนัสสามารถนำไปใช้ในการเทรดลากได้",
    "ลูกค้าสามารถรับโบนัส 100% ได้เพียงบัญชีเดียว/user",
    "โบนัสไม่สามารถถอนออกหรือโอนย้ายไปยังบัญชีอื่นได้",
    "โบนัสจะถูกดึงกลับหากลูกค้าทำการถอนเงิน/กำไรหรือโอนเงินภายในบัญชี"
  ];
  
  return (
   <>
     <Hero 
      specialOfferText="โปรโมชั่นพิเศษนี้ เราขอมอบข้อเสนอสุดพิเศษให้คุณ"
      mainTitle="เริ่มต้นการเดินทางการเทรดของคุณด้วยโบนัส 100%"
      offerValidity="ให้บริการเฉพาะในประเทศไทย | ใช้ได้ตั้งแต่วันนี้ - 30 พฤศจิกายน 2024"
      offerNote="รีบคว้าโอกาสนี้และให้คุ้มค่าที่สุด!"
    />
    <PaymentOption
      title="วิธีการชำระเงินที่แตกต่างกันเพื่อกองทุน"
      subtitle="สำหรับวิธีที่รวดเร็วและง่ายดายในการฝากเงินเข้าบัญชีซื้อขายของคุณ ให้เลือกวิธีการชำระเงินวิธีใดวิธีหนึ่งด้านล่าง"
      paymentMethods={customPaymentMethods}
    />
      <DepositRules
      title="วิธีการฝากเงินเข้าบัญชีและเริ่มการซื้อขาย"
      description="ทำตามขั้นตอนเหล่านี้เพื่อฝากเงินเข้าบัญชีซื้อขายของคุณและเริ่มการซื้อขาย"
      steps={customSteps}
    />
    <TermsCredit
        title="แผนโบนัสเทรดได้ 100% ของ GTCFX - เงื่อนไขและข้อกำหนดโดยละเอียด"
        subtitle="โบนัสเครดิต 100% สามารถใช้เทรดได้และมีความเสี่ยงในการขาดทุน หากมีการถอนเงิน เครดิตจะถูกหักออกตามสัดส่วนของยอดที่ถอน"
        terms={termsData}
      />
   </>
  )
}

export default ThaiBonus