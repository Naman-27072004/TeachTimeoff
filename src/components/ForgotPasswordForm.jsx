import React from "react";

function ForgotPasswordForm({ onSubmit, onBack }) {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registered Email
                </label>
                <input
                    type="email"
                    className="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900"
                    placeholder="you@organization.com"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 bg-[#2563eb] hover:bg-[#1e4fd3] text-white font-bold rounded-xl shadow-lg transition duration-150"
            >
                Send Reset Link
            </button>

            <button
                type="button"
                onClick={onBack}
                className="mt-6 w-full text-center text-sm text-gray-600 hover:text-[#2563eb] underline"
            >
                ← Back to Sign In
            </button>
        </form>
    );
}

export default ForgotPasswordForm;
