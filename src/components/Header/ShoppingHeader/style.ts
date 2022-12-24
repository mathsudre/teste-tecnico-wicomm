import styled from "styled-components";

const StyledShoppingHeader = styled.section`
	margin: 0 auto;
	height: 49px;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.allCategories {
		height: 100%;

		display: flex;
		align-items: center;

		color: var(--white-1);

		font-family: var(--font-open);

		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 22px;
	}

	.productSection {
		width: 70%;

		font-family: var(--font-open);

		display: flex;
		justify-content: space-between;
		align-items: center;

		a:-webkit-any-link {
			text-decoration: none;
			font-weight: 600;
			color: var(--white-1);
			transition: 0.3s;
			:hover {
				color: var(--blue-hinode);
			}
		}
	}
`;

export { StyledShoppingHeader };
