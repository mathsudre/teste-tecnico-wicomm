import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import FlatList from "flatlist-react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { dataMainCarousel } from "../../../database/database";
import { IDataMainCarousel } from "../../../interfaces/interfaces";
import MainItemCarrousel from "./MainItemCarrousel";
import { ContainerCarrousel } from "./style";

export default function MainCarrousel() {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	return (
		<ContainerCarrousel>
			<Carousel
				loop
				withIndicators
				height={768}
				className="mainCarrousel"
				bg={"var(--bege)"}
				previousControlIcon={<AiOutlineLeft size={50} />}
				nextControlIcon={<AiOutlineRight size={50} />}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				<FlatList
					list={dataMainCarousel}
					renderItem={(item: IDataMainCarousel, index) => (
						<MainItemCarrousel item={item} key={index} />
					)}
				/>
			</Carousel>
		</ContainerCarrousel>
	);
}
