import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Language = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>언어</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>언어</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>한국어</DropdownMenuItem>
				<DropdownMenuItem>영어</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Language;
