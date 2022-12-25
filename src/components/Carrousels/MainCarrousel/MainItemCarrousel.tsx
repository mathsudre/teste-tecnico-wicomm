import { Carousel } from "@mantine/carousel";
import { IDataItem } from "../../../interfaces/interfaces";
import StyledButton from "../../GeneralComponents/Button";

export default function MainItemCarrousel({ item }: IDataItem) {
	return (
		<Carousel.Slide>
			<div className="imageSection">
				<img
					src={item.srcImgOne}
					alt="face-cream"
					className="imgCream"
				/>

				<div className="profileWoman">
					<img
						src={item.srcImgTwo}
						alt="ginger-woman"
						className="imgWoman"
					/>

					<div className="buySection">
						<h2>{item.itemName}</h2>
						<StyledButton w="171px" h="50px" layoutHover transparent>
							COMPRAR
						</StyledButton>
					</div>
				</div>
			</div>
		</Carousel.Slide>
	);
}
