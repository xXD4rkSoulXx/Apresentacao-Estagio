import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

FuturePlansSection.propTypes = {
    sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function FuturePlansSection({sectionRef}) {
    const library = useRef(null);
    const framework = useRef(null);
    const sgbd = useRef(null);

    useGSAP(() => {
        gsap.from(library.current.children[0], {
            opacity: 0,
            y: -100,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: library.current
        });
        
        Array.from(library.current.children[1].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: i + 1,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        gsap.from(framework.current.children[0], {
            opacity: 0,
            y: -100,
            delay: 4,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: framework.current
        });
        
        Array.from(framework.current.children[1].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: ((i + 1) * 1) + 4,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        Array.from(framework.current.children[2].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: ((i + 1) * 1) + 8,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        gsap.from(sgbd.current.children[0], {
            opacity: 0,
            y: -100,
            delay: 13,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: sgbd.current
        });
        
        Array.from(sgbd.current.children[1].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: ((i + 1) * 1) + 13,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });
    });

    return (
        <section ref={sectionRef} className="w-screen h-screen bg-black text-white flex justify-around items-center">
            <article ref={library} className="flex flex-col justify-center space-y-10">
                <h1 className="text-6xl font-bold text-center">Bibliotecas</h1>
                <div className="flex justify-around space-x-5 ml-10">
                    <img src="/images/Icons/VueJS.png" alt="VueJS" className="w-20 h-20" />
                    <img src="/images/Icons/Angular.png" alt="Angular" className="w-20 h-20" />
                    <img src="/images/Icons/Svelte.png" alt="Svelte" className="w-40 h-20 -ml-10" />
                </div>
            </article>
            <article ref={framework} className="flex flex-col justify-center space-y-10">
                <h1 className="text-6xl font-bold text-center">Frameworks</h1>
				<div className="flex justify-around space-x-5 ml-10">
                    <img src="/images/Icons/NuxtJS.png" alt="NuxtJS" className="w-20 h-20" />
                    <img src="/images/Icons/NestJS.svg" alt="NestJS" className="w-20 h-20" />
                    <img src="/images/Icons/Svelte.png" alt="SvelteKit" className="w-40 h-20 -ml-10" />
                </div>
                <div className="flex justify-around space-x-5">
                    <img src="/images/Icons/Django.svg" alt="Django" className="w-20 h-20" />
                    <img src="/images/Icons/Spring.svg" alt="Spring" className="w-20 h-20" />
                    <img src="/images/Icons/ExpressJS.png" alt="ExpressJS" className="w-50 h-auto -mt-5 -ml-10" />
                    <img src="/images/Icons/NET.png" alt=".NET" className="w-20 h-20 -ml-10" />
                </div>
			</article>
            <article ref={sgbd} className="flex flex-col justify-center space-y-10">
                <h1 className="text-6xl font-bold text-center">SGBD</h1>
				<div className="flex justify-around space-x-5">
                    <img src="/images/Icons/PostgreSQL.png" alt="PostgreSQL" className="w-20 h-20" />
                    <img src="/images/Icons/SQLite.svg" alt="SQLite" className="w-40 h-20" />
                    <img src="/images/Icons/MongoDB.png" alt="MongoDB" className="w-20 h-20" />
                </div>
            </article>
        </section>
    );
}
