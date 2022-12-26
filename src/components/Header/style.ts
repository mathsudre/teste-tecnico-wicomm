import styled from "styled-components";

interface IContainer {
	bgColor: string;
}

const ContainerHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background-color: ${(props: IContainer) => props.bgColor};
`;

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	.colaborate-section {
		margin: 0 auto;
		width: 80%;
		height: 37px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h5 {
			font-family: var(--font-open);
			font-weight: 400;
			font-size: 10px;
			line-height: 22px;
		}
	}

	.colaborate-subsection {
		display: flex;
		align-items: center;
		gap: 32px;
		font-family: var(--font-open);
		font-weight: 400;
		font-size: 10px;
		line-height: 22px;
		cursor: pointer;

		.colaborate {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		span {
			font-weight: 700;
			font-size: 10px;
			line-height: 22px;
			text-transform: uppercase;
		}
	}
`;

export { ContainerHeader, StyledHeader };
