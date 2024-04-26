'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import test1 from "public/FirstLoadPage/step-1.png"
import test2 from "public/FirstLoadPage/step-2.png"
import test3 from "public/FirstLoadPage/step-3.png"
import styles from './index.module.scss';

export const FirstLoadAnimation: FC = () => {
	const [isShow, setShow] = useState(false);
	return (
		<div className={styles.main_container}>
			<div className={styles.container}>
				<Image
					src={test1}
					alt={'step animation 1'}
					width={100}
					height={130}
				/>
				<Image
					src={test2}
					alt={'step animation 2'}
					width={100}
					height={130}
				/>
				<Image
					src={test3}
					alt={'step animation 3'}
					width={100}
					height={130}
				/>
			</div>
		</div>
	);
};
