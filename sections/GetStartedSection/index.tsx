"use client";
import {FC, useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './index.module.scss';

export const GetStartedSection: FC = () => {


    const businessRef = useRef(null);

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

    return (
        <section className={styles.section4}>

        </section>
    );
};