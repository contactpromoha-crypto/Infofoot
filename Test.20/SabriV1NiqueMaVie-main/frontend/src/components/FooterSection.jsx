import React from 'react';
import { Button } from './ui/button';
import { socialLinks, heroData } from '../data/mockData';
import { ExternalLink, Instagram, Youtube, MessageCircle, Users } from 'lucide-react';

const FooterSection = () => {
  const handleTelegramClick = () => {
    window.open(heroData.telegramUrl, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ne ratez plus jamais un match gagnant
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez dès maintenant notre communauté exclusive et recevez votre premier pronostic gratuitement
            </p>

            {/* Urgency banner */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              🔥 OFFRE LIMITÉE - Rejoignez avant qu'il ne soit trop tard !
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleTelegramClick}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-6 h-6 mr-3" />
                REJOINDRE MON TELEGRAM MAINTENANT
              </Button>
              
              <p className="text-blue-100 text-sm">
                ✅ Accès immédiat • ✅ 100% Gratuit • ✅ Première prédiction offerte
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Brand Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thiago</h3>
                  <p className="text-blue-400 text-lg">Pronostiqueur Professionnel</p>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Expert en matchs truqués depuis 2019. Grâce à mes connexions privilégiées, je partage quotidiennement des pronostics exclusifs avec ma communauté.
                </p>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Réussite</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15k+</div>
                    <div className="text-sm text-gray-400">Membres</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2019</div>
                    <div className="text-sm text-gray-400">Depuis</div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Services</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Pronostics quotidiens gratuits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Matchs truqués exclusifs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Support 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Communauté VIP
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Analyses expertes
                  </li>
                </ul>
              </div>

              {/* Social Links & Contact */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Rejoignez-moi</h4>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href={socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-800"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Canal Telegram Principal</span>
                  </a>
                  
                  <a 
                    href={socialLinks.instagram}
                    className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors p-3 rounded-lg hover:bg-gray-800"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href={socialLinks.youtube}
                    className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors p-3 rounded-lg hover:bg-gray-800"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                </div>

                {/* Download buttons */}
                <div>
                  <p className="text-gray-400 text-sm mb-4">Téléchargez Telegram :</p>
                  <div className="space-y-2">
                    <a 
                      href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Télécharger sur Google Play" 
                        className="h-10 hover:opacity-80 transition-opacity"
                      />
                    </a>
                    <a 
                      href="https://apps.apple.com/us/app/telegram-messenger/id686449807"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="Télécharger sur l'App Store" 
                        className="h-10 hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 mt-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                  © {currentYear} Thiago - Pronostiqueur Professionnel. Tous droits réservés.
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions Légales
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Politique de Confidentialité
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Conditions d'Utilisation
                  </a>
                </div>
              </div>

              <div className="text-center mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-xs">
                  ⚠️ Les paris sportifs comportent des risques. Jouez de manière responsable. +18 ans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;