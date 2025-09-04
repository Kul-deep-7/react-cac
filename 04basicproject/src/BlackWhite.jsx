import React, { useState } from 'react';
import './App.css';

export default function BlackWhite() {
    const [Theme, setTheme] = useState('white');
    const [textColor, setTextColor] = useState('black');

    return (
        <div
            className="w-screen h-screen flex flex-col justify-between items-center p-6 transition-all duration-500"
            style={{ backgroundColor: Theme }}
        >
            <div
                className="max-w-3xl text-justify text-base leading-relaxed font-medium transition-all duration-500"
                style={{ color: textColor }}
            >
                <p>
                    <strong>Ronaldo has had numerous incredible seasons throughout his career</strong>, making it challenging to definitively name one as his absolute "best". However, here are some seasons that stand out:
                    <br /><br />
                    <u>Manchester United</u>  
                    <br />
                    <strong>2007-08 season:</strong> Ronaldo scored 42 goals in 49 appearances (31 in 34 league games) and led United to the Premier League and Champions League titles. He won his first Ballon d'Or and the European Golden Shoe.
                    <br /><br />
                    <u>Real Madrid</u>  
                    <br />
                    <strong>2014-15 season:</strong> 61 goals in all competitions, including 48 in La Liga. Despite limited team success, he won the European Golden Shoe.
                    <br />
                    <strong>2011-12 season:</strong> 60 goals, La Liga title with 100 points, combining winger play and goalscoring.
                    <br />
                    <strong>2013-14 season:</strong> 51 goals, 17 in UCL (record), La Decima, Copa del Rey.
                    <br />
                    <strong>2015-16 season:</strong> 51 goals, UCL win, and Euro 2016 with Portugal.
                    <br /><br />
                    Ultimately, the "best" season depends on whether you value individual stats, team success, or overall impact. Ronaldo has consistently delivered elite performances and set new goalscoring standards.
                </p>
            </div>

            <div className="bg-white flex justify-center p-3 gap-5 rounded-lg shadow-md mt-6">
                <button
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all duration-300"
                    onClick={() => {
                        setTheme('black');
                        setTextColor('white');
                    }}
                >
                    Click
                </button>
            </div>
        </div>
    );
}
