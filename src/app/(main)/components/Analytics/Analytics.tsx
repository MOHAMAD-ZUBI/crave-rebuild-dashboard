import { IoReceiptOutline } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import AnalyticsCard from "./AnalyticsCard";
import SalesChart from "./SalesChart";

const Analytics = () => {
  const AnalyticsList = [
    {
      title: "Total Orders",
      bgColor: "bg-primary-400",
      Icon: IoReceiptOutline,
    },
    {
      title: "Total Earnings",
      bgColor: "bg-purple-400",
      Icon: LiaMoneyBillWaveSolid,
    },
    {
      title: "Total Dishes",
      bgColor: "bg-warning-400",
      Icon: BiDish,
    },
    {
      title: "Avg Customers",
      bgColor: "bg-indigo-400",
      Icon: FiPieChart,
    },
  ];
  return (
    <div className="mt-10">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {AnalyticsList.map((item) => {
          const { bgColor, title, Icon } = item;
          return (
            <AnalyticsCard
              key={title}
              bgColor={bgColor}
              title={title}
              Icon={Icon}
            />
          );
        })}
      </div>
      <div>
        <SalesChart />
      </div>
    </div>
  );
};

export default Analytics;
