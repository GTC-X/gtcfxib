'use client'
import React from 'react'
import Hero from '../component/CreditBonus/Hero'
import PaymentOption from '../component/PaymentOption'
import DepositRules from '../component/DepositRules'
import TermsCredit from '../component/CreditBonus/TermsCredit'
import { MdOutlinePayments } from 'react-icons/md';
import { LuWallet2 } from 'react-icons/lu';
import { BsBank } from 'react-icons/bs';

const HundredCreditBonus = () => {
  
  const customPaymentMethods = [
    {
      icon: <MdOutlinePayments />,
      title: "Formas de pago",
      description:"También aceptamos una serie de canales de pago seguro en línea que variarán en función de su país.",
    },
    {
      icon: <LuWallet2 />,
      title:"Pago con monedero virtual",
      description: "Varios métodos de deposito, incluyendo tarjeta de crédito, apple pay, google pay y otros monederos virtuales",
    },
    {
      icon: <BsBank />,
      title: "Transferencia bancaria",
      description: "Se aceptan transferencias bancarias a nuestro banco.",
    },
  ];

  const customSteps = [
    {
      title: "1. Inicio de sesión",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part1.webp',
      alt: 'Fund Account',
      description: "Acceda iniciando sesión en su portal de clientes.",
    },
    {
      title: "2. Depósito",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part2.webp',
      alt: 'Fund Account',
      description: "Puede hacer clic en el icono del monedero o en 'DEPÓSITO' en el menú de la parte superior izquierda de la pantalla.",
    },
    {
      title: "3. Seleccione el método de pago",
      imageSrc: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/part3.webp',
      alt: 'Fund Account',
      description: "Navegue por las categorías de deposito y haga clic en el método de pago que prefiera.",
    },
  ];

  const termsData = [
    "Como parte de nuestras ofertas promocionales, GTCFX se complace en ofrecer una bonificación negociable del 100% hasta $100 en el primer depósito.",
    "La promoción está disponible para todos los nuevos y actuales clientes que cumplan con los criterios de elegibilidad especificados a continuación.",
    "Abre una cuenta de trading real con GTC FX.",
    "Realiza un primer depósito o un depósito adicional en tu cuenta de trading real.",
    "Abrir uno de los tipos de cuenta de GTC FX donde se pueda utilizar el bono.",
    "El monto máximo de bonificación por cliente es de $100 o su equivalente en otras monedas.",
    "El monto de la bonificación es igual al 100% del depósito realizado por el cliente, sujeto al límite máximo de bonificación de $100.",
    "Puede tardar hasta 24 horas en que la bonificación se abone a la cuenta del cliente después de que el depósito haya sido realizado y verificado.",
    "La bonificación de trading puede usarse exclusivamente para fines de trading dentro de la plataforma de GTCFX.",
    "La bonificación no puede ser retirada bajo ninguna circunstancia.",
    "Las ganancias generadas al operar con la bonificación pueden ser retiradas, sujeto a los procedimientos estándar de retiro de GTCFX.",
    "Cualquier retiro de fondos de la cuenta de trading real del cliente resultará en la eliminación proporcional de la bonificación en relación con el porcentaje del monto solicitado para el retiro desde la cuenta real del Cliente Elegible en GTCFX.",
    "El apalancamiento será de 1:100. La bonificación es para el primer depósito.",
    "GTC FX se reserva el derecho de modificar, alterar o cancelar esta promoción en cualquier momento y sin previo aviso.",
    "Este esquema de bonificación está sujeto a los términos y condiciones generales de GTC FX y a los términos de servicio de la plataforma de trading.",
    "Cualquier indicio de abuso o manipulación del esquema de bonificación puede resultar en la descalificación del cliente de la promoción y en la eliminación de la bonificación."
  ];
  
  return (
   <>
     <Hero 
      specialOfferText="En esta promoción especial, te estamos ofreciendo una oferta exclusiva."
      mainTitle="Inicia tu viaje de trading con un bono del 100%"
      offerValidity="Válido hasta el 30 de noviembre del 2024"
      offerNote="¡Date prisa, aprovecha esta oferta por tiempo limitado y saca el máximo provecho de tu trading!"
    />
    <PaymentOption
      title="Diferentes formas de pago para depositar"
      subtitle="Para depositar fondos en su cuenta de forma rápida y sencilla, elija uno de los siguientes métodos de pago."
      paymentMethods={customPaymentMethods}
    />
      <DepositRules
      title="Cómo depositar fondos en la cuenta y empezar a operar"
      description="Siga estos pasos para depositar fondos en su cuenta de trading y empezar a operar."
      steps={customSteps}
    />
    <TermsCredit
        title="Esquema de Bonificación del 100% para Trading de GTCFX - Términos y Condiciones Detallados"
        subtitle="El crédito del bono del 100% es negociable y se puede perder. Al retirar fondos, el crédito se eliminará en proporción al monto retirado."
        terms={termsData}
      />
   </>
  )
}

export default HundredCreditBonus