import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AutoTypeText() {
    return (
        <h1 className="text-4xl font-bold text-white">
            I am a{" "}
            <span style={{ color: "#FACC15", fontWeight: "bold" }}>
                <Typewriter
                    words={["Web Developer", "React Developer", "Frontend Engineer", "UI/UX Designer"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </h1>
    );
}
