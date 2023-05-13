
import React, { useState, useEffect } from 'react';

function SiderBar() {

    // const [activeSection, setActiveSection] = useState('');
    const liItem = [
        {
            "name": "1. Alux.com",
            "id": "#Emil_Anton"
        },
        {
            "name": "2. Watch Mojo",
            "id": "#Ashkan_Karbasfrooshan"
        },
        {
            "name": "3. ZHC Crafts",
            "id": "#Zach_Hsieh"
        },
        {
            "name": "4. Linus Tech Tips",
            "id": "#Linus_Sebastian"
        },
        {
            "name": "5. EmmyMade",
            "id": "#Emmeline_Mayline"
        },
        {
            "name": "6. AutoTrader",
            "id": "#Ian_Plummer"
        },
        // {
        //     "name": "7. TechAltar",
        //     "id": "#Marton_Barcza"
        // }


    ]

    const sectionIds = liItem.map((item) => item.id);

    useEffect(() => {
        // Add scroll event listener to the window
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        const scrollPosition = window.scrollY + 20;
        const sectionIds = ["Emil_Anton", "Ashkan_Karbasfrooshan", "Zach_Hsieh", "Linus_Sebastian", "Emmeline_Mayline", "Ian_Plummer", "Marton_Barcza"];
        const currentSectionIds = sectionIds.filter((id) => {
            const element = document.getElementById(id);
            return element && element.offsetTop <= scrollPosition;
        });
        const currentSectionId = currentSectionIds[currentSectionIds.length - 1];
        const activeListItem = document.querySelector(`[href="#${currentSectionId}"]`);
        const activeListItems = document.querySelectorAll(".active");
        activeListItems.forEach((item) => item.classList.remove("active"));
        if (activeListItem) {
            activeListItem.parentElement.classList.add("active");
        }
    }


    return (

        <div className="max-w-xl mx-auto text-blue ">
            <aside className="w-full" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto rounded-2xl shadow-sm mt-8 text-left">
                    <h2 className='p-2 text-base font-bold ml-4'>Content</h2>
                    <ul className="space-y-2 ">
                        {liItem.map((item, index) =>
                            <li key={index} className="w-full ">
                                <a href={item.id}
                                    className="p-1 text-sm font-medium text-gray-900 rounded-lg  ">
                                    <span className="ml-3 hover:text-[#1d9bf0]">{item.name}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </aside>
        </div>

    )
}

export default SiderBar