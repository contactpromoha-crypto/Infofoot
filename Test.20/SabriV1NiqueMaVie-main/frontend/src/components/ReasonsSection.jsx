import React from 'react';
import { Button } from './ui/button';
import { reasonsData, heroData } from '../data/mockData';
import { ExternalLink, Check, Gift, Users, Clock, Shield } from 'lucide-react';

const iconMap = {
  0: Gift,
  1: Clock,
  2: Users,
  3: Shield
};

const ReasonsSection = () => {
  const handleTelegramClick = () => {
    window.open(heroData.telegramUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              4 Bonnes raisons de me rejoindre
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Découvrez pourquoi plus de 15,000 personnes font confiance à mes pronostics exclusifs
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 lg:px-0">
            {reasonsData.map((reason, index) => {
              const Icon = iconMap[index];
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Check mark */}
                  <div className="mt-4 sm:mt-6 flex items-center text-green-600">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-xs sm:text-sm font-medium">Inclus</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Prêt à transformer vos paris ?
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez dès maintenant notre communauté exclusive et recevez votre premier match truqué gratuitement
              </p>

              {/* Urgency indicator */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                Places limitées - Seulement 50 nouveaux membres par jour
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleTelegramClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-4 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mr-4"
                >
                  <ExternalLink className="w-6 h-6 mr-3" />
                  REJOINDRE MON TELEGRAM
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Gratuit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15k+</div>
                  <div className="text-sm text-gray-400">Membres</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Réussite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;