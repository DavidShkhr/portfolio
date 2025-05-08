type Props = {
  label: string;
  url: string;
};

const LinkButton: React.FC<Props> = ({ label, url }) => {
  return (
    <a
        href={url}
        className="font-[700] text-[13px] px-5 py-3 border border-gray-300 text-white rounded-xl shadow hover:scale-105 hover:bg-blue-700 hover:border-0 transition-transform duration-200"
    >
        {label}
    </a>
  );
};

export default LinkButton;
