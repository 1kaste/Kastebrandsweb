import React, { useEffect, useState } from 'react';
import { getSiteContent } from '../services/siteContent';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [unmounting, setUnmounting] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { branding } = getSiteContent();
  const { splashScreen, logoUrl } = branding;

  useEffect(() => {
    // Timers for unmounting the splash screen
    const mainTimer = setTimeout(() => {
      setUnmounting(true);
    }, 4500); // Start fade-out at 4.5s

    const unmountTimer = setTimeout(() => {
      onFinished();
    }, 5000); // Total duration of splash screen + fade-out

    // Timer for percentage counter
    let intervalId: number;
    const startTimeout = setTimeout(() => {
        intervalId = window.setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return prev + 1;
            });
        }, 40); // 100 steps * 40ms/step = 4000ms = 4s
    }, 900); // Wait 900ms before starting the counter, matching loading bar animation start

    return () => {
      clearTimeout(mainTimer);
      clearTimeout(unmountTimer);
      clearTimeout(startTimeout);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [onFinished]);

  return (
    <div
      id="splash-screen-container"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-bg"
    >
      <div
        id="dark-fade-transition"
        className={`w-full h-full flex flex-col items-center justify-center relative transition-opacity duration-500 ease-in-out ${unmounting ? 'opacity-0' : 'opacity-100'}`}
      >
        <div id="splash-content-wrapper" className="flex flex-col items-center justify-center text-center px-4">
          <img
            id="splash-logo"
            src={logoUrl}
            alt={`${splashScreen.brandName} Logo`}
            className="h-20 w-auto mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          />
          <h1
            id="splash-brand-name"
            className="text-3xl sm:text-4xl font-bold font-heading text-brand-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {splashScreen.brandName}
          </h1>
          <p
            id="splash-brand-description"
            className="mt-2 text-brand-gray/80 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            {splashScreen.description}
          </p>
        </div>

        <div id="splash-loader-wrapper" className="absolute bottom-10 md:bottom-20 w-full max-w-xs px-4">
          <div 
              id="splash-loader-percentage" 
              className="text-center text-sm font-semibold font-sans text-brand-gray mb-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '800ms' }}
          >
              Loading... {percentage}%
          </div>
          <div id="splash-loading-bar-container" className="w-full bg-brand-surface rounded-full h-1.5 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div
              id="splash-loading-bar-indicator"
              className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full h-1.5 animate-loading-bar"
              style={{ animationDelay: '900ms' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;