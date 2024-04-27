import { FC } from 'react';
import { CustomNavBar } from 'Components/shared/CustomNavBar';
import {
	footerNavigationBusinessElements,
	footerNavigationContactElements,
	footerNavigationIndividualsElements,
	footerNavigationPagesElements,
	footerNavigationSocialElements,
} from 'utils/content/navigation-elements';
import styles from './index.module.scss';

export const FooterNavigationBar: FC = () => {
	return (
		<div className={styles.footer_navigation}>
			<div className={styles.preview_text}>
				Employers have to decide on bonuses and promotions based on limited information and often with resentment from
				the employees. It’s frustrating.
			</div>

			<div className={styles.navigation_wrapper}>
				<h6 className={styles.title}>Pages</h6>
				<CustomNavBar list={footerNavigationPagesElements} />
			</div>

			<div className={styles.navigation_wrapper}>
				<h6 className={styles.title}>For Business</h6>
				<CustomNavBar list={footerNavigationBusinessElements} />
			</div>

			<div className={styles.navigation_wrapper}>
				<h6 className={styles.title}>For Individuals</h6>
				<CustomNavBar list={footerNavigationIndividualsElements} />
			</div>

			<div className={styles.navigation_wrapper}>
				<h6 className={styles.title}>Contact</h6>
				<CustomNavBar list={footerNavigationContactElements} />
			</div>

			<div className={styles.navigation_wrapper}>
				<h6 className={styles.title}>Social Media</h6>
				<CustomNavBar list={footerNavigationSocialElements} />
			</div>
		</div>
	);
};
