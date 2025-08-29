import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const useTypingEffect = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}: UseTypingEffectOptions) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime]);

  return currentText;
};