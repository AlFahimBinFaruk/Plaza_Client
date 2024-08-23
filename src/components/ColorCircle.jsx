import { useEffect, useState } from "react";

const ColorCircle = ({ color, onClick }) => {
    color=color.toLowerCase();
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        if (color === "red") {
            setSelectedColor("danger");
        } else if (color === "white") {
            setSelectedColor("light");
        } else if (color === "black") {
            setSelectedColor("dark");
        } else if (color === "green") {
            setSelectedColor("success");
        } else if (color === "blue") {
            setSelectedColor("primary");
        }
    }, [color]);

    return (
        <span
            className={`me-2
    rounded-circle 
    bg-${selectedColor}
    px-2 
    border 
    border-1 
    border-dark `}
            role="button"
            onClick={onClick}
        />
    );
};

export default ColorCircle;