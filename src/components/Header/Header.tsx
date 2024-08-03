'use client';

import DarkModeStore from '@/stores/darkmodeStore';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { HeaderStyle } from './style';
import { H4 } from './typography';

const navLists = [{ name: 'About', path: '/about' }];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { darkMode, setDarkMode } = DarkModeStore();
	const observerRef = useRef<HTMLDivElement>(null);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle('dark', !darkMode);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsScrolled(!entry.isIntersecting);
			},
			{ threshold: [1.0] },
		);

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, []);

	return (
		<>
			<div ref={observerRef} className='absolute top-0 h-px w-full' />
			<header className={cn(HeaderStyle({ isScrolled }))}>
				<nav className='flex items-center justify-between'>
					<H4>
						<Link href='/'>Moseung</Link>
					</H4>
					<ul className='large flex items-center gap-4'>
						{navLists.map((list) => (
							<li key={list.path}>
								<Link
									className='rounded-md p-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'
									href={list.path}
								>
									{list.name}
								</Link>
							</li>
						))}
						<li className='cursor-pointer rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800'>
							{darkMode ? (
								<SunIcon className='size-5' color='#fff' onClick={toggleDarkMode} aria-label='다크 모드 전환' />
							) : (
								<MoonIcon className='size-5' color='#000' onClick={toggleDarkMode} aria-label='다크 모드 전환' />
							)}
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
