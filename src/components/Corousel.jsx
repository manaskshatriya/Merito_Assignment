import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";

export default function Corousel() {
  
  return (
    <body class=" text-neutral-50">
	<div id="app" class="max-w-screen-2xl mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
		
		<div class="relative">
			<div class="slides-container h-[50vh] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c1.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c2.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c3.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c4.jpg" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c1.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c2.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c3.webp" alt="mountain_image"/>
				</div>
				<div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
					<img class="w-full h-full object-cover" src="/assets/c4.jpg" alt="mountain_image"/>
				</div>

			</div>

			<div class="absolute top-0 -left-4 h-full items-center hidden md:flex">
				<button role="button" class="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>

				</button>
			</div>
			<div class="absolute top-0 -right-4 h-full items-center hidden md:flex">
				<button role="button" class="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</body>
  );
}
