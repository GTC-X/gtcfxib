import React from 'react';

const TermsCredit = ({ title, subtitle, terms }) => {
  return (
    <section className="py-10 md:py-12 xl:py-16 2xl:py-20 bg-gradient-to-b from-slate-100 via-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* Dynamic Title */}
        {title && (
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-semibold xl:text-2xl capitalize max-w-6xl mx-auto leading-tight">
            {title}
          </h2>
        )}

        {/* Dynamic Subtitle */}
        {subtitle && (
          <p className="text-gray-600 mt-4 mb-8 max-w-4xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {/* Terms List */}
        <ul className="list-disc pl-6 space-y-2 text-left mt-8">
          {terms && terms.map((term, index) => (
            <li key={index} className="text-gray-700">
              {term}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TermsCredit;
