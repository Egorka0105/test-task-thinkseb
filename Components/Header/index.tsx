import { FC } from 'react';
import { CustomNavBar } from 'Components/shared/CustomNavBar';
import { Header_logo } from 'public/svgComponents/Header_logo';
import { headerNavigationElements } from 'utils/content/navigation-elements';
import styles from './index.module.scss';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Header_logo fill={'#121212'} />

			<CustomNavBar list={headerNavigationElements} />

			<button className={` default_button ${styles.contact_button} `} type={'button'}>
				<span>contact</span>
			</button>
		</header>
	);
};
