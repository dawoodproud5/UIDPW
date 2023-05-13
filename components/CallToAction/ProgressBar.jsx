import React from "react";

function ProgressBar({ progress }) {
    const progressBarStyles = {
        width: `${progress}%`,
    };

    return (
        <div className="h-5 bg-[gray]/50 rounded-sm w-full ">
            <div className="h-full bg-[#247ddd] rounded-sm "
                style={progressBarStyles}>
            </div>
        </div>
    );
}

export default ProgressBar;
