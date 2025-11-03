import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import HolidayList from "./components/HolidayList"; // <-- 1. IMPORT NEW COMPONENT

function App() {
  const [mode, setMode] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- 2. ADD LOGGED-IN STATE

  // 3. CREATE LOGIN HANDLER
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Simulating successful login...");
    // In a real app, you would verify credentials here
    setIsLoggedIn(true);
  };

  // 4. CREATE LOGOUT HANDLER
  const handleLogout = () => {
    setIsLoggedIn(false);
    setMode("login"); // Reset to login screen
  };

  // 5. RENDER HOLIDAY LIST IF LOGGED IN
  if (isLoggedIn) {
    return <HolidayList onLogout={handleLogout} />;
  }

  // 6. EXISTING AUTH PAGE (if not logged in)
  // We just need to update the prop passed to LoginForm
  return (
    <div id="app-container" className="lg:flex min-h-screen font-sans bg-white">
      {/* LEFT PANEL */}
      <div className="lg:w-1/2 p-6 sm:p-12 flex flex-col justify-between">
        <div className="mb-10 lg:mb-0">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-900">
            <span>TeachTimeoff</span>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-20 mb-2">
            {mode === "login"
              ? "Welcome to TeachTimeoff"
              : mode === "register"
              ? "Create Your Account"
              : "Forgot Your Password?"}
          </h1>

          <p className="text-gray-500 mb-8">
            {mode === "login"
              ? "Sign in to manage your leave requests and approvals."
              : mode === "register"
              ? "Join the platform to streamline your leave management."
              : "Enter your registered email, and we’ll send a reset link."}
          </p>

          {mode !== "forgot" && (
            <div className="flex bg-gray-100 rounded-xl p-1 max-w-sm mb-8 font-semibold text-sm">
              <button
                className={`w-1/2 py-2 px-4 rounded-lg transition-colors duration-200 ${
                  mode === "login"
                    ? "tab-active bg-white text-[#2563eb] shadow"
                    : "text-gray-500"
                }`}
                onClick={() => setMode("login")}
              >
                Sign In
              </button>
              <button
                className={`w-1/2 py-2 px-4 rounded-lg transition-colors duration-200 ${
                  mode === "register"
                    ? "tab-active bg-white text-[#2563eb] shadow"
                    : "text-gray-500"
                }`}
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* FORMS */}
        {mode === "login" && (
          <LoginForm
            onSubmit={handleLogin} // <-- 7. USE THE NEW LOGIN HANDLER
            onForgot={() => setMode("forgot")}
          />
        )}
        {mode === "register" && (
          <RegisterForm onSubmit={(e) => e.preventDefault()} /> // Example submit
        )}
        {mode === "forgot" && (
          <ForgotPasswordForm
            onSubmit={(e) => e.preventDefault()} // Example submit
            onBack={() => setMode("login")}
          />
        )}

        <p className="text-xs text-center text-gray-400 mt-20 max-w-xs mx-auto">
          Manage leaves and approvals seamlessly with TeachTimeoff — a unified
          system for teachers and administrators.
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel-bg lg:w-1/2 hidden lg:flex items-center justify-center bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 relative overflow-hidden min-h-[400px]">
        <div className="w-[250px] h-[250px] bg-[#2563eb] rounded-2xl shadow-[0_40px_60px_rgba(0,0,0,0.2),0_0_100px_rgba(37,99,235,0.4)] flex items-center justify-center">
          <div className="text-white text-2xl font-bold text-center leading-tight px-4">
            Leave
            <br />
            Approval
            <br />
            Simplified
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;