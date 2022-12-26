import { Input } from "@mantine/core";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import StyledButton from "../GeneralComponents/Button";
import { ContainerFooter } from "./style";

export default function Footer() {
	return (
		<ContainerFooter>
			<section className="receiveNews">
				<h3>
					Receba nossas <br /> ofertas e novidades
				</h3>
				<div className="registerNew">
					<div className="receiveNewsInputBox">
						<Input placeholder="Digite seu nome"></Input>
						<Input placeholder="Digite seu email"></Input>
					</div>

					<StyledButton w={"130px"} h={"48px"} footer>
						CADASTRAR
					</StyledButton>
				</div>
			</section>
			<section className="informationSection">
				<ul>
					<li>GRUPO HINODE</li>
					<li>
						<a href="#">Catálogo Hinode</a>
					</li>
					<li>
						<a href="#">Seja um Consultor</a>
					</li>
					<li>
						<a href="#">Hinode Prime</a>
					</li>
					<li>
						<a href="#">Frete Inteligente</a>
					</li>
				</ul>

				<ul>
					<li>MAIS VENDIDOS</li>
					<li>
						<a href="#">Corps Lígnea Body Contour Gel Modelador</a>
					</li>
					<li>
						<a href="#">Shake de Vanilla H+ HND</a>
					</li>
					<li>
						<a href="#">Shake de Morango H+ HND</a>
					</li>
					<li>
						<a href="#">
							Luva de Silicone Creme para as Mãos Hands
						</a>
					</li>
					<li>
						<a href="#">Empire Gold</a>
					</li>
					<li>
						<a href="#">Empire VIP</a>
					</li>
				</ul>

				<ul>
					<li>DÚVIDAS FREQUENTES</li>
					<li>
						<a href="#">Fale Conosco</a>
					</li>
					<li>
						<a href="#">Entrega, Trocas e Devoluções</a>
					</li>
					<li>
						<a href="#">Compra e Venda</a>
					</li>
					<li>
						<a href="#">Política de Privacidade</a>
					</li>
					<li>
						<a href="#">Remover Consentimento</a>
					</li>
				</ul>

				<ul>
					<a
						href="https://www.hinode.com.br/central-de-atendimento"
						target="_blank"
						rel="noopener noreferrer"
					>
						<StyledButton w={"221px"} h={"48px"} footer>
							central de atendimento
						</StyledButton>
					</a>

					<li>De segunda a sexta das 9h às 21h</li>
					<li>Capitais e regiões metropolitanas 4020-2424</li>
					<li>Demais localidades: 0800-144-6633</li>
					<li className="iconContainer">
						<a
							href="https://www.instagram.com/hinodeoficial/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrInstagram className="socialIcons" />
						</a>
						<a
							href="https://www.youtube.com/channel/UCSqcPzOr5qwwT4EkZvNSC6w"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineYoutube className="socialIcons" />
						</a>
						<a
							href="https://www.facebook.com/Group.Hinode/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrFacebookOption className="socialIcons" />
						</a>
					</li>
				</ul>
			</section>
			<img src="/img/footer-cnpj.svg" alt="cnpj-info" />
		</ContainerFooter>
	);
}
