import { Footer, Navbar, ScrollToTop, ThemeProvider } from '@/components';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interSans = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
	title: 'Pranish Bajracharya',
	description:
		'Personal portfolio of Pranish Bajracharya, a software developer specializing in web development and freelance work.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${interSans.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<Navbar />
					{children}
					<ScrollToTop />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
