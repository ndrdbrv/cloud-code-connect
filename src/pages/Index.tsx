
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Welcome to Your Flatmate Finder
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find the perfect flatmate who matches your personality, lifestyle, and budget preferences.
          Save on rent and enjoy a better living experience!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
              Get Started
            </Button>
          </Link>
          <a href="https://apps.apple.com/gb/app/loby/id6737482486" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-lg py-6 px-8">
              Download App
            </Button>
          </a>
        </div>
        
        <div className="mt-16">
          <img 
            src="/img/banner-screenshot.svg" 
            alt="Application Preview" 
            className="max-w-full rounded-lg shadow-xl mx-auto"
          />
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Match by Personality</h3>
            <p className="text-gray-600">Find flatmates with compatible personalities for a harmonious living experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Save on Rent</h3>
            <p className="text-gray-600">Sharing an apartment with the right flatmate can save you up to 30% on housing costs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Easy Matching</h3>
            <p className="text-gray-600">Our AI helps you find your ideal flatmate in just a few days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
