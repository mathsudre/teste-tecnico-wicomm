import StyledButton from "../../GeneralComponents/Button";
import { ContainerLayoutOne } from "./style";

export default function LayoutModelOne() {
	return (
		<ContainerLayoutOne data-aos="zoom-in">
			<img src="/img/woman-relaxing.jpg" alt="mulher em uma banheira" />
			<section className="layoutDescription">
				<h2>
					Corpo e <br /> Banho
				</h2>
				<p>
					Confira nossa linha de produtos para o corpo. Hidratantes,
					loções e desodorantes para os cuidados com seu corpo.
				</p>
				<StyledButton w={"249px"} h={"50px"} layoutHover transparent>
					conheça nossos produtos
				</StyledButton>
			</section>
		</ContainerLayoutOne>
	);
}
