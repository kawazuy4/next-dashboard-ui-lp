'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock, FaTimes, FaMosque } from "react-icons/fa";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username dan password wajib diisi.");
      return;
    }

    // Validasi dummy
    if (username === "admin" && password === "admin") {
      setError('');
      alert('Login berhasil!');
      onClose();
      router.push("/admin");
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border border-white/30">
        {/* Dekorasi Islami */}
        <div className="absolute -top-10 -right-10 text-blue-200/30 text-6xl">
          <FaMosque />
        </div>
        
        <div className="absolute -bottom-5 -left-5 text-orange-200/30 text-6xl">
          <FaMosque />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <FaUser className="text-orange-500" />
            Login Admin
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-orange-600 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Pesan Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded mb-5 text-sm flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
                <FaUser />
              </div>
              <input
                id="username"
                type="text"
                placeholder="Masukkan username"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/90"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
                <FaLock />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/90"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaLock className="text-sm" />
            Masuk ke Sistem
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Sistem Administrasi SMP Islamiyyah Serua</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;