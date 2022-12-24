import { FaDropbox } from "react-icons/fa";
import { RiBankCard2Line, RiExchangeLine, RiTruckLine } from "react-icons/ri";
import { InfoContainer } from "./style";

export default function InfoSection() {
	return (
		<InfoContainer>
			<div>
				<RiBankCard2Line className="sizeIcon" />
				<p>Tudo em até 6x sem juros</p>
			</div>
			<div>
				<RiTruckLine className="sizeIcon" />
				<p>
					FRETE GRÁTIS nas compras acima de R$ 49,00 para todo o
					Brasil
				</p>
			</div>
			<div>
				<RiExchangeLine className="sizeIcon" />
				<p>Hinode Prime: Receba em casa todo mês com 20% OFF</p>
			</div>
			<div>
				<FaDropbox className="sizeIcon" />
				<p>Garanta mais economia com frete inteligente</p>
			</div>
		</InfoContainer>
	);
}
