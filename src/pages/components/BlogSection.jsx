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
		'/images/Blog/HomePage.png',
		'/images/Blog/SearchPost.png',
		'/images/Blog/SearchTag.png',
		'/images/Blog/SignUp.png',
		'/images/Blog/SignUpValidation.png',
		'/images/Blog/LogIn.png',
		'/images/Blog/CreatePost.png',
		'/images/Blog/PostDetails.png',
		'/images/Blog/Comment.png',
		'/images/Blog/PostOptions.png',
		'/images/Blog/EditPost.png',
		'/images/Blog/DeletePost.png',
		'/images/Blog/Profile.png',
		'/images/Blog/ProfileOptions.png',
		'/images/Blog/EditProfile.png',
		'/images/Blog/ChangePassword.png'
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
					<h1 className="text-6xl font-bold -ml-7">Blog</h1>
					<div className="self-center flex space-x-5 -ml-7">
						<img src="/images/Icons/Laravel.png" alt="Laravel" className="w-18 h-18" />
						<img src="/images/Icons/TailwindCSS.png" alt="TailwindCSS" className="w-18 h-18" />
						<img src="/images/Icons/Vite.png" alt="Vite" className="w-15 h-15" />
						<img src="/images/Icons/MySQL.png" alt="MySQL" className="w-23 h-16" />
					</div>
					<ul className="list-disc marker:text-white space-y-2">
						<li className="text-xl font-medium">Posts</li>
						<li className="text-xl font-medium">Registar e Login</li>
						<li className="text-xl font-medium">Comentários</li>
						<li className="text-xl font-medium">Likes e Deslikes</li>
					</ul>
					<button onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="w-45 h-15 rounded-full border-3 border-white text-white text-lg font-bold cursor-pointer"><a href="https://github.com/xXD4rkSoulXx/Blog-Estagio">Ver Github</a></button>
				</article>
				<article ref={project} className="w-100 h-130 flex flex-col justify-center items-center space-y-10">
					<img ref={(el) => {currentImage.current = el; nextImage.current = el;}} key={images[index]} src={images[index]} alt="Blog" className="max-w-150 max-h-120" />
				</article>
			</div>
		</section>
	);
}