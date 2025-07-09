import { useTranslations } from 'next-intl';
import React from 'react';

const MarketOverViewNew = () => {

  const t= useTranslations("market_overview")
    // ✅ Extract header values as an array
  const headers = Object.values(t.raw("headers"));


  const rows = [
    {
      instrument: "FX",
      data: [
        t('status.normal'),
         t('status.normal'),
         t('status.normal'),
        t('status.normal'),
               
      ],
    },
    {
      instrument: "Metals",
      data: [
         t('status.normal'),
            t('status.normal'),
            t('status.early_close'),
     
         t('status.normal'),
      
         
       
        
      ],
    },
    {
      instrument: "OIL/Energies (BRNUSD)",
      data: [
        t('status.normal'),
           t('status.normal'),
         t('status.early_close2'),
        t('status.normal'),
       

       
        
        
      ],
    },
    {
      instrument: "OIL/Energies (WTIUSD)",
      data: [
        t('status.normal'),
           t('status.normal'),
                t('status.early_close'),
        t('status.normal'),

    
       
        
       
      ],
    },
    {
      instrument: "OIL/Energies (NGCUSD)",
      data: [
        t('status.normal'),
           t('status.normal'),
                t('status.early_close'),
        t('status.normal'),


       

       
      ],
    },
    {
      instrument: "Indices - AUS200c",
      data: [
        t('status.normal'),
        t('status.daylight'),
        t('status.daylight'),
 t('status.normal'), 
       
       
       
      ],
    },
    {
      instrument: "Indices - CN50c",
      data: [
        t('status.normal'),
        t('status.normal'),
        t('status.normal'),
    t('status.normal'),
       
      
       
      ],
    },
    {
      instrument: "Indices - EU50c",
      data: [
        t('status.normal'),
            t('status.early_close3'),
                 t('status.early_close3'),
          t('status.normal'),
   
       
        
      ],
    },
    {
      instrument: "Indices - FRA40c",
      data: [
        t('status.normal'),
          t('status.early_close3'),
          t('status.early_close3'),
   t('status.early_close4'),
        
        
      ],
    },
    {
      instrument: "Indices - GER40c",
      data: [
        t('status.normal'),
           t('status.early_close3'),
          t('status.early_close3'),
          t('status.normal'),
 
       
      ],
    },
    {
      instrument: "Indices - HK50c",
      data: [
         t('status.closed'),
        t('status.early_close'),
         t('status.early_close'),
       t('status.normal'),
  
       
      ],
    },
    {
      instrument: "Indices - JPN225c",
      data: [
        t('status.normal'),
         t('status.normal'),
           t('status.early_close'),
        t('status.normal'),
     
  
        
      ],
    },
    {
      instrument: "Indices - SPA35c",
      data: [
          t('status.normal'),
        t('status.daylight'),
        t('status.daylight'),
 t('status.normal'), 
       

       
      ],
    },
    {
      instrument: "Indices - UK100c",
      data: [
        t('status.normal'),
        t('status.early_close3'),
          t('status.early_close3'),
        t('status.normal'),
  
       
      ],
    },
    {
      instrument: "Indices - US30c",
      data: [
        t('status.normal'),
          t('status.early_close1'),
            t('status.early_close'),
        t('status.normal'),
 
   
         
      ],
    },
    {
      instrument: "Indices - US500c",
      data: [
        t('status.normal'),
          t('status.early_close1'),
            t('status.early_close'),
        t('status.normal'),
   
        
      ],
    },
    {
      instrument: "Indices - USTECHc",
      data: [
        t('status.normal'),
           t('status.early_close1'),
            t('status.early_close'),
        t('status.normal'),
  
  
       
      ],
    },
    
    {
      instrument: "EU Shares:Exchanges - SIX",
      data: [
          t('status.normal'),
        t('status.normal'),
        t('status.normal'),
      t('status.normal'),
       
         ],
    },
    {
      instrument: "EU Shares:Exchanges - BM",
      data: [
         t('status.normal'),
        t('status.normal'),
        t('status.normal'),
      t('status.normal'),

      
      ],
    },
    {
      instrument: "EU Shares:Exchanges - EURONEXT",
      data: [
         t('status.normal'),
        t('status.normal'),
        t('status.normal'),
      t('status.normal'),
 
       
      ],
    },
    {
      instrument: "EU Shares:Exchanges - LSE",
      data: [
             t('status.normal'),
        t('status.normal'),
        t('status.normal'),
      t('status.normal'),
   
       
      ],
    },
    {
      instrument: "EU Shares:Exchanges - XETRA",
      data: [
           t('status.normal'),
        t('status.normal'),
        t('status.normal'),
      t('status.normal'),
     
       
      ],
    },
 
    {
      instrument: "NYSE (US Shares:Exchanges)",
      data: [
        t('status.normal'),
          t('status.early_close'),
            t('status.closed'),
        t('status.normal'),
    

       
      ],
    },
    {
      instrument: "NDAQ (US Shares:Exchanges)",
      data: [
             t('status.normal'),
          t('status.early_close'),
            t('status.closed'),
        t('status.normal'),
      

      
   
      ],
    },
    {
      instrument: "HKEX (Asia Shares:Exchanges)",
      data: [
              t('status.closed'),
        t('status.normal'),
        t('status.normal'),
        t('status.normal'),

       
      ],
    },
    {
      instrument: "TSE (Asia Shares:Exchanges)",
      data: [
        t('status.normal'),
        t('status.normal'),
        t('status.normal'),
              t('status.closed'),
 
       
      ],
    },
    {
      instrument: "Crypto",
      data: [
        t('status.normal'),
        t('status.normal'),
        t('status.normal'),
    t('status.normal'),
       
      ],
    },
    {
      instrument: "Futures GOLDM",
      data: [
        t('status.normal'),
          t('status.normal'),
          t('status.early_close'),
        t('status.normal'),
      
   
       
      ],
    },
    
  ]; 

  const renderCellContent = (item) => {
    if (!item) return "";

    return item.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
    ));
  };

  const getCellClass = (item) => {
    if (!item) return "";
    const normalizedItem = item.trim().toLowerCase();
  
    if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
    if (normalizedItem.includes("closed")) return "bg-primary text-white";
    if (normalizedItem.includes("early close")) return "bg-secondary text-white";
  
    return "";
  };

  return (
    <table className="trading_hours_table container">
      <thead className="header-section">
        <tr>
          {headers.length > 0 ? headers.map((header, index) => (
            <th key={index} className="shadow-2xl text-xs">{header}</th>
          )) : <th>Error: Headers not found</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td scope="row">{row.instrument}</td>
            {row.data.map((item, idx) => (
              <td key={idx} className={getCellClass(item)}>
                <span className='text-sm'>{renderCellContent(item)}</span>
              </td>
            ))}
          </tr>
        ))} 
      </tbody>
    </table>
  );
};

export default MarketOverViewNew;
