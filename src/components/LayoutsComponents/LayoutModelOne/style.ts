import styled from "styled-components";

const ContainerLayoutOne = styled.section`
	width: 100%;
	height: 813px;
	background-color: beige;

	margin-top: 96px;

	display: flex;
	align-items: center;

	.layoutDescription {
		width: 723px;
		height: 384px;
		margin-left: 142px;

		position: absolute;

		color: var(--white-1);

		h2 {
			font-family: var(--font-playfair);
			font-style: normal;
			font-weight: 700;
			font-size: 92.1471px;
			line-height: 92px;
		}

		p {
			width: 538px;
			height: 99px;
			font-family: var(--font-roboto);
			font-style: normal;
			font-weight: 350;
			font-size: 24px;
			line-height: 137.69%;
			letter-spacing: 0.4px;
			margin: 8px 0px 32px 0px;
		}

		button {
			font-size: 11.8px;
		}
	}
`;

export { ContainerLayoutOne };
