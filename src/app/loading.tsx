import { Suspense } from 'react';

export default function Loading() {
	return (
		<Suspense>
			<div>로딩중</div>
		</Suspense>
	);
}
