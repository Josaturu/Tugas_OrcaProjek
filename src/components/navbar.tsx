"use client";
import React, { useState } from "react";
import Image from "next/image"; // Gunakan Image dari Next.js untuk optimasi gambar
import Link from "next/link";

const Navbar = () => {
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-sky-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Kiri: Logo dan Judul */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png" // Ganti dengan path logo yang sesuai
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
            </div>
            <span className="text-white font-bold text-lg">OrcaApp</span>
          </div>

          {/* Menu Utama */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>

            <Link
              href="/user"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              User
            </Link>

            <Link
              href="/wisata"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Wisata
            </Link>

            {/* Dropdown Transaction */}
            <div className="relative z-50">
              <button
                onClick={() => setIsTransactionOpen(!isTransactionOpen)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Transaction
              </button>
              {isTransactionOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
                  <Link
                    href="/transaction/book-ticket"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md "
                  >
                    Book Ticket
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Kanan: Profile Dropdown */}
          <div className="relative z-50">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center text-white focus:outline-none"
            >
              <Image
                src="/images/profile.jpg" // Ganti dengan path gambar profile
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md "
                >
                  Update Profile
                </Link>
                <button
                  onClick={() => console.log("Logout")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
