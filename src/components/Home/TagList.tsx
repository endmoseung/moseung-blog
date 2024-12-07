import React from 'react';
import { H2 } from '@/components/Typography';
import { Badge } from '../ui/badge';
import { TAGS } from '@/constants/tag';

const TagList = () => {
	return (
		<article>
			<H2>태그</H2>
			<ul className='flex flex-wrap gap-2'>
				{Object.values(TAGS).map((tag) => (
					<Badge key={tag}>{tag}</Badge>
				))}
			</ul>
		</article>
	);
};

export default TagList;
