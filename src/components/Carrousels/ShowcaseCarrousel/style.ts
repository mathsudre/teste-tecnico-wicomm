import styled from "styled-components";

interface IMarginTop {
	title?: boolean | string;
	bgColor?: boolean;
}

const ContainerShowcase = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${(prop: IMarginTop) => (prop.title ? "76px" : "")};
	width: 100%;

	.mantine-Badge-root {
		width: 50px;
		height: 28px;
		padding: 0;

		background-color: var(--gold);

		position: relative;
		top: -120px;
		right: 235px;

		color: var(--white-1);

		span {
			width: 100%;
			text-align: center;
			font-weight: 600;
			font-family: var(--font-open);

			text-overflow: none;
		}
	}

	.bgColor {
		background-color: var(--bg-color-2);
	}

	.paddingTop {
		padding-top: 50px;
	}

	.sectionTitle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0px 150px 0px 150px;

		h2 {
			position: relative;
			width: 100%;
			text-align: center;

			font-family: var(--font-oswald);
			font-style: normal;
			font-weight: 300;
			font-size: 46px;
			line-height: 70px;
			text-transform: uppercase;
		}

		p {
			width: 90px;

			position: relative;

			right: 0%;

			display: flex;
			align-items: center;
			align-self: flex-end;
			justify-self: end;

			gap: 8px;

			font-family: var(--font-open);
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 22px;

			z-index: 1;
		}
	}

	.mainCarrousel {
		.styleIcons {
			width: 50px;
			height: 50px;
			color: var(--gray-2);
		}

		.mantine-Carousel-controls button {
			background-color: transparent;
			border: none;
			box-shadow: none;
			color: white;
			margin: 0px 59px 0px 59px;
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

		.mantine-Carousel-slide {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.showcaseSlide {
			width: 1140px;
			height: 519px;

			display: flex;
			gap: 25px;

			hr {
				display: none;
			}

			li {
				width: 311px;
				height: 100%;

				.containerImage {
					display: flex;
					align-items: center;
					justify-content: center;

					width: 100%;
					height: 311px;

					background-color: var(--gray-3);

					.iconStyle {
						cursor: pointer;

						position: relative;
						top: -130px;
						right: -85%;

						width: 30px;
						height: 30px;

						animation: heartBeat 1.5s;
						transition: 1s;
					}
				}

				.infoProductSection {
					height: 40%;

					display: flex;
					justify-content: space-between;
					flex-direction: column;
					font-style: normal;

					.descriptionSection {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 100%;

						h3 {
							font-family: var(--font-oswald);
							font-weight: 400;
							font-size: 17px;
							line-height: 23px;
						}

						span {
							font-family: var(--font-open);

							font-weight: 400;
							font-size: 14px;
							line-height: 23px;

							text-decoration-line: line-through;
						}

						p {
							font-family: var(--font-aktiv);
							font-weight: 700;
							font-size: 22px;
							line-height: 18px;

							display: flex;
							align-items: center;
							letter-spacing: -1px;
							text-transform: uppercase;

							.h5Upper {
								font-family: var(--font-aktiv);
								font-weight: 600;
								font-size: 14px;
								line-height: 38px;

								letter-spacing: -1px;
								text-transform: uppercase;
							}
						}
					}
				}
			}
		}
	}
`;

export { ContainerShowcase };
