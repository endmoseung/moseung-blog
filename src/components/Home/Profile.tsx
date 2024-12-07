import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarImage } from '../ui/avatar';
import { H1, H3 } from '@/components/Typography';

const Profile = () => {
	const snsLinks = [
		{ alt: 'instagram', src: '/icons/instagram.svg', link: 'https://www.instagram.com/mo___seung_2/' },
		{
			alt: 'linkedin',
			src: '/icons/linkedin.svg',
			link: 'https://www.linkedin.com/in/%EC%8A%B9%EB%AA%A8-%EA%B9%80-848b2b242/',
		},
		{
			alt: 'github',
			src: '/icons/github.svg',
			link: 'https://github.com/endmoseung',
		},
	];

	return (
		<section className='flex items-center justify-between'>
			<Avatar>
				<AvatarImage sizes='' src='/images/profile.jpeg' />
			</Avatar>
			<div className='flex w-1/2 flex-col gap-4'>
				<H1 className=''>사람을 좋아하고 같이 무언가를 만들어내는 메이커 김승모(모승)입니다.</H1>
				<H3>
					주로 Typescript + React 혹은 Typescript + NextJs로 개발하며 개발자 경험을 향상시키기 위한 정적인 언어와 툴에
					관심이 많으며 인프라에도 관심이 있습니다.
				</H3>
			</div>
			<div className='flex gap-2'>
				{snsLinks.map((sns) => (
					<Link target='_blank' href={sns.link} key={sns.alt}>
						<Image src={sns.src} alt={sns.alt} width={20} height={20} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Profile;
