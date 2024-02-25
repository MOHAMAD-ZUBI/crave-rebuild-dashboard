interface AnalyticsProps {
  title: string;
  Icon: React.ElementType;
  bgColor: string;
}

export default function AnalyticsCard(props: AnalyticsProps) {
  const { title, Icon, bgColor } = props;
  return (
    <div
      className={`py-8 px-6 shadow-xl text-white/80 shadow-primaryBgColor/50 hover:scale-105 duration-500 cursor-pointer rounded-2xl ${bgColor} font-semibold`}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl capitalize">{title}</h2>
        <Icon size={30} />
      </div>
      <h1 className="text-3xl mt-8">
        6 <span className="text-base text-white/50">/ No.</span>
      </h1>
    </div>
  );
}
