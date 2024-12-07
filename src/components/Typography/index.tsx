import { cn } from '@/lib/utils';

interface TypographyProps {
	children: React.ReactNode;
	className?: string;
}

const H1 = ({ children, className }: TypographyProps) => {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight transition-all duration-300 lg:text-5xl mobile:text-3xl',
				className,
			)}
		>
			{children}
		</h1>
	);
};

const H2 = ({ children, className }: TypographyProps) => {
	return (
		<h2
			className={cn(
				'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-all duration-300 first:mt-0 mobile:text-2xl',
				className,
			)}
		>
			{children}
		</h2>
	);
};

const H3 = ({ children, className }: TypographyProps) => {
	return (
		<h3
			className={cn(
				'scroll-m-20 text-2xl font-semibold tracking-tight transition-all duration-300 mobile:text-xl',
				className,
			)}
		>
			{children}
		</h3>
	);
};

const H4 = ({ children, className }: TypographyProps) => {
	return (
		<h4
			className={cn(
				'scroll-m-20 text-xl font-semibold tracking-tight transition-all duration-300 mobile:text-lg',
				className,
			)}
		>
			{children}
		</h4>
	);
};

const P = ({ children, className }: TypographyProps) => {
	return (
		<p className={cn('leading-7 transition-all duration-300 mobile:text-sm [&:not(:first-child)]:mt-6', className)}>
			{children}
		</p>
	);
};

const BlockQuote = ({ children, className }: TypographyProps) => {
	return (
		<blockquote className={cn('mt-6 border-l-2 pl-6 italic transition-all duration-300 mobile:text-sm', className)}>
			{children}
		</blockquote>
	);
};

const List = ({ children, className }: TypographyProps) => {
	return (
		<ul className={cn('my-6 ml-6 list-disc transition-all duration-300 mobile:text-sm [&>li]:mt-2', className)}>
			{children}
		</ul>
	);
};

const Lead = ({ children, className }: TypographyProps) => {
	return (
		<p className={cn('text-xl text-muted-foreground transition-all duration-300 mobile:text-lg', className)}>
			{children}
		</p>
	);
};

const Large = ({ children, className }: TypographyProps) => {
	return (
		<div className={cn('text-lg font-semibold transition-all duration-300 mobile:text-base', className)}>
			{children}
		</div>
	);
};

const Small = ({ children, className }: TypographyProps) => {
	return (
		<small className={cn('text-sm font-medium leading-none transition-all duration-300 mobile:text-xs', className)}>
			{children}
		</small>
	);
};

export { H1, H2, H3, H4, P, BlockQuote, List, Lead, Large, Small };
