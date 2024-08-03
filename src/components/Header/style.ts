import { cva } from 'class-variance-authority';

const HeaderStyle = cva(
	[
		'sticky top-0 left-0 w-full z-50 bg-white dark:bg-black text-black dark:text-white page-padding transition-all duration-300',
	],
	{
		variants: {
			isScrolled: {
				true: ['shadow'],
			},
		},
	},
);

export { HeaderStyle };
