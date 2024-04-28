'use client';
import { FC, useEffect, useRef } from 'react';
import styles from './index.module.scss';

export const IndividualsSection: FC = () => {
	const individualsRef = useRef(null);

	useEffect(() => {
		// const sectionRef = businessRef.current;
		// if (!sectionRef) return;
		// gsap.registerPlugin(ScrollTrigger);
		// gsap.set(sectionRef, { y: '20px' });
		//
		// const businessAnimation = gsap.to(sectionRef, {
		//     y: 0,
		//     ease: 'power2.out',
		//     scrollTrigger: {
		//         trigger: sectionRef,
		//         start: 'top bottom',
		//         end: 'bottom top',
		//         scrub: true,
		//     },
		// });
		//
		// return () => {
		//     businessAnimation.kill();
		// };
	}, []);

	return <section ref={individualsRef} className={`cards card2 ${styles.section2}`}></section>;
};