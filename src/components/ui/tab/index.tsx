import React, { useState } from "react";

interface TabComponentProps {
    tabs: string[];
}

export const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="flex gap-5 rounded-xl p-2 text-sm font-bold text-center bg-white">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`p-3 w-35 cursor-pointer ${activeTab === tab ? "bg-primary text-white rounded-sm" : "text-primary"
                        }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};