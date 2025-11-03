import React from "react";

function LoginForm({ onSubmit, onForgot }) {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm">
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

            <div className="flex items-center justify-between text-sm mt-6">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button
                    type="button"
                    onClick={onForgot}
                    className="text-sm text-gray-600 hover:text-[#2563eb] underline"
                >
                    Forgot password?
                </button>
            </div>

            <button
                type="submit"
                className="w-full mt-6 py-3 px-4 bg-[#2563eb] hover:bg-[#1e4fd3] text-white font-bold rounded-xl shadow-lg transition duration-150"
            >
                Sign In
            </button>
        </form>
    );
}

export default LoginForm;
