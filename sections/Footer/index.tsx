import { FC } from 'react';
import { FooterNavigationBar } from 'Components/FooterNavigationBar';
import Image from 'next/image';
import Link from 'next/link';
import footerLogo from 'public/images/footer-logo.png';
import smallLogo from 'public/svgIcons/alt-logo.svg';
import { getYear } from 'utils/functions/getYear';
import styles from './index.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<FooterNavigationBar />

			<div className={styles.footer_caption__wrapper}>
				<Image src={footerLogo} alt={'footer logo'} width={1380} height={241} />

				<div className={styles.caption}>
					<Image src={smallLogo} alt={'footer alt logo'} />
					<span>
						©{getYear()} • Curated by <Link href={'https://thinkseb.com/'}>ThinkSeb</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};
