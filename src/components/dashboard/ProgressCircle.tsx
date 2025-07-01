interface ProgressCircleProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  borderWidth?: number;
  trackWidth?: number;
}

export default function ProgressCircle({
  progress,
  size = 100,
  strokeWidth = 8,      
  borderWidth = 2,      
  trackWidth = 3,      
}: ProgressCircleProps) {
  const totalStroke = strokeWidth + borderWidth * 2;
  const radius = (size - totalStroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          stroke="rgba(255, 255, 255, 0.3)"
          fill="transparent"
          strokeWidth={trackWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        <circle
          stroke="#B5D5EE"
          fill="transparent"
          strokeWidth={strokeWidth + borderWidth * 2}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        <circle
          stroke="#FFFFFF"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#FFFFFF] font-inter font-bold text-lg">{progress}%</span>
      </div>
    </div>
  );
};
