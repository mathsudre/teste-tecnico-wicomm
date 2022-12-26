import styled from "styled-components";

const ContainerCategory = styled.section`
	width: 100%;
	height: 636px;

	padding: 0px 150px 0px 150px;
	margin-top: 75px;

	h2 {
		width: 100%;

		text-align: center;

		font-family: var(--font-oswald);
		font-style: normal;
		font-weight: 300;
		font-size: 46px;
		line-height: 70px;
		text-transform: uppercase;

		margin-bottom: 50px;
	}

	.categorySection {
		display: flex;
		gap: 24px;
		width: 100%;
	}

	.categoryItem {
		display: flex;
		justify-content: center;
		align-items: end;
		width: 267px;
		height: 500px;

		:hover {
			transition: 1s;

			::before {
				content: "";

				position: absolute;
				width: 267px;
				height: 500px;
				background: linear-gradient(
					181.19deg,
					rgba(0, 0, 0, 0.18) 1.02%,
					rgba(0, 0, 0, 0.57) 28.75%,
					rgba(0, 0, 0, 0.74) 67.96%,
					rgba(0, 0, 0, 0.71) 101.26%
				);
				animation: fadeIn 1s;
			}

			h3 {
				transform: translateY(-330%);
			}

			a:-webkit-any-link {
				transition-delay: 2s;
				display: block;
				animation: fadeIn 1.5s;
			}
		}

		img {
			width: 267px;
			height: 500px;
		}

		.categoryItemName {
			width: 170px;
			line-height: 35px;
			margin-bottom: 20px;
		}

		h3 {
			position: absolute;

			color: var(--white-1);

			font-family: var(--font-oswald);
			font-style: normal;
			font-weight: 400;
			font-size: 25px;
			line-height: 68px;
			text-transform: uppercase;

			letter-spacing: 2.90323px;

			transition: 0.8s;
		}

		a:-webkit-any-link {
			position: absolute;
			width: 100px;
			text-align: center;
			text-decoration: none;

			color: var(--white-1);

			font-family: var(--font-open);
			font-style: normal;
			font-weight: 400;
			font-size: 15.4839px;
			line-height: 21px;

			transition: 1s;

			display: none;

			transform: translateY(-1020%);

			text-decoration-line: underline;
		}
	}
`;

export { ContainerCategory };
