import { ContainerCategory } from "./styles";

export default function CategorySection() {
	return (
		<ContainerCategory>
			<h2>isso pode ser do seu interesse</h2>

			<div className="categorySection">
				<div className="categoryItem">
					<img src="/img/red-lip-jpg.jpg" alt="maquiagens" />
					<h3>maquiagens</h3>
					<a href="#">VER MAIS</a>
				</div>

				<div className="categoryItem">
					<img src="/img/wedding-ceremony.jpg" alt="fragrâncias" />
					<h3>fragrâncias</h3>
					<a href="#">VER MAIS</a>
				</div>

				<div className="categoryItem">
					<img src="/img/drink-shaker.jpg" alt="drink-shaker" />
					<h3 className="categoryItemName">energia & performance</h3>
					<a href="#">VER MAIS</a>
				</div>

				<div className="categoryItem">
					<img src="/img/hand-cream.jpg" alt="corpo & banho" />
					<h3>corpo & banho</h3>
					<a href="#">VER MAIS</a>
				</div>
			</div>
		</ContainerCategory>
	);
}
