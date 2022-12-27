import { Carousel } from "@mantine/carousel";
import { Rating } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import FlatList from "flatlist-react";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { dataDoubleCarousel } from "../../../database/database";
import { IDataDoubleSlide } from "../../../interfaces/interfaces";
import { newPrice } from "../../../utils";
import StyledButton from "../../GeneralComponents/Button";
import { ContainerDoubleCarrousel } from "./style";

export default function DoubleItemCarrousel() {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	return (
		<ContainerDoubleCarrousel>
			<Carousel
				loop
				withIndicators
				height={833}
				previousControlIcon={<AiOutlineLeft className="styleIcons" />}
				nextControlIcon={<AiOutlineRight className="styleIcons" />}
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
			>
				<Carousel.Slide>
					<FlatList
						list={dataDoubleCarousel}
						renderItem={(product: IDataDoubleSlide) => (
							<div className="slideItem">
								<img src={product.srcImg} alt="perfume" />
								<div className="btnSection">
									<StyledButton
										w={"268px"}
										h={"60px"}
										showcase
										shouldHover
									>
										COMPRAR
									</StyledButton>
								</div>
								<div className="descriptionSection">
									<h3>{product.nameItem}</h3>
									<Rating
										value={product.ratingStar}
										readOnly
										color={"cyan"}
										size="xs"
									/>
									<div>
										{newPrice(product.price)}
										<p>
											em até 2x de {product.parcelPrice}
											,00
										</p>
									</div>
								</div>
							</div>
						)}
					/>
				</Carousel.Slide>
				<Carousel.Slide>
					<FlatList
						list={dataDoubleCarousel}
						renderItem={(product: IDataDoubleSlide) => (
							<div className="slideItem">
								<img src={product.srcImg} alt="perfume" />
								<div className="btnSection">
									<StyledButton
										w={"268px"}
										h={"60px"}
										showcase
										shouldHover
									>
										COMPRAR
									</StyledButton>
								</div>
								<div className="descriptionSection">
									<h3>{product.nameItem}</h3>
									<Rating
										value={product.ratingStar}
										readOnly
										color={"cyan"}
										size="xs"
									/>
									<div>
										{newPrice(product.price)}
										<p>
											em até 2x de {product.parcelPrice}
											,00
										</p>
									</div>
								</div>
							</div>
						)}
					/>
				</Carousel.Slide>
			</Carousel>
		</ContainerDoubleCarrousel>
	);
}
