import styled from "styled-components";

const InfoContainer = styled.section`
	margin-top: 20px;
	width: 100%;
	height: 117px;
	padding: 0px 150px 0px 150px;

	display: flex;
	align-items: center;
	gap: 106px;

	background-color: var(--gray-3);

	div {
		.sizeIcon {
			width: 40px;
			height: 27px;
		}

		width: 265px;
		height: 46px;
		gap: 12px;

		display: flex;
		align-items: center;

		:nth-child(1) {
			width: 129px;
			height: 46px;
		}

		:nth-child(3) {
			width: 224px;
			height: 46px;
		}

		:nth-child(4) {
			width: 201px;
			height: 46px;
		}

		p {
			font-family: var(--font-open);
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 23px;
		}
	}
`;

export { InfoContainer };
