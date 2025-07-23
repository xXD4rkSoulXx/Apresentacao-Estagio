import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(useGSAP, ScrollToPlugin, Observer);

import MainSection from './components/MainSection';
import MindshakerSection from './components/MindshakerSection';
import HTMLSection from './components/HTMLSection';
import MaeSaboneteSection from './components/MaeSaboneteSection';
import MaeSaboneteSection2 from './components/MaeSaboneteSection2';
import LaravelSection from './components/LaravelSection';
import BlogSection from './components/BlogSection';
import ReactSection from './components/ReactSection';
import ToDoListSection from './components/ToDoListSection';
import JobFinderSection from './components/JobFinderSection';
import GSAPSection from './components/GSAPSection';
import GTATimelineSection from './components/GTATimelineSection';
import NextSection from './components/NextSection';
import ConclusionSection from './components/ConclusionSection';
import FuturePlansSection from './components/FuturePlansSection';
import EndSection from './components/EndSection';

export default function Index() {
	const sectionRefs = useRef([]);
	const index = useRef(0);
	const isScrolling = useRef(false);
	
	useGSAP(() => {		
		Observer.create({
			target: window,
			type: 'wheel',
			preventDefault: true,
			onDown: () => {
				if(!isScrolling.current && (index.current < sectionRefs.current.length - 1)) {
					isScrolling.current = true;
					index.current += 1;
					gsap.to(window, {
						duration: 1,
						scrollTo: sectionRefs.current[index.current],
						onComplete: () => {
							isScrolling.current = false;
						}
					});
				}
			},
			onUp: () => {
				if(!isScrolling.current && (index.current > 0)) {
					isScrolling.current = true;
					index.current -= 1;
					gsap.to(window, {
						duration: 1,
						scrollTo: sectionRefs.current[index.current],
						onComplete: () => {
							isScrolling.current = false;
						}
					});
				}
			}
		});
	});
	
	const nextSection = () => {
		if(!isScrolling.current && (index.current < sectionRefs.current.length - 1)) {
			isScrolling.current = true;
			index.current += 1;
			gsap.to(window, {
				duration: 1,
				scrollTo: sectionRefs.current[1],
				onComplete: () => {
					isScrolling.current = false;
				}
			});
		}
	}
	
	return (
		<main className="w-screen h-auto bg-black">
			<MainSection sectionRef={(el) => sectionRefs.current[0] = el} nextSection={nextSection} />
			<MindshakerSection sectionRef={(el) => sectionRefs.current[1] = el} />
			<HTMLSection sectionRef={(el) => sectionRefs.current[2] = el} />
			<MaeSaboneteSection sectionRef={(el) => sectionRefs.current[3] = el} />
			<MaeSaboneteSection2 sectionRef={(el) => sectionRefs.current[4] = el} />
			<LaravelSection sectionRef={(el) => sectionRefs.current[5] = el} />
			<BlogSection sectionRef={(el) => sectionRefs.current[6] = el} />
			<ReactSection sectionRef={(el) => sectionRefs.current[7] = el} />
			<ToDoListSection sectionRef={(el) => sectionRefs.current[8] = el} />
			<JobFinderSection sectionRef={(el) => sectionRefs.current[9] = el} />
			<GSAPSection sectionRef={(el) => sectionRefs.current[10] = el} />
			<GTATimelineSection sectionRef={(el) => sectionRefs.current[11] = el} />
			<NextSection sectionRef={(el) => sectionRefs.current[12] = el} />
			{/*<ConclusionSection sectionRef={(el) => sectionRefs.current[13] = el} />*/}
			<FuturePlansSection sectionRef={(el) => sectionRefs.current[13] = el} />
			<EndSection sectionRef={(el) => sectionRefs.current[14] = el} />
		</main>
	);
}
