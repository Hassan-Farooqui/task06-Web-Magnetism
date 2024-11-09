const Wave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute bottom-0 left-0 w-full"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        d="M0,160L60,170C120,180,240,200,360,213.3C480,227,600,213,720,186.7C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    
  );
};

export default Wave;
