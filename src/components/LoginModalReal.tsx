'use client';
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaTimes, FaMosque, FaSignInAlt } from "react-icons/fa";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    // Simulasi login berhasil
    setError('');
    alert('Login berhasil (simulasi).');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 p-8 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden border border-white/30">
        {/* Dekorasi Islami */}
        <div className="absolute top-0 right-0 text-blue-200/20 text-7xl -mt-2 -mr-2">
          <FaMosque />
        </div>
        
        <div className="absolute bottom-0 left-0 text-orange-200/20 text-7xl -mb-2 -ml-2">
          <FaMosque />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <FaSignInAlt className="text-orange-500" />
            Login Sistem
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-orange-600 transition p-1 rounded-full hover:bg-gray-100"
            aria-label="Tutup"
          >
            <FaTimes />
          </button>
        </div>

        {/* Pesan Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded mb-5 text-sm flex items-center relative z-10">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Alamat Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600/80">
                <FaEnvelope />
              </div>
              <input
                id="email"
                type="email"
                placeholder="cth: admin@sekolah.sch.id"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600/80">
                <FaLock />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/90 text-gray-800 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Masuk</span>
              <FaSignInAlt className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500 relative z-10">
          <p>Sistem Manajemen SMP Islamiyyah Serua</p>
          <p className="mt-1">© {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;