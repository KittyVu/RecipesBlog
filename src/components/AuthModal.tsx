"use client"
import { LoginType} from "@/lib/type";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AuthModal({ open, onClose, onLoginSuccess }: LoginType) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  if (!open) return null;

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include", // important to send cookie
    });

    const data = await res.json();

    if (res.ok) {
      onLoginSuccess(data.user); 
      onClose(); 
      router.push("/users")
    }

  };


  // Handle Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, name, phone: Number(phone) }),
    });
    const data = await res.json();
    console.log("client site")
    router.push("/users");
    alert(data.msg || "Register response");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form onSubmit={isRegister ? handleRegister : handleLogin} className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl relative">
        {/* Close Button */}
        <button type="button" onClick={onClose} className="absolute top-3 right-3 text-[#D87C7A] hover:text-black cursor-pointer">✕</button>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-4 text-[#D87C7A]">{isRegister ? "Register" : "Login"}</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Type your username here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
        />

        {/* Email, Name and Phone only for Register */}
        {isRegister && (
          <>
            <input
              type="email"
              placeholder="Type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
            />
            <input
              type="text"
              placeholder="Type your name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
            />
            <input
              type="tel"
              placeholder="Type your phone here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
            />
          </>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Type your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
        />

        {/* Submit button */}
        <button className="bg-[#D87C7A] w-full text-white py-2 rounded-xl cursor-pointer">
          {isRegister ? "Sign up" : "Sign in"}
        </button>

        {/* Toggle between Login/Register */}
        <p className="text-sm text-black text-center mt-6">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsRegister(false)}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsRegister(true)}
                className="text-blue-500 cursor-pointer"
              >
                Register
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
