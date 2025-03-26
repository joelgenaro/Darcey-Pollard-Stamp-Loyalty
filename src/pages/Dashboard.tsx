import RewardTable from "../components/tables/Reward";
import { StarCard } from "../components/card/star";
import { TabComponent } from "../components/ui/tab";
import { Dropdown } from "../components/ui/dropdown";
import MonthlyChart from "../components/dashboard/MonthlyChart";
import { dashboardCards, dashboardSelectOptions, dashboardTabOptions } from "../lib/constants";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div>
        <Dropdown options={dashboardSelectOptions} defaultOption="All times" />
      </div>
      <div className="col-span-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
        {dashboardCards.map((card, index) => (
          <StarCard
            key={index}
            number={card.number}
            title={card.title}
            color={card.color}
            icon={card.icon}
          />
        ))}
      </div>
      <div className="col-span-12">
        <TabComponent tabs={dashboardTabOptions} />
      </div>
      <div className="col-span-12">
        <MonthlyChart />
      </div>

      <div className="col-span-12">
        <RewardTable />
      </div>
    </div>
  );
}
