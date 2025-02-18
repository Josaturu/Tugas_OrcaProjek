// pages/page.tsx
"use client";
import { useState, useEffect } from "react";
import {
	ChartBarIcon,
	TicketIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Dashboard() {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		"/images/Wisata1.jpg",
		"/images/Wisata2.jpg",
		"/images/Wisata3.jpg",
	];

	// Otomatis ganti gambar setiap 5 detik
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const stats = [
		{ id: 1, name: "Total Tiket", value: "1,234", icon: TicketIcon },
		{
			id: 2,
			name: "Total Transaksi",
			value: "Rp 456,7 Jt",
			icon: CurrencyDollarIcon,
		},
		{ id: 3, name: "Tiket Terjual Hari Ini", value: "89", icon: ChartBarIcon },
	];

	return (
		<div className="min-h-screen bg-sky-50">
			{/* Image Slider */}
			<div className="relative h-96 overflow-hidden z-0">
				{images.map((img, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentImage ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={img}
							alt={`Banner Wisata ${index + 1}`}
							layout="fill"
							objectFit="cover"
							quality={75}
							placeholder="blur"
							blurDataURL="data:image/png;base64,..." // Ganti dengan base64 placeholder
						/>
					</div>
				))}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{images.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full ${
								index === currentImage ? "bg-sky-600" : "bg-white"
							}`}
							onClick={() => setCurrentImage(index)}
						/>
					))}
				</div>
			</div>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<h2 className="text-2xl font-semibold text-sky-600 mb-4">
						Selamat Datang di OrcaTicketing
					</h2>
					<p className="text-gray-600 leading-relaxed">
						Kelola tiket dan transaksi Anda dengan mudah melalui dashboard ini.
						Pantau perkembangan penjualan, lakukan manajemen tiket, dan dapatkan
						insight bisnis secara real-time.
					</p>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-sky-50 p-4 rounded-lg">
							<h3 className="font-semibold text-sky-600 mb-2">Fitur Terbaru</h3>
							<p className="text-sm text-gray-600">
								Sistem pembaruan tiket real-time dan notifikasi instan
							</p>
						</div>
						<div className="bg-sky-50 p-4 rounded-lg">
							<h3 className="font-semibold text-sky-600 mb-2">
								Promo Bulan Ini
							</h3>
							<p className="text-sm text-gray-600">
								Dapatkan diskon 15% untuk pembelian tiket pertama
							</p>
						</div>
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
						>
							<stat.icon className="h-12 w-12 text-sky-600 mb-4" />
							<h3 className="text-lg font-semibold text-gray-700">
								{stat.name}
							</h3>
							<p className="text-3xl font-bold text-sky-600 mt-2">
								{stat.value}
							</p>
						</div>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-sky-600 text-white py-6 mt-12">
				<div className="container mx-auto px-4 text-center">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="mb-4 md:mb-0">
							&copy; 2024 OrcaTicketing. All rights reserved.
						</p>
						<div className="flex space-x-6">
							<a href="#" className="hover:text-sky-200 transition-colors">
								Kebijakan Privasi
							</a>
							<a href="#" className="hover:text-sky-200 transition-colors">
								Syarat & Ketentuan
							</a>
							<a href="#" className="hover:text-sky-200 transition-colors">
								Kontak
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
