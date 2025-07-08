import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

MindshakerSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function MindshakerSection({sectionRef}) {
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
		
		gsap.from(text.current.children[2], {
			opacity: 0,
			y: 50,
			delay: 2,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: text.current.children[2]
		});
		
		tl.current = gsap.timeline({paused: true})
						 .to(text.current.children[2], {
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
			<article ref={text} className="w-100 h-auto space-y-10">
				<h1 className="text-6xl font-bold -ml-7">Mindshaker</h1>
				<ul className="list-disc marker:text-white space-y-2">
					<li className="text-xl font-medium">Costa da Caparica</li>
					<li className="text-xl font-medium">Criado em 2007</li>
					<li className="text-xl font-medium">Projetos nacionais e internacionais</li>
					<li className="text-xl font-medium">Programação Web/Mobile, Estratégia Digital, Web Design e Consolturia</li>
					<li className="text-xl font-medium">13 profissionais</li>
					<li className="text-xl font-medium">Plus Company (2022) e Fuseproject (2023)</li>
				</ul>
				<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://mindshaker.com/">Visitar website</a></button>
			</article>
			<article ref={img} className="flex flex-col justify-center items-center space-y-10">
				<img src="/images/Mindshaker/Mindshaker.png" alt="Logo of Mindshaker" className="w-50 h-auto" />
				<img src="/images/Mindshaker/Local.png" alt="Location of Mindshaker" className="w-150 h-auto" />
			</article>
		</section>
	);
}
