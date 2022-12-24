import styled from "styled-components";

const ContainerShowcase = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 96px;
	width: 100%;

	.sectionTitle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0px 150px 0px 150px;

		h2 {
			margin-left: 450px;

			font-family: var(--font-oswald);
			font-style: normal;
			font-weight: 300;
			font-size: 46px;
			line-height: 70px;
		}

		p {
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
			background-color: var(--gold);
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

			hr{
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
						right: -75%;

						width: 30px;
						height: 30px;
					}
				}

				.infoProductSection {
					height: 40%;

					display: flex;
					justify-content: space-between;
					flex-direction: column;

					.descriptionSection {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 100%;

						h3 {
							font-family: var(--font-oswald);
							font-style: normal;
							font-weight: 400;
							font-size: 17px;
							line-height: 23px;
						}

						span {
							font-family: var(--font-open);
							font-style: normal;
							font-weight: 400;
							font-size: 14px;
							line-height: 23px;

							text-decoration-line: line-through;
						}

						p {
							font-family: "Aktiv Grotesk Ex";
							font-style: normal;
							font-weight: 700;
							font-size: 22px;
							line-height: 18px;
							/* or 82% */

							display: flex;
							align-items: center;
							letter-spacing: -1px;
							text-transform: uppercase;

							.h5Upper {
								font-family: "Aktiv Grotesk Ex";
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
