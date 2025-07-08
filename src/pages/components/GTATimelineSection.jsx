import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

BlogSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function BlogSection({sectionRef}) {
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
	

	const images = [
		{
			type: 'video',
			src: '/videos/Timeline.mp4'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIIIDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIIISinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIIICharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIIIMap.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAViceCityDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAViceCitySinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAViceCityCharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAViceCityMap.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTASanAndreasDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTASanAndreasSinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTASanAndreasCharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTASanAndreasMap.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIVDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIVSinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIVCharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAIVMap.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVSinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVCharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVCharacter2.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVCharacter3.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVMap.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVIDescription.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVISinopse.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter2.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter3.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter4.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter5.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter6.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter7.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVICharacter8.png'
		},
		{
			type: 'image',
			src: '/images/GTATimeline/GTAVIMap.png'
		}
	];
	const project = useRef(null);
	const [index, setIndex] = useState(0);
	const curr = images[index];
	const fade = () => {
		gsap.to(images.current, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				setIndex((prev) => (prev + 1) % images.length);
			}
		});
	};
	useGSAP(() => {
		gsap.fromTo(project.current, {
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
		<section ref={sectionRef} className="w-[200vw] min-h-screen text-white space-x-70">
			<div className="min-w-screen h-screen flex items-center space-x-20 ml-70">
				<article ref={text} className="w-100 h-auto flex flex-col space-y-10">
					<h1 className="text-6xl font-bold -ml-7">GTA Timeline</h1>
					<div className="self-center flex space-x-5 -ml-7">
						<img src="/images/Icons/React.png" alt="Read" className="w-18 h-18" />
						<img src="/images/Icons/GSAP.png" alt="GSAP" className="w-18 h-18" />
						<img src="/images/Icons/TailwindCSS.png" alt="TailwindCSS" className="w-15 h-15" />
						<img src="/images/Icons/Vite.png" alt="Vite" className="w-20 h-16" />
					</div>
					<ul className="list-disc marker:text-white space-y-2">
						<li className="text-xl font-medium">Timeline com DrawSVG</li>
						<li className="text-xl font-medium">Animações com ScrollTrigger</li>
						<li className="text-xl font-medium">Título e descrição com SplitText</li>
						<li className="text-xl font-medium">Imagens com Scale e Opacity</li>
						<li className="text-xl font-medium">Transição entre secções com Observer e ScrollTo</li>
					</ul>
					<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://github.com/xXD4rkSoulXx/GTATimeline">Ver Github</a></button>
				</article>
				<article ref={project}>
					{ curr.type === 'image' ? (
						<img src={curr.src} alt="GTA Timeline" className="w-150 h-auto" />
					) : (
						<video src={curr.src} autoPlay muted onEnded={fade} controls={false} className="w-150 h-auto" />
					)}
				</article>
			</div>
		</section>
	);
}
