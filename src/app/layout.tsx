import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const Header = dynamic(() => import('@/components/Header/Header'), {
	loading: () => <header className='page-header h-[68px] w-full mobile:h-[60px]'></header>,
	ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex flex-col'>
					<Header />
					<div className='page-padding'>{children}</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
