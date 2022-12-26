import styled from "styled-components";

const ContainerDoubleCarrousel = styled.div`
	margin-top: 117px;
	width: 100%;

	.styleIcons {
		width: 50px;
		height: 50px;
		color: var(--gray-2);
	}

	.mantine-Carousel-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 24px;
		margin-bottom: 40px;
	}
	.mantine-Carousel-indicators button {
		background-color: transparent;
		width: 10.5px;
		height: 10.5px;
		border: 2px solid var(--gold);
		transition: 1s;

		&[data-active] {
			width: 22.5px;
			height: 12px;
			border: 1px solid var(--gold);
			border-radius: 10px;
			background-color: var(--gold);
		}
	}

	.mantine-Carousel-controls button {
		background-color: transparent;
		border: none;
		box-shadow: none;
		color: white;
		margin: 0px 59px 0px 59px;
	}

	.slideItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 557px;
		height: 781px;

		.btnSection {
			position: absolute;
			bottom: 6%;
			width: 268px;
			height: 60px;
		}

		.descriptionSection {
			width: 222px;
			height: 184px;
			padding: 15px;
			margin: 12px;

			display: flex;
			gap: 20px;
			flex-direction: column;
			align-self: flex-start;

			border-radius: 16px;

			background-color: var(--white-1);

			font-style: normal;

			position: absolute;

			h3 {
				font-family: var(--font-oswald);
				font-weight: 400;
				font-size: 16px;
				line-height: 23px;
			}

			span {
				display: flex;
				font-family: var(--font-aktiv);
				font-weight: 700;
				font-size: 22px;
				line-height: 22px;
			}

			p {
				font-family: var(--font-aktiv);
				font-weight: 700;
				font-size: 10px;
				line-height: 18px;
				color: var(--gray-4);
				margin-top: 10px;
			}

			.spanUpperPro {
				position: relative;
				top: -4.8px;
				font-family: var(--font-aktiv);
				font-weight: 600;
				font-size: 12px;
				line-height: -98px;
				letter-spacing: -1px;
				text-transform: uppercase;
			}
		}
	}
`;

export { ContainerDoubleCarrousel };
