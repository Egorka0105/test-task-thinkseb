'use client';
import { FC, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import step1part1 from 'public/FirstLoadPage/step-1-part1.png';
import step1part2 from 'public/FirstLoadPage/step-1-part2.png';
import step2 from 'public/FirstLoadPage/step-2.png';
import step3 from 'public/FirstLoadPage/step-3.png';
import styles from './index.module.scss';

export const FirstLoadAnimation: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const images = container.querySelectorAll('img');

		const tl = gsap.timeline({ defaults: { duration: .8, ease: 'power2.out' } });

		tl.from([images[0], images[1]], { opacity: 0 })
			.to([images[0], images[1]], { opacity: 1 })
			.to(images[1], { opacity: 1 })
			.to(images[2], { opacity: 1 })
			.to(images[3], { opacity: 1 })
			.to(container, { opacity: 0, duration: 0.5, delay: 1 });

		tl.to(container.parentNode, { display: 'none', duration: 0.5 });
	}, []);

	return (
		<div className={styles.main_container}>
			<div ref={containerRef} className={styles.container}>
				<div className={styles.first__wrapper}>
					<Image style={{ opacity: 0 }} src={step1part1} alt={'step animation 1'} width={26} height={105} />
					<Image style={{ opacity: 0 }} src={step1part2} alt={'step animation 1'} width={104} height={130} />
				</div>

				<div className={styles.second__wrapper}>
					<Image
						style={{ opacity: 0 }}
						className={styles.element_2}
						src={step2}
						alt={'step animation 2'}
						width={150}
						height={51}
					/>
					<Image
						style={{ opacity: 0 }}
						className={styles.element_3}
						src={step3}
						alt={'step animation 3'}
						width={534}
						height={128}
					/>
				</div>
			</div>
		</div>
	);
};
