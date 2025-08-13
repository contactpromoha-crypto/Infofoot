import React from 'react';
import { Button } from './ui/button';
import { heroData, countdownData } from '../data/mockData';
import { ExternalLink, Clock, Trophy, Users } from 'lucide-react';

const CountdownTimer = ({ targetDate, matchInfo }) => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(target) {
    const difference = +target - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="text-center bg-black/20 backdrop-blur-sm rounded-md p-1 sm:p-2 min-w-[40px] sm:min-w-[50px]">
        <div className="text-sm sm:text-lg font-bold text-white">{String(timeLeft[interval]).padStart(2, '0')}</div>
        <div className="text-xs text-white/80 capitalize">{interval}</div>
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6 shadow-md max-w-xs sm:max-w-md mx-auto">
      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
        <Clock className="w-3 h-3 text-white" />
        <h3 className="text-white font-medium text-xs sm:text-sm">{countdownData.title}</h3>
      </div>
      <div className="flex justify-center gap-1 sm:gap-2 mb-2">
        {timerComponents.length ? timerComponents : <span className="text-white text-xs sm:text-sm">Match disponible !</span>}
      </div>
      <div className="text-center">
        <p className="text-white/90 text-xs">{matchInfo}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const handleTelegramClick = () => {
    window.open(heroData.telegramUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${heroData.backgroundImage}')`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient overlay pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge de crédibilité */}
        <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
          <Trophy className="w-4 h-4" />
          Expert en matchs truqués depuis 2019
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            {heroData.title}
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
          {heroData.subtitle}
        </p>

        {/* CTA principal - GROS mais responsive */}
        <Button
          onClick={handleTelegramClick}
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 py-3 text-base sm:px-12 sm:py-6 sm:text-xl lg:px-16 lg:py-8 lg:text-3xl rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8 sm:mb-12 mx-4 max-w-sm sm:max-w-none"
        >
          <ExternalLink className="w-4 h-4 mr-2 sm:w-6 sm:h-6 sm:mr-3 lg:w-8 lg:h-8 lg:mr-4" />
          {heroData.ctaText}
        </Button>

        {/* Countdown Timer - PETIT */}
        <CountdownTimer 
          targetDate={countdownData.nextMatchTime} 
          matchInfo={countdownData.matchInfo}
        />

        {/* Stats rapides */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm px-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>+15,000 membres</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>100% de réussite</span>
          </div>
        </div>

        {/* Telegram download section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 px-4">
          <p className="text-gray-300 mb-3 sm:mb-4 text-sm">Vous n'avez pas Telegram ?</p>
          <p className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Téléchargez l'application ci-dessous ↓</p>
          
          <div className="flex justify-center gap-2 sm:gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en&gl=US&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Télécharger sur Google Play" 
                className="h-10 sm:h-14"
              />
            </a>
            <a 
              href="https://apps.apple.com/us/app/telegram-messenger/id686449807"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Télécharger sur l'App Store" 
                className="h-10 sm:h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;