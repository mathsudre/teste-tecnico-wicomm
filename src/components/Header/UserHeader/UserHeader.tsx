import { Indicator, Input, Tooltip } from "@mantine/core";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import StyledUserSectionHeader from "./style";
import Logo from "/logo-hinode-two.svg";

export default function UserHeader() {
	const [count, setCount] = useState(0);

	return (
		<StyledUserSectionHeader>
			<img src={Logo} alt="" />

			<Input
				placeholder="Busque aqui o produto de seu interesse"
				className="searchInput"
				radius="xl"
				rightSection={
					<Tooltip
						label="This is public"
						position="top-end"
						withArrow
					>
						<div>
							<FiSearch size={21} style={{ display: "block" }} />
						</div>
					</Tooltip>
				}
			/>

			<section className="rightSection">
				<div className="loginRegister">
					<RiUserLine size={21} style={{ display: "block" }} />

					<div>
						<span>Olá Visitante,</span>

						<div className="linkSection">
							<a href="#">ENTRE</a>
							OU
							<a href="#">CADASTRE-SE</a>
						</div>
					</div>
				</div>

				<div className="favorite">
					<AiOutlineHeart size={21} style={{ display: "block" }} />
					FAVORITOS
				</div>

				<div className="bag">
					<Indicator
						label={count}
						className="labelBag"
						position="middle-start"
						color={"var(--red-1)"}
					>
						<BiShoppingBag
							size={24}
							style={{ display: "block" }}
							color={"var(--gold)"}
						/>
					</Indicator>
				</div>
			</section>
		</StyledUserSectionHeader>
	);
}
