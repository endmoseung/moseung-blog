import PopularList from '../components/Home/PopularList';
import TagList from '../components/Home/TagList';
import Posts from '../components/Posts';
import Profile from '../components/Home/Profile';

export default function Home() {
	return (
		<section className='flex flex-col gap-12'>
			<Profile />
			<section className='flex gap-4'>
				<div className='flex w-2/3 flex-col'>
					<PopularList />
					<Posts />
				</div>
				<aside className='w-1/3 mobile:hidden'>
					<TagList />
				</aside>
			</section>
		</section>
	);
}
