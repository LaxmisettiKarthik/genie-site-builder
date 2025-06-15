
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FloatingParticles from "@/components/FloatingParticles";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden">
      <FloatingParticles />
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-4">Oops! Page not found</p>
        <a href="/" className="text-green-400 hover:text-green-500 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
