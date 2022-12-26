import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import FlatList from "flatlist-react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { IPropSlide } from "../../../interfaces/interfaces";
import ShowcaseItemCarrousel from "./ShowcaseItemCarrousel";
import { ContainerShowcase } from "./style";

export default function ShowcaseCarrousel({
	title,
	data,
	bgColor,
}: IPropSlide) {
	const autoplay = useRef(Autoplay({ delay: 3000 }));
	const newData = data.slice(4).reverse();

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
		<ContainerShowcase title={title}>
			{title && (
				<div className={`sectionTitle ${bgColor && "bgColor"}`}>
					<h2 className={`${bgColor && "paddingTop"}`}>{title}</h2>

					{!bgColor && (
						<p>
							<BsEye />
							Ver todos
						</p>
					)}
				</div>
			)}

			<Carousel
				loop
				withIndicators
				height={667}
				className="mainCarrousel"
				bg={bgColor ? "var(--bg-color-2)" : ""}
				previousControlIcon={<AiOutlineLeft className="styleIcons" />}
				nextControlIcon={<AiOutlineRight className="styleIcons" />}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				<Carousel.Slide>
					<ul className="showcaseSlide">
						<FlatList
							list={data.slice(0, 4)}
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
