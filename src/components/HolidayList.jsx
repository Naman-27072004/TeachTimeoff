import React from "react";
import { holidaysLeft, holidaysRight } from "../data/holidays";

// A small sub-component to render a single holiday item
function HolidayItem({ month, day, name, weekday, type, color }) {
    const colorClasses = {
        blue: "bg-blue-100 text-blue-800",
        red: "bg-red-100 text-red-800",
        purple: "bg-purple-100 text-purple-800",
    };

    return (
        <div className="flex items-center space-x-4">
            {/* Date Box */}
            <div
                className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold ${colorClasses[color] || "bg-gray-100 text-gray-800"
                    }`}
            >
                <span className="text-xs uppercase">{month}</span>
                <span className="text-2xl">{day}</span>
            </div>

            {/* Holiday Info */}
            <div>
                <h3 className="text-md font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600">{weekday}</p>
                {type && (
                    <span className="mt-1 inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {type}
                    </span>
                )}
            </div>
        </div>
    );
}

// The main Holiday List component
function HolidayList({ onLogout }) {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-12">
            {/* Header */}
            <header className="flex items-center justify-between pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-2 text-xl font-bold text-gray-900">
                    <span>TeachTimeoff</span>
                </div>
                <button
                    onClick={onLogout}
                    className="text-sm font-semibold text-gray-600 hover:text-[#2563eb]"
                >
                    Sign Out
                </button>
            </header>

            {/* Title */}
            <div className="my-8 text-center">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Holidays <span className="text-gray-400">&lt; 2025 &gt;</span>
                </h1>
            </div>

            {/* Holiday Grid */}
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 md:gap-x-12 gap-y-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {holidaysLeft.map((holiday) => (
                            <HolidayItem key={holiday.name} {...holiday} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {holidaysRight.map((holiday) => (
                            <HolidayItem key={holiday.name} {...holiday} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HolidayList;