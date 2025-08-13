import React from 'react';
import { testimonialsData } from '../data/mockData';
import { Star, TrendingUp, MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Témoignages de nos membres
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez ce que disent nos membres sur nos pronostics exclusifs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 lg:px-0">
            {testimonialsData.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header avec profit */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    <span className="text-xs sm:text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-100 px-2 sm:px-3 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-green-600 font-bold text-xs sm:text-sm">{testimonial.profit}</span>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{testimonial.message}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-xs sm:text-sm text-gray-600">Membre vérifié</span>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stats */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 shadow-2xl text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Nos résultats parlent d'eux-mêmes
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-green-100 text-lg">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15k+</div>
                  <div className="text-green-100 text-lg">Membres actifs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">€2.3M</div>
                  <div className="text-green-100 text-lg">Gains cumulés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-green-100 text-lg">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;