import { Carousel } from "@mantine/carousel";
import { Rating } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import StyledButton from "../../GeneralComponents/Button";
import { ContainerDoubleCarrousel } from "./style";

export default function DoubleItemCarrousel() {
	const autoplay = useRef(Autoplay({ delay: 3000 }));

	function newPrice(price: number) {
		const newFormato = new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

		const formatPrice = newFormato.format(price).split(",");

		return (
			<span>
				{formatPrice[0]},
				<span className="spanUpperPro">{formatPrice[1]}</span>{" "}
			</span>
		);
	}

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
					<div className="slideItem">
						<img src="/img/vent-perfum.jpg" alt="perfume" />
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
							<h3>
								Venyx L’Or <br />
								100ml
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(150)}
								<p>em até 2x de R$ 75,00</p>
							</div>
						</div>
					</div>
					<div className="slideItem">
						<img src="/img/mult-vit.jpg" alt="vitaminas" />
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
							<h3>
								Multi- Vit Complex A-Z Mulheres <br /> 60
								Cápsulas
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(85)}
								<p>em até 2x de R$ 75,00</p>
							</div>
						</div>
					</div>
				</Carousel.Slide>

				<Carousel.Slide>
					<div className="slideItem">
						<img src="/img/vent-perfum.jpg" alt="perfume" />
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
							<h3>
								Venyx L’Or <br />
								100ml
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(150)}
								<p>em até 2x de R$ 75,00</p>
							</div>
						</div>
					</div>
					<div className="slideItem">
						<img src="/img/mult-vit.jpg" alt="vitaminas" />
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
							<h3>
								Multi- Vit Complex A-Z Mulheres <br /> 60
								Cápsulas
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(85)}
								<p>em até 2x de R$ 75,00</p>
							</div>
						</div>
					</div>
				</Carousel.Slide>

				<Carousel.Slide>
					<div className="slideItem">
						<img src="/img/vent-perfum.jpg" alt="perfume" />
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
							<h3>
								Venyx L’Or <br />
								100ml
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(150)}
								<p>em até 2x de R$ 75,00</p>
							</div>
						</div>
					</div>
					<div className="slideItem">
						<img src="/img/mult-vit.jpg" alt="vitaminas" />
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
							<h3>
								Multi- Vit Complex A-Z Mulheres <br /> 60
								Cápsulas
							</h3>
							<Rating
								value={5}
								readOnly
								color={"cyan"}
								size="xs"
							/>
							<div>
								{newPrice(85)}
								<p>em até 2x de R$ 42,50</p>
							</div>
						</div>
					</div>
				</Carousel.Slide>
			</Carousel>
		</ContainerDoubleCarrousel>
	);
}
