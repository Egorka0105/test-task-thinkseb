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

export const footerNavigationPagesElements: INavBarListItem[] = [
	{ key: nanoid(), title: 'Home', link: '/' },
	{
		key: nanoid(),
		title: 'For Businesses',
		link: '/',
	},
	{ key: nanoid(), title: 'For Individuals', link: '/' },
	{ key: nanoid(), title: 'Blog', link: '/' },
	{ key: nanoid(), title: 'Marketing Efforts', link: '/' },
];

export const footerNavigationBusinessElements: INavBarListItem[] = [
	{ key: nanoid(), title: 'Label link 1', link: '/' },
	{
		key: nanoid(),
		title: 'Label link 2',
		link: '/',
	},
	{ key: nanoid(), title: 'Label link 3', link: '/' },
];

export const footerNavigationIndividualsElements: INavBarListItem[] = [
	{ key: nanoid(), title: 'Label link 1', link: '/' },
	{
		key: nanoid(),
		title: 'Label link 2',
		link: '/',
	},
	{ key: nanoid(), title: 'Label link 3', link: '/' },
];

export const footerNavigationContactElements: INavBarListItem[] = [
	{ key: nanoid(), title: '421-273-0427', link: '/' },
	{
		key: nanoid(),
		title: 'info@theinfin.com',
		link: '/',
	},
];

export const footerNavigationSocialElements: INavBarListItem[] = [
	{ key: nanoid(), title: 'Instagram', link: '/' },
	{ key: nanoid(), title: 'LinkedIn', link: '/' },
	{ key: nanoid(), title: 'Facebook', link: '/' },
	{ key: nanoid(), title: 'Twitter', link: '/' },
];
