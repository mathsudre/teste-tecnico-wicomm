import styled from "styled-components";

const ContainerCarrousel = styled.div`
	width: 100%;

	.mainCarrousel {
		.mantine-Carousel-controls button {
			background-color: transparent;
			border: none;
			box-shadow: none;
			color: white;
			margin: 0px 59px 0px 59px;
		}
	}

	.mantine-Carousel-indicators button {
		background-color: transparent;
		width: 10.5px;
		height: 10.5px;
		border: 2px solid var(--white-1);
		transition: 1s;

		&[data-active] {
			width: 22.5px;
			height: 12px;
			border: 2px solid var(--white-1);
			border-radius: 10px;
			background-color: var(--white-1);
		}
	}

	.imageSection {
		display: flex;
		position: absolute;
		right: 0px;
	}

	.imgCream {
		position: relative;
		right: -250px;
		bottom: 200px;
	}

	.profileWoman {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.imgWoman {
		position: relative;
		left: -50px;
		top: -30px;
	}

	.buySection {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		position: relative;
		bottom: 600px;
		right: -550px;

		width: 513px;
		height: 265px;

		h2 {
			font-family: var(--font-playfair);
			font-style: normal;
			font-weight: 700;
			font-size: 92.1471px;
			line-height: 92px;

			letter-spacing: -3.54412px;

			color: var(--white-1);
		}
	}
`;

export { ContainerCarrousel };
