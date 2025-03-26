import { LogoutIcon, NotificationIcon } from "../icons";

const AppHeader: React.FC = () => {
  return (
    <header className="top-0 flex w-full p-10 justify-between">
      <div className="text-2xl font-semibold font-open-sans">ABC Vet - Console</div>
      <div className="flex gap-2.5">
        <div className="bg-[#471E6D] py-2 px-2.75 rounded-sm cursor-pointer">
          <NotificationIcon className="w-6 h-6" />
        </div>
        <div className="bg-[#471E6D] py-2 px-2.75 rounded-sm cursor-pointer">
          <LogoutIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
