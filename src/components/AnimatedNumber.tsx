
import { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 2000, className }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
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
        // Generate random number that gradually approaches target
        const randomFactor = 1 - progress;
        const randomVariation = (Math.random() - 0.5) * randomFactor * targetNumber * 0.3;
        const currentValue = targetNumber * progress + randomVariation;
        
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

    const startDelay = Math.random() * 500; // Random start delay
    setTimeout(() => {
      animate();
    }, startDelay);
  }, [value, duration]);

  return (
    <span className={`${className} ${isAnimating ? 'text-[#3BC553]' : ''} transition-colors duration-300`}>
      {displayValue}
    </span>
  );
};

export default AnimatedNumber;
