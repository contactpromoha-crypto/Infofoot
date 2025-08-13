import React from 'react';
import { Button } from './ui/button';
import { aboutData, heroData } from '../data/mockData';
import { ExternalLink, Award, Target, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const handleTelegramClick = () => {
    window.open(heroData.telegramUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Tout savoir sur moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 px-4 lg:px-0">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Je m'appelle {aboutData.name}
                </h3>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {aboutData.description}
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {aboutData.detailedDescription}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                      <Target className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Taux de réussite</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">+15k</div>
                      <div className="text-xs sm:text-sm text-gray-600">Membres actifs</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleTelegramClick}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                REJOINDRE MON TELEGRAM
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={aboutData.image}
                  alt={`${aboutData.name} - ${aboutData.profession}`}
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Expert Certifié</span>
                  </div>
                </div>
              </div>

              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden lg:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-700">"Thiago m'a permis de gagner +3000€ en une semaine ! Incroyable !"</p>
                <p className="text-xs text-gray-500 mt-1">- Marie, membre depuis 6 mois</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;