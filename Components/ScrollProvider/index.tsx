'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './index.module.scss';

export const ScrollProvider = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".cards",
				pin: true,
				pinSpacing: true,
				markers: true,
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			}
		});
		console.log(gsap.utils.toArray('.cards'))

		gsap.utils.toArray('.cards').forEach((card: any, index) => {
			tl.to(card, {
				duration: 1,
				y: 0,
				opacity: 1,
				ease: "power1.inOut",
			});
		});

	}, []);

	return (
		<div ref={containerRef} className={styles.wrapper}>
			<div className={`cards ${styles.cards} ${styles.card1}`}>
				<h1>Slide 1</h1>
			</div>

			<div className={`cards ${styles.cards} ${styles.card2}`}>
				<h1>Slide 2</h1>
			</div>
		</div>
	);
};
