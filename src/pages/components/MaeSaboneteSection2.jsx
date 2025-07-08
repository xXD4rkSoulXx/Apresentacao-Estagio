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
	const imagesTablet = [
		'/images/MaeSabonete/FirstSectionTablet.png',
		'/images/MaeSabonete/SecondSectionTablet.png',
		'/images/MaeSabonete/ForthSectionPC.png',
		'/images/MaeSabonete/FooterSectionPC.png'
	];
	const imagesMobile = [
		'/images/MaeSabonete/FirstSectionMobile.png',
		'/images/MaeSabonete/SecondSectionMobile.png',
		'/images/MaeSabonete/ForthSectionMobile.png',
		'/images/MaeSabonete/FooterSectionMobile.png'
	];
	const tablet = useRef(null);
	const [indexTablet, setIndexTablet] = useState(0);
	const currentImageTablet = useRef(null);
	const nextImageTablet = useRef(null);
	useGSAP(() => {
		if(nextImageTablet.current) {
			gsap.fromTo(nextImageTablet.current, {
				y: 100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.inOut'
			});
		}
	}, [indexTablet]);
	useGSAP(() => {
		gsap.from(tablet.current.children[0], {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: tablet.current.children[0]
		});
		const interval = setInterval(() => {
			gsap.to(currentImageTablet.current, {
				y: -100,
				opacity: 0,
				duration: 0.6,
				ease: 'power2.inOut',
				scrollTrigger: currentImageTablet.current,
				onComplete: () => {
					setIndexTablet((prev) => (prev + 1) % imagesTablet.length);
				}
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	const mobile = useRef(null);
	const [indexMobile, setIndexMobile] = useState(0);
	const currentImageMobile = useRef(null);
	const nextImageMobile = useRef(null);
	useGSAP(() => {
		if(nextImageMobile.current) {
			gsap.fromTo(nextImageMobile.current, {
				y: 100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.inOut'
			});
		}
	}, [indexMobile]);
	useGSAP(() => {
		gsap.from(mobile.current.children[0], {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: mobile.current.children[0]
		});
		const interval = setInterval(() => {
			gsap.to(currentImageMobile.current, {
				y: -100,
				opacity: 0,
				duration: 0.6,
				ease: 'power2.inOut',
				scrollTrigger: currentImageMobile.current,
				onComplete: () => {
					setIndexMobile((prev) => (prev + 1) % imagesMobile.length);
				}
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	
	return (
		<section ref={sectionRef} className="w-[200vw] min-h-screen text-white space-x-70">
			<div className="min-w-screen h-screen flex items-center space-x-70 ml-70">
				<article ref={tablet} className="w-100 h-130 flex flex-col items-center space-y-10">
					<h1 className="text-6xl font-bold">Tablet</h1>
					<img ref={(el) => {currentImageTablet.current = el; nextImageTablet.current = el;}} key={imagesTablet[indexTablet]} src={imagesTablet[indexTablet]} alt="Mae-Sabonete on Tablet" className="max-w-150 max-h-120" />
				</article>
				<article ref={mobile} className="w-100 h-130 flex flex-col items-center space-y-10">
					<h1 className="text-6xl font-bold">Mobile</h1>
					<img ref={(el) => {currentImageMobile.current = el; nextImageMobile.current = el;}} key={imagesMobile[indexMobile]} src={imagesMobile[indexMobile]} alt="Mae-Sabonete on Mobile" className="max-w-150 max-h-120" />
				</article>
			</div>
		</section>
	);
}