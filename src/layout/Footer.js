import React, { useState, useEffect } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState("2021");
    const getCurrentYear = () => {
        let date = new Date();
        let currentYear = date.getFullYear();
        return setCurrentYear(currentYear);
    };

    useEffect(() => {
        getCurrentYear();
    }, []);
    return (
        <div id="footer">
            <div className="copy-write text-center">
                &copy;{currentYear} Designed and developed by{" "}
                <a
                    href="mailto:rajprashant2547@gmail.com"
                    className="mail-link"
                >
                    <nobr>Prashant Gupta</nobr>
                </a>
            </div>
        </div>
    );
}
