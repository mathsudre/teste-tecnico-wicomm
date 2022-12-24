import { useState } from "react";
import { ContainerHeader } from "../style";
import { StyledShoppingHeader } from "./style";
import { Burger } from '@mantine/core';

export default function ShoppingHeader() {
	const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
    
	return (
		<ContainerHeader bgColor="var(--gold)">
			<StyledShoppingHeader>
				<div className="allCategories">
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
                        title={title}
                        color='var(--white-1)'
					/>
					Todas as categorias
				</div>
				<div className="productSection">
					<a href="#">MAQUIAGEM</a>
					<a href="#">CORPO & BANHO</a>
					<a href="#">VIDA SAUDÁVEL</a>
					<a href="#">ENERGIA E PERFORMANCE</a>
				</div>
			</StyledShoppingHeader>
		</ContainerHeader>
	);
}
