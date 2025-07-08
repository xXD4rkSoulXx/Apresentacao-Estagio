import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

MainSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
	nextSection: PropTypes.func.isRequired
};

export default function MainSection({sectionRef, nextSection}) {
	const text = useRef(null);
	const tl = useRef(null);
	useGSAP(() => {
		Array.from(text.current.children).forEach((el, i) => {
			gsap.from(el, {
				opacity: 0,
				y: 50,
				delay: i + 1,
				duration: 1,
				ease: 'power3.out'
			});
		});
		
		tl.current = gsap.timeline({paused: true})
						 .to(text.current.children[2], {
							 backgroundColor: '#ffffff',
							 color: '#000000',
							 duration: 1,
							 ease: 'power2.out'
						 });
	}, {scope: text});
	
	const projects = [
		{
			type: 'image',
			src: '/images/ProjectsPreview/Mae-Sabonete.png'
		},
		{
			type: 'image',
			src: '/images/ProjectsPreview/Blog.png'
		},
		{
			type: 'image',
			src: '/images/ProjectsPreview/ToDo-List.png'
		},
		{
			type: 'image',
			src: '/images/ProjectsPreview/JobFinder.png'
		},
		{
			type: 'video',
			src: '/videos/Timeline.mp4'
		}
	];
	const proj = useRef(null);
	const [index, setIndex] = useState(0);
	const curr = projects[index];
	const fade = () => {
		gsap.to(proj.current, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				setIndex((prev) => (prev + 1) % projects.length);
			}
		});
	};
	useGSAP(() => {
		gsap.fromTo(proj.current, {
			opacity: 0
		}, {
			opacity: 1,
			duration: 0.5
		});
		
		if(curr.type === 'image') {
			const timeout = setTimeout(() => {
				fade();
			}, 3000);
			return () => clearTimeout(timeout);
		}
	}, [index]);
	
	return (
		<section ref={sectionRef} className="w-full min-h-screen text-white flex justify-center items-center space-x-20">
			<article ref={text} className="w-100 h-auto space-y-10">
				<h1 className="text-6xl font-bold">Atividades do Estágio</h1>
				<p className="text-4xl font-semibold">Veja todas as atividades realizadas durante o estágio</p>
				<button onClick={nextSection} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-30 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer">Explorar</button>
			</article>
			<article ref={proj}>
				{ curr.type === 'image' ? (
					<img src={curr.src} alt="All projects done in Estágio" className="w-150 h-auto" />
				) : (
					<video src={curr.src} autoPlay muted onEnded={fade} controls={false} className="w-150 h-auto" />
				)}
			</article>
		</section>
	);
}
