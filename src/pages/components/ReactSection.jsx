import { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

ReactSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function ReactSection({sectionRef}) {
	const text = useRef(null);
	const tl = useRef(null);
	useGSAP(() => {
		Array.from(text.current.children[0].children).forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 50,
				delay: 0.3 * (i + 1),
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: el
			});
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
			delay: 1,
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
		<section ref={sectionRef} className="w-full min-h-screen text-white flex flex-col justify-center items-center space-y-10">
			<article ref={img} className="flex flex-col justify-center space-y-10">
				<img src="/images/Courses/ReactCourse.png" alt="React Course" className="w-150 h-auto" />
			</article>
			<article ref={text} className="h-auto flex flex-col space-y-10">
				<div className="self-center flex space-x-5 -ml-7">
					<img src="/images/Icons/React.png" alt="React" className="w-28 h-25" />
				</div>
				<ul className="list-disc marker:text-white space-y-2">
					<li className="text-xl font-medium">Componentes</li>
					<li className="text-xl font-medium">Hooks</li>
					<li className="text-xl font-medium">Map</li>
				</ul>
				<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://laracasts.com/series/beginning-react">Visitar curso</a></button>
			</article>
		</section>
	);
}
