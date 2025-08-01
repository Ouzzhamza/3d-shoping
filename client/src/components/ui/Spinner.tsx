

export const Spinner = ({
  size = "h-8 w-8",
  showText = false,
  text = "Loading...",
  className = "",
}: {
  size?: string;
  showText?: boolean;
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={` relative flex h-full w-full flex-col items-center justify-center ${className}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect */}
        <div
          className={`absolute inset-0 ${size} rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 opacity-20 blur-sm animate-pulse`}
        ></div>

        {/* Spinner */}
        <svg
          className={`relative ${size} animate-spin`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient
              id="golden-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="#B8860B"
            strokeWidth="4"
          />
          <path
            className="opacity-90"
            fill="url(#golden-grad)"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>

        {/* Optional loading text */}
        {showText && (
          <p className="mt-3 text-amber-600 font-medium text-sm animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
