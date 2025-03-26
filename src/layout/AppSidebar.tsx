import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import { Gift } from "lucide-react";
import { Icon } from "@iconify/react";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <Icon icon="pixel:chart-network" className="w-6 h-6" />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <Gift className="w-6 h-6" style={{ color: 'currentColor' }} />,
    name: "PetOwner",
    path: "/petowner",
  },
];

const AppSidebar: React.FC = () => {
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <aside
      className="fixed pt-50 rounded-tr-xl lg:mt-0 top-0 px-9 left-0 bg-primary h-screen border-r border-gray-200 w-[290px] max-lg:hidden"
    >
      <div className="text-white text-xl mb-10">CLINIC CONSOLE</div>
      <div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path || "#"}
            className={`flex items-center py-5 rounded-lg transition-colors duration-200 ${isActive(item.path || "") ? "text-[#0096D7]" : "text-white"
              }`}
          >
            {item.icon}
            <span className="ml-6">{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AppSidebar;