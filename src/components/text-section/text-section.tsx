import LinkButton from '../link-button/link-button'

type Props = {
    commonText: string;
    gradientText: string;
};

const TextSection: React.FC<Props> = ({ commonText, gradientText }) => {
    const email = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`;
    return (
        <>
            <h1 className="font-[700] text-4xl sm:text-5xl leading-tight">
              {commonText}<br/><span className="bg-gradient-to-r from-purple-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent animate-gradient">{gradientText}</span>
            </h1>

            <p className="text-xl text-gray-400 animate-pulse delay-300">
              React / JavaScript / TypeScript / Tailwind
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <LinkButton label='✉️ Contacter' url={email}/>
            </div>
        </>
    );
};

export default TextSection;