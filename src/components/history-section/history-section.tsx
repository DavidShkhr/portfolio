import React, { useState } from 'react';

import LanguageButton from '../language-button/language-button'

import cppLogo from '../../assets/cpp.svg'
import javaLogo from '../../assets/java.svg'
import pyLogo from '../../assets/py.svg'
import jsLogo from '../../assets/js.svg'
import reactLogo from '../../assets/react.svg'

const HistorySection: React.FC = () => {
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const toggleHistoryVisibility = () => {
        setIsHistoryVisible(!isHistoryVisible);
    };

    return (
        <div className="mt-32 w-full p-4">
            
        <h2 
            onClick={toggleHistoryVisibility} 
            className="text-3xl underline font-bold block text-center w-full max-w-4xl mx-auto mb-10 cursor-pointer hover:no-underline hover:text-blue-500 transition-all duration-300"
        >
            Mon parcours dans l’informatique 💻
        </h2>
        
        <div 
            className={`relative z-0 flex justify-between transition-all duration-800 ease-in-out ${isHistoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <LanguageButton logo={cppLogo} date={'Décembre 2022'} description={'Je découvre la programmation avec C++. Je crée de petits projets dans le cadre scolaire.'} />

            <LanguageButton logo={pyLogo} date={'Février 2024'} description={'Je me tourne vers Python et commence à développer des bots pour différents réseaux sociaux.'} />

            <LanguageButton logo={javaLogo} date={'Août 2024'} description={'Je plonge dans Java, mais très vite, JavaScript s’impose dans ma vie.'} />

            <LanguageButton logo={jsLogo} date={'Novembre 2024'} description={'Après plusieurs tentatives, je choisis de me spécialiser dans le développement frontend.'} />

            <LanguageButton logo={reactLogo} date={'Février 2025'} description={'Avec de bonnes bases en JS / HTML / CSS / MySQL, je passe au niveau supérieur avec TypeScript et React.'} />
        </div>

        </div>
    );
};

export default HistorySection;
