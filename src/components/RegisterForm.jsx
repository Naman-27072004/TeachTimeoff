import React from "react";

function RegisterForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    className="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                </label>
                <input
                    type="email"
                    className="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900"
                    placeholder="you@organization.com"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    className="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900"
                    placeholder="••••••••"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                </label>
                <input
                    type="password"
                    className="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900"
                    placeholder="••••••••"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 bg-[#2563eb] hover:bg-[#1e4fd3] text-white font-bold rounded-xl shadow-lg transition duration-150"
            >
                Register Account
            </button>
        </form>
    );
}

export default RegisterForm;
