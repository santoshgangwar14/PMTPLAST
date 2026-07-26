import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (
      email === "admin@pmtplast.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("pmt_admin", "true");
      navigate("/admin");
      return;
    }

    alert("Invalid Email or Password");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f6f8] px-6">

      {/* Background */}

      <div className="absolute -top-44 -right-44 h-96 w-96 rounded-full bg-red-100 blur-[130px]" />
      <div className="absolute -bottom-44 -left-44 h-96 w-96 rounded-full bg-slate-200 blur-[130px]" />

      {/* Top Strip */}

      <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      {/* Card */}

      <div className="relative w-full max-w-md rounded-[30px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,.08)]">

        {/* Logo */}

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-b from-red-600 to-red-800 shadow-lg">

            <ShieldCheck
              size={38}
              className="text-white"
            />

          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            PMT PLAST
          </h1>

          <p className="mt-2 text-slate-500">
            Manufacturing Admin Panel
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all duration-300 focus-within:border-red-500 focus-within:bg-white focus-within:shadow-lg">

              <Mail
                size={20}
                className="text-slate-400"
              />

              <input
                type="email"
                placeholder="admin@pmtplast.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-transparent p-4 text-slate-900 placeholder:text-slate-400 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all duration-300 focus-within:border-red-500 focus-within:bg-white focus-within:shadow-lg">

              <Lock
                size={20}
                className="text-slate-400"
              />

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-transparent p-4 text-slate-900 placeholder:text-slate-400 outline-none"
              />

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-gradient-to-b from-red-600 to-red-700 py-4 text-lg font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-300"
          >
            Login to Dashboard
          </button>

        </form>

        {/* Footer */}

        <div className="mt-8 border-t border-slate-200 pt-6 text-center">

          <p className="text-sm font-medium text-slate-600">
            Secure Manufacturing ERP
          </p>

          <p className="mt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} PMT Plast Pvt. Ltd.
          </p>

        </div>

      </div>

    </div>
  );
}