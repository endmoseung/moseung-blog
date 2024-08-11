import React from 'react';
import Link from 'next/link';

const Profile = () => {
	const snsLinks = [
		{ name: 'instagram', link: 'https://www.instagram.com/' },
		{ name: 'facebook', link: 'https://www.facebook.com/' },
		{ name: 'youtube', link: 'https://www.youtube.com/' },
		{ name: 'twitter', link: 'https://www.twitter.com/' },
	];

	return (
		<section className='flex items-center justify-between'>
			<div>프로필이미지</div>
			<div>
				<h1>안녕하세요</h1>
				<p>안녕하세요</p>
			</div>
			<div>
				{snsLinks.map((sns) => (
					<Link target='_blank' href={sns.link} key={sns.name}>
						<button>{sns.name}</button>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Profile;
