import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

MaeSaboneteSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function MaeSaboneteSection({sectionRef}) {
	const text = useRef(null);
	const tl = useRef(null);
	useGSAP(() => {
		gsap.from(text.current.children[0], {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: text.current.children[0]
		});
		
		Array.from(text.current.children[1].children).forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 50,
				delay: 0.3 * (i + 1),
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: el
			});
		});
		
		Array.from(text.current.children[2].children).forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 50,
				delay: 0.3 * (i + 1),
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: el
			});
		});
		
		gsap.from(text.current.children[3], {
			opacity: 0,
			y: 50,
			delay: 1,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: text.current.children[3]
		});
		
		tl.current = gsap.timeline({paused: true})
						 .to(text.current.children[3], {
							 backgroundColor: '#ffffff',
							 color: '#000000',
							 duration: 0.3,
							 ease: 'power2.out'
						 });
	}, {scope: text});
	

	const imagesPC = [
		'/images/MaeSabonete/FirstSectionPC.png',
		'/images/MaeSabonete/SecondSectionPC.png',
		'/images/MaeSabonete/ThirdSectionPC.png',
		'/images/MaeSabonete/ForthSectionPC.png',
		'/images/MaeSabonete/FifthSectionPC.png',
		'/images/MaeSabonete/FooterSectionPC.png',
		'/images/MaeSabonete/ModalPC.png',
		'/images/MaeSabonete/Contactos.png'
	];
	const pc = useRef(null);
	const [indexPC, setIndexPC] = useState(0);
	const currentImagePC = useRef(null);
	const nextImagePC = useRef(null);
	useGSAP(() => {
		if(nextImagePC.current) {
			gsap.fromTo(nextImagePC.current, {
				y: 100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.inOut'
			});
		}
	}, [indexPC]);
	useGSAP(() => {
		gsap.from(pc.current.children[0], {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: pc.current.children[0]
		});
		const interval = setInterval(() => {
			gsap.to(currentImagePC.current, {
				y: -100,
				opacity: 0,
				duration: 0.6,
				ease: 'power2.inOut',
				scrollTrigger: currentImagePC.current,
				onComplete: () => {
					setIndexPC((prev) => (prev + 1) % imagesPC.length);
				}
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	
	return (
		<section ref={sectionRef} className="w-[200vw] min-h-screen text-white space-x-70">
			<div className="min-w-screen h-screen flex items-center space-x-70 ml-70">
				<article ref={text} className="w-100 h-auto flex flex-col space-y-10">
					<h1 className="text-6xl font-bold -ml-7">E-commerce de Sabonetes</h1>
					<div className="self-center flex space-x-5 -ml-7">
						<img src="/images/Icons/HTML.png" alt="HTML" className="w-18 h-18" />
						<img src="/images/Icons/CSS.svg" alt="CSS" className="w-18 h-18" />
						<img src="/images/Icons/JavaScript.png" alt="JavaScript" className="w-15 h-15" />
						<img src="/images/Icons/PHP.png" alt="PHP" className="w-23 h-16" />
						<img src="/images/Icons/MySQL.png" alt="MySQL" className="w-23 h-16" />
					</div>
					<ul className="list-disc marker:text-white space-y-2">
						<li className="text-xl font-medium">Responsive</li>
						<li className="text-xl font-medium">Accordion</li>
						<li className="text-xl font-medium">Modal</li>
						<li className="text-xl font-medium">Contactos funcionais</li>
					</ul>
					<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://github.com/xXD4rkSoulXx/Mae-Bodycare">Ver Github</a></button>
				</article>
				<article ref={pc} className="w-100 h-130 flex flex-col items-center space-y-10">
					<h1 className="text-6xl font-bold">PC</h1>
					<img ref={(el) => {currentImagePC.current = el; nextImagePC.current = el;}} key={imagesPC[indexPC]} src={imagesPC[indexPC]} alt="Mae-Sabonete on PC" className="max-w-150 max-h-120" />
				</article>
			</div>
		</section>
	);
}