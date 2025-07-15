"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Login successful! Welcome.");
      // Redirect to a protected dashboard page after successful login
      router.push('/dashboard');
    } else {
      setMessage(`Error: ${data.message}`);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required className="border p-2" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required className="border p-2" />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Log In</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}