// app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
      localStorage.setItem('token', data.token); // Store the token
      // You would typically redirect to a protected dashboard page
      router.push('/dashboard'); 
    } else {
      setMessage(data.message);
      setIsError(true);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border p-2 rounded" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      {message && <p className={`mt-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
    </div>
  );
}