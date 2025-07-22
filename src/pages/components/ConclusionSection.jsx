import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

ConclusionSection.propTypes = {
    sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function ConclusionSection({sectionRef}) {
    const used = useRef(null);
    const notUsed = useRef(null);

    useGSAP(() => {
        gsap.from(used.current.children[0], {
            opacity: 0,
            y: -100,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: used.current
        });
        
        Array.from(used.current.children[1].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: i + 1,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        Array.from(used.current.children[2].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: ((i + 1) * 1) + 4,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        gsap.from(notUsed.current.children[0], {
            opacity: 0,
            y: -100,
            delay: 10,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: notUsed.current
        });

        gsap.from(notUsed.current.children[1], {
            opacity: 0,
            y: -100,
            delay: 11,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: notUsed.current
        });
        
        Array.from(notUsed.current.children[2].children).forEach((el, i) => {
            gsap.from(el, {
                opacity: 0,
                y: -100,
                delay: ((i + 1) * 1) + 11,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: el
            });
        });

        Array.from(notUsed.current.children[3].children).forEach((el, i) => {
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
            <article ref={used} className="flex flex-col justify-center space-y-10">
                <h1 className="text-6xl font-bold text-center">Tecnologias usadas</h1>
                <div className="flex justify-around space-x-5 ml-10">
                    <img src="/images/Icons/Laravel.png" alt="Laravel" className="w-20 h-20" />
                    <img src="/images/Icons/React.png" alt="React" className="w-20 h-20" />
                    <img src="/images/Icons/NextJS.png" alt="NextJS" className="w-20 h-20" />
                    <img src="/images/Icons/Prisma.png" alt="Prisma" className="w-20 h-20" />
                </div>
                <div className="flex justify-around space-x-5 ml-10">
                    <img src="/images/Icons/TailwindCSS.png" alt="TailwindCSS" className="w-20 h-20" />
                    <img src="/images/Icons/GSAP.png" alt="GSAP" className="w-20 h-20" />
                    <img src="/images/Icons/TypeScript.png" alt="TypeScript" className="w-20 h-20" />
                    <img src="/images/Icons/Vite.png" alt="Vite" className="w-20 h-20" />
                </div>
            </article>
            <article ref={notUsed} className="flex flex-col justify-center space-y-10">
                <h1 className="text-6xl font-bold text-center">Tecnologias</h1>
                <h1 className="text-6xl font-bold text-center">abandonadas</h1>
				<div className="flex justify-center space-x-15 ml-10">
                    <img src="/images/Icons/CSS.svg" alt="CSS" className="w-20 h-20" />
                    <img src="/images/Icons/Bootstrap.png" alt="Bootstrap" className="w-15 h-15" />
                </div>
				<div className="flex justify-center space-x-15 ml-10">
                    <img src="/images/Icons/JavaScript.png" alt="JavaScript" className="w-15 h-15" />
                    <img src="/images/Icons/PHP.png" alt="PHP" className="w-20 h-15" />
                </div>
			</article>
        </section>
    );
}
