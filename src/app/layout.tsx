import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
	title: "Arnab Dey's PortFolio",
	description: "Meet Arnab Dey,a Full Stack Web Developer, Proficient in a wide range of technologies including React.js, Node, MongoDB, Next.js, Tailwind CSS,Express.js and more.",
	openGraph: {
		title: "Arnab Dey's PortFolio",
		description: "Meet Arnab Dey,a Full Stack Web Developer, Proficient in a wide range of technologies including React.js, Node, MongoDB, Next.js, Tailwind CSS,Express.js and more.",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-p-6">
			<body className={`${poppins.className} text-white`}>
				{children}
				<Toaster
					position="bottom-center"
					gutter={20}
					containerStyle={{ margin: "10px" }}
					toastOptions={{
						success: { duration: 2000 },
						error: { duration: 5000 },
					}}
				/>
			</body>
		</html>
	);
}
