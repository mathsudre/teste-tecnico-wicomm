import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import FlatList from "flatlist-react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { dataShowcaseCarousel } from "../../../database/database";
import { ITitle } from "../../../interfaces/interfaces";
import ShowcaseItemCarrousel from "./ShowcaseItemCarrousel";
import { ContainerShowcase } from "./style";

export default function ShowcaseCarrousel({ title }: ITitle) {
	const autoplay = useRef(Autoplay({ delay: 3000 }));
	const newData = dataShowcaseCarousel.slice(4).reverse();

	function newSlide() {
		return (
			<Carousel.Slide>
				<ul className="showcaseSlide">
					<FlatList
						list={newData}
						renderItem={(item, index) => (
							<ShowcaseItemCarrousel item={item} key={index} />
						)}
					/>
				</ul>
			</Carousel.Slide>
		);
	}

	return (
		<ContainerShowcase>
			{title && (
				<div className="sectionTitle">
					<h2>{title}</h2>
					<p>
						<BsEye />
						Ver todos
					</p>
				</div>
			)}

			<Carousel
				loop
				withIndicators
				height={667}
				className="mainCarrousel"
				previousControlIcon={<AiOutlineLeft className="styleIcons" />}
				nextControlIcon={<AiOutlineRight className="styleIcons" />}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				<Carousel.Slide>
					<ul className="showcaseSlide">
						<FlatList
							list={dataShowcaseCarousel.slice(0, 4)}
							renderItem={(item, index) => (
								<ShowcaseItemCarrousel
									item={item}
									key={index}
								/>
							)}
						/>
					</ul>
				</Carousel.Slide>

				{newData.length >= 1 && newSlide()}
			</Carousel>
		</ContainerShowcase>
	);
}
