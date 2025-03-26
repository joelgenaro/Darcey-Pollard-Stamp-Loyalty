import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>
      <div
        className={`bg-[#f7f6f6] flex-1 transition-all duration-300 lg:ml-[290px] ease-in-out`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <LayoutContent />
  );
};

export default AppLayout;
