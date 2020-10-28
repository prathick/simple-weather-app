import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <svg
            className="spinner"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                strokeWidth="7"
                r="45"
                strokeDasharray="164.93361431346415 56.97787143782138"
                transform="rotate(243.787 50 50)"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="6s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>);
}

export default LoadingSpinner;