import PopularList from '../components/Home/PopularList';
import TagList from '../components/Home/TagList';
import Posts from '../components/Posts';
import Profile from '../components/Home/Profile';

export default function Home() {
	return (
		<section className='flex flex-col'>
			<Profile />
			<div className='flex flex-col'>
				<PopularList />
				<Posts />
			</div>
			<aside className='mobile:hidden'>
				<TagList />
			</aside>
		</section>
	);
}
