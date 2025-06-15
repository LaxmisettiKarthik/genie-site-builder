
import { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 3500, className }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Reset animation state
    setIsAnimating(true);
    
    // Extract numeric part and suffix from the value
    const numericMatch = value.match(/^(\d+(?:\.\d+)?)/);
    const suffix = value.replace(/^(\d+(?:\.\d+)?)/, "");
    
    if (!numericMatch) {
      setDisplayValue(value);
      setIsAnimating(false);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progress < 1) {
        // Slower animation with smoother progression
        const easeOutQuart = 1 - Math.pow(1 - progress, 3);
        const randomFactor = (1 - progress) * 0.1; // Further reduced randomness
        const randomVariation = (Math.random() - 0.5) * randomFactor * targetNumber;
        const currentValue = targetNumber * easeOutQuart + randomVariation;
        
        // Format the number appropriately
        const formattedValue = targetNumber < 10 
          ? Math.max(0, currentValue).toFixed(1)
          : Math.max(0, Math.round(currentValue)).toString();
        
        setDisplayValue(formattedValue + suffix);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setIsAnimating(false);
      }
    };

    // Start animation with a longer delay for better visual effect
    const startDelay = Math.random() * 400;
    setTimeout(() => {
      animate();
    }, startDelay);
  }, [value, duration]);

  return (
    <span className={`${className} ${isAnimating ? 'text-[#3BC553] scale-105' : ''} transition-all duration-500`}>
      {displayValue}
    </span>
  );
};

export default AnimatedNumber;
