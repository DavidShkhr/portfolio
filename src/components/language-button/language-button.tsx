import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface LanguageButtonProps {
    logo: string;
    date: string;
    description: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ logo, date, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isVisible]);

    const Modal = () => (
        <div
            className={`fixed inset-0 flex items-center justify-center`}
            style={{
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
            }}
            onClick={() => setIsVisible(false)}
        >
            <div
                className={`bg-white p-6 rounded-lg w-3/4 max-w-lg text-center transition-all ${
                    isVisible ? 'fade-in' : 'fade-out'
                }`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    animationDuration: '0.3s',
                    animationFillMode: 'forwards',
                }}
            >
                <p className="text-2xl text-gray-600 font-semibold">{date}</p>
                <p className="text-lg text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );

    return (
        <>
            <div
                onClick={() => setIsVisible(true)}
                className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            >
                <img src={logo} alt="Language logo" className="w-16 h-16 mb-2" />
            </div>

            {shouldRender && typeof window !== 'undefined' &&
                ReactDOM.createPortal(<Modal />, document.querySelector('main')!)
            }
        </>
    );
};

export default LanguageButton;
