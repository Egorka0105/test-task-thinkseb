import { nanoid } from 'nanoid';
import { INavBarListItem } from 'utils/types/interfaces';

export const headerNavigationElements: INavBarListItem[] = [
	{ key: nanoid(), title: 'Home', link: '/' },
	{
		key: nanoid(),
		title: 'For Businesses',
		link: '/',
	},
	{ key: nanoid(), title: 'For Individuals', link: '/' },
	{ key: nanoid(), title: 'Capitalism 2.0', link: '/' },
	{ key: nanoid(), title: 'Marketing Efforts', link: '/' },
];
