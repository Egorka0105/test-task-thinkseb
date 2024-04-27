import { FC } from 'react';
import Link from 'next/link';
import { INavBarListItem } from 'utils/types/interfaces';
import styles from './index.module.scss';

interface ICustomNavBarProps {
	list: INavBarListItem[];
}

export const CustomNavBar: FC<ICustomNavBarProps> = ({ list }) => {
	return (
		<nav className={styles.navbar}>
			{list.map((item: INavBarListItem) => (
				<Link key={item.key} href={item.link}>
					{item.title}
				</Link>
			))}
		</nav>
	);
};
