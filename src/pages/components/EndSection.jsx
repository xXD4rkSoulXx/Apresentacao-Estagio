import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

EndSection.propTypes = {
    sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function EndSection({sectionRef}) {
    const text = useRef(null);
    useGSAP(() => {
        document.fonts.ready.then(() => {
            if(!text.current) return;
            const split  = new SplitText(text.current, {type: 'chars'});
            split.chars.forEach((el, i) => {
                gsap.timeline({
                    repeat: -1,
                    repeatDelay: 0.5,
                    yoyo: true,
                    trigger: text.current
                }).from(el, {
                    opacity: 0,
                    y: 200,
                    delay: i * 0.1,
                    duration: 1.5,
                    ease: 'power2.out',
                    trigger: text.current
                })
                .to(el, {
                    rotate: 360,
                    duration: 1.5,
                    ease: 'power1.inOut',
                    trigger: text.current
                })
                .to(el, {
                    opacity: 0,
                    y: -200,
                    duration: 1.5,
                    ease: 'power2.in',
                    trigger: text.current
                })
                .fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 200,
                        rotate: 0,
                        trigger: text.current
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: 'power2.out',
                        trigger: text.current
                    }
                );
            });
            return () => split.revert();
        });
    });

    return (
        <section ref={sectionRef} className="w-screen h-screen bg-black text-white flex justify-center items-center">
            <h1 ref={text} className="text-9xl font-extrabold">FIM</h1>
        </section>
    );
}
