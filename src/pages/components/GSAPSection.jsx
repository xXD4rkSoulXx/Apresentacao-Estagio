import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

GSAPSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function GSAPSection({sectionRef}) {
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
			delay: 2,
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
	
	const img = useRef(null);
	useGSAP(() => {
		Array.from(img.current.children).forEach((el) => {
			gsap.from(el, {
				scale: 0,
				duration: 2,
				ease: 'power3.out',
				scrollTrigger: el
			});
		});
	}, {scope: img});
	
	return (
		<section ref={sectionRef} className="w-full min-h-screen text-white flex justify-center items-center space-x-20">
			<article ref={text} className="h-auto flex flex-col space-y-10">
				<h1 className="text-6xl font-bold -ml-7">GSAP</h1>
				<div className="self-center flex space-x-5 -ml-7">
					<img src="/images/Icons/GSAP.png" alt="GSAP's Plugins" className="w-30 h-30" />
				</div>
				<ul className="list-disc marker:text-white space-y-2">
					<li className="text-xl font-medium">Animações básicas</li>
					<li className="text-xl font-medium">ScrollTrigger</li>
					<li className="text-xl font-medium">SplitText</li>
					<li className="text-xl font-medium">Draggable</li>
					<li className="text-xl font-medium">DrawSVG</li>
				</ul>
				<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://gsap.com/resources">Visitar documentação</a></button>
			</article>
			<article ref={img} className="flex flex-col justify-center space-y-10">
				<img src="/images/Courses/GSAPDocumentation.png" alt="GSAP Documentation" className="w-50 h-150" />
			</article>
		</section>
	);
}
