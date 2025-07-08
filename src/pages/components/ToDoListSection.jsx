import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

ToDoListSection.propTypes = {
	sectionRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired
};

export default function ToDoListSection({sectionRef}) {
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
		'/images/ToDoList/Tasks.png',
		'/images/ToDoList/EditTask.png',
		'/images/ToDoList/DeleteTask.png'
	];
	const project = useRef(null);
	const [index, setIndex] = useState(0);
	const currentImage = useRef(null);
	const nextImage = useRef(null);
	useGSAP(() => {
		if(nextImage.current) {
			gsap.fromTo(nextImage.current, {
				y: 100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.inOut'
			});
		}
	}, [index]);
	useGSAP(() => {
		const interval = setInterval(() => {
			gsap.to(currentImage.current, {
				y: -100,
				opacity: 0,
				duration: 0.6,
				ease: 'power2.inOut',
				scrollTrigger: currentImage.current,
				onComplete: () => {
					setIndex((prev) => (prev + 1) % images.length);
				}
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	
	return (
		<section ref={sectionRef} className="w-[200vw] min-h-screen text-white space-x-70">
			<div className="min-w-screen h-screen flex items-center space-x-70 ml-70">
				<article ref={text} className="w-100 h-auto flex flex-col space-y-10">
					<h1 className="text-6xl font-bold -ml-7">ToDo List</h1>
					<div className="flex space-x-5 -ml-7">
						<img src="/images/Icons/React.png" alt="React" className="w-18 h-18" />
						<img src="/images/Icons/TailwindCSS.png" alt="TailwindCSS" className="w-18 h-18" />
						<img src="/images/Icons/Vite.png" alt="Vite" className="w-18 h-18" />
					</div>
					<ul className="list-disc marker:text-white space-y-2">
						<li className="text-xl font-medium">Tasks</li>
						<li className="text-xl font-medium">Marcar e Desmarcar</li>
						<li className="text-xl font-medium">Editar e Eliminar</li>
					</ul>
					<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://github.com/xXD4rkSoulXx/ToDo-List-Estagio">Ver Github</a></button>
				</article>
				<article ref={project} className="w-100 h-130 flex flex-col justify-center items-center space-y-10">
					<img ref={(el) => {currentImage.current = el; nextImage.current = el;}} key={images[index]} src={images[index]} alt="ToDo List" className="max-w-150 max-h-120" />
				</article>
			</div>
		</section>
	);
}
