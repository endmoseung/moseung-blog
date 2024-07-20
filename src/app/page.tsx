import Header from './components/Header/Header';
import PopularList from './components/Home/PopularList';
import TagList from './components/Home/TagList';
import Posts from './components/Posts';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<Header />
			<section className='mobile:p-4 flex p-5'>
				<div className='flex flex-col'>
					<PopularList />
					<Posts />
				</div>
				<aside className='mobile:hidden'>
					<TagList />
				</aside>
			</section>
		</main>
	);
}
