
import { useState, useEffect } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 1500, className }: AnimatedNumberProps) => {
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
        // Smoother and faster animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 2);
        const randomFactor = (1 - progress) * 0.05; // Reduced randomness
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

    // Reduced start delay for faster animation
    const startDelay = Math.random() * 200;
    setTimeout(() => {
      animate();
    }, startDelay);
  }, [value, duration]);

  return (
    <span className={`${className} ${isAnimating ? 'text-[#3BC553] scale-105' : ''} transition-all duration-300`}>
      {displayValue}
    </span>
  );
};

export default AnimatedNumber;
