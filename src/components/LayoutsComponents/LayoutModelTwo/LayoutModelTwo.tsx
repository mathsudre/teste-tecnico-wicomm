import StyledButton from "../../GeneralComponents/Button";
import { ContainerLayoutTwo } from "./style";

export default function LayoutModelTwo() {
	return (
		<ContainerLayoutTwo data-aos="zoom-in">
			<img src="/img/perfumes.jpg" alt="mulher em uma banheira" />
			<section className="layoutDescription">
				<h2>
					Linha <br />
					EMPIRE
				</h2>
				<p>
					Escolha a sua fragrância masculina favorita e desperte as
					melhores sensações.
				</p>
				<StyledButton
					w={"249px"}
					h={"50px"}
					layoutHoverAlternative
					black
				>
					conheça nossos produtos
				</StyledButton>
			</section>
		</ContainerLayoutTwo>
	);
}
