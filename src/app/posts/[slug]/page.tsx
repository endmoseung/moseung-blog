import React from 'react';

const BlogDetail = ({ params }: { params: { slug: string } }) => {
	return <main className='page-padding'>{`블로그 상세 ${params.slug}`}</main>;
};

export default BlogDetail;
