import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import bg from "../../public/assets/background.jpg";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
	title: "Arnab Dey | Web Dev PortFolio",
	description: "Meet Arnab Dey,a Full Stack Web Developer, Proficient in a wide range of technologies including React.js, Node, MongoDB, Next.js, Tailwind CSS,Express.js and more.",
	openGraph: {
		title: "Arnab Dey's PortFolio",
		description: "Meet Arnab Dey,a Full Stack Web Developer, Proficient in a wide range of technologies including React.js, Node, MongoDB, Next.js, Tailwind CSS,Express.js and more.",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-p-6">
			<body className={`${poppins.className} relative text-white`}>
				<Image src={bg} alt="my-background" style={{ position: `fixed`, top: 0, left: 0, width: `100vw`, height: `100vh`, zIndex: -99 }} />
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
