import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-black text-primary animate-bounce">
          404
        </h1>
        
        <div className="mt-4">
          <h2 className="text-3xl font-bold sm:text-4xl text-base-content">
            Oops! Page Not Found.
          </h2>
          
          <p className="mt-4 text-base-content/70">
            Apni nirdisto jei page-ti khujchen seta hoyto delete hoye geche ba link-e kono vul ache. 
            Niche deya button-e click kore abar home page-e fire jan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary btn-wide shadow-lg">
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-outline btn-secondary"
          >
            Try Again
          </button>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 opacity-20">
            <div className="divider">OR</div>
            <p className="text-xs italic font-mono">Status Code: 404_PAGE_NOT_FOUND</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;