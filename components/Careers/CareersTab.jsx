import React, { useState, useEffect } from "react";
import Link from "next/link";

function Tab({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    // Set active tab based on URL when component mounts
    useEffect(() => {
        const currentTab = tabs.findIndex((tab) => tab.link === window.location.pathname);
        if (currentTab !== -1) {
            setActiveTab(currentTab);
        }
    }, [tabs]);

    const handleClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab">
            <div className="tab-list flex justify-start flex-wrap items-start ">
                {tabs.map((tab, index) => (
                    <Link key={index} href={tab.link}>
                        <button
                            className={activeTab === index ? "active" : ""}
                            onClick={() => handleClick(index)}
                        >
                            {tab.label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Tab;
