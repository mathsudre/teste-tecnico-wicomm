import { Badge, Image, Rating } from "@mantine/core";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { IDataShowcaseItem } from "../../../interfaces/interfaces";
import StyledButton from "../../GeneralComponents/Button";

export default function ShowcaseItemCarrousel({ item }: IDataShowcaseItem) {
	const [favorite, setFavorite] = useState(false);

	function favoriteProduct(): void {
		setFavorite((prev) => !prev);
	}

	function formatter(price: number, isPromo: boolean) {
		const newFormato = new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

		const newPrice = newFormato.format(price).split(",");

		return isPromo ? (
			<>
				<span>
					{newPrice[0]},{newPrice[1]}
				</span>
				<p>
					{newPrice[0]},
					<span className="spanUpper">{newPrice[1]}</span>
				</p>
			</>
		) : (
			<p>
				{newPrice[0]},<span className="spanUpper">{newPrice[1]}</span>
			</p>
		);
	}

	return (
		<li>
			<div className="containerImage">
				{favorite ? (
					<AiFillHeart
						onClick={favoriteProduct}
						className="iconStyle"
						color="var(--red-1)"
					/>
				) : (
					<AiOutlineHeart
						onClick={favoriteProduct}
						className="iconStyle"
					/>
				)}
				<Image fit="cover" src={item.srcImg} alt={item.nameItem} />
				{item.isPromo && <Badge color="dark" size="lg" radius="xs">{item.promoDiscount}</Badge>}
			</div>

			<div className="infoProductSection">
				<div className="descriptionSection">
					<h3>{item.nameItem}</h3>
					<Rating value={4} readOnly color={"cyan"} />
					{item.isPromo && formatter(item.price, item.isPromo)}

					{item.isPromo ? "" : formatter(item.price, item.isPromo)}
				</div>
				<StyledButton w={"100%"} h={"60px"} showcase shouldHover>
					COMPRAR
				</StyledButton>
			</div>
		</li>
	);
}
