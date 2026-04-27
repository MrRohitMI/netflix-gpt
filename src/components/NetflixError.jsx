const NetflixError = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
     
      <div className="text-center max-w-lg">
      
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Unable to load content
        </h2>

        
        <p className="text-gray-400 text-sm sm:text-base mb-4">
          We are having trouble fetching data from the movie service.
        </p>

        <p className="text-gray-500 text-xs sm:text-sm mb-6">
          This may happen if the TMDB service is temporarily unavailable 
          or if your internet connection is offline.
        </p>

        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline text-sm mb-6 block"
        >
          Check TMDB Website Status
        </a>

        <button
          onClick={() => window.location.reload()}
          className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default NetflixError;