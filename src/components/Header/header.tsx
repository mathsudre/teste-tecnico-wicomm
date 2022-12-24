import { RiUserHeartLine } from "react-icons/ri";
import ShoppingHeader from "./ShoppingHeader/ShoppingHeader";
import { ContainerHeader, StyledHeader } from "./style";
import UserHeader from "./UserHeader/UserHeader";

export default function Header() {
	return (
		<StyledHeader>
			<ContainerHeader bgColor="var(--bg-color-2)">
				<div className="colaborate-section">
					<h5>A Empresa</h5>
					<div className="colaborate-subsection">
						<div className="colaborate">
							<RiUserHeartLine />
							<span>seja um consultor</span>
						</div>
						Fale Conosco
					</div>
				</div>
			</ContainerHeader>

			<UserHeader />
			<ShoppingHeader />
		</StyledHeader>
	);
}
