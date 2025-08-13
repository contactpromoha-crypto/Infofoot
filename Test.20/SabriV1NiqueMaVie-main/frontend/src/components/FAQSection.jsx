import React from 'react';
import { faqData } from '../data/mockData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-5 h-5" />
              Questions Fréquentes
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Réponses à vos questions
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos services et notre communauté
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl border border-gray-200 px-6 py-2 hover:bg-gray-100 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed ml-11 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Legal Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ⚠️ Avertissement Important
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Assurez-vous d'être prêt à accepter les risques financiers, car nous ne sommes pas responsables des pertes subies par votre portefeuille. Les paris sportifs comportent des risques. Jouez de manière responsable.
            </p>
            <div className="mt-6">
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;