"use client";
import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './index.module.scss';

export const ReviewsSection: FC = () => {
	const reviewsRef = useRef(null);

	useEffect(() => {
		const sectionRef = reviewsRef.current;
		if (!sectionRef) return;
		gsap.registerPlugin(ScrollTrigger);
		gsap.set(sectionRef, { y: '20px' });

		const getStartedAnimation = gsap.to(sectionRef, {
			y: 0,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		});

		return () => {
			getStartedAnimation.kill();
		};
	}, []);

	return <section ref={reviewsRef} className={`cards card3 ${styles.section3}`}></section>;
};