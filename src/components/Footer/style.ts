import styled from "styled-components";

const ContainerFooter = styled.footer`
	width: 100%;
	height: 832px;

	margin-top: 44px;
	margin-bottom: 206px;

	background-color: beige;
	img {
		width: 100%;
	}
	.receiveNews {
		padding: 0px 150px 0px 150px;
		color: var(--white-1);
		height: 152px;

		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--blue-hinode);

		h3 {
			font-family: var(--font-aktiv);
			font-style: normal;
			font-weight: 400;
			font-size: 32px;
			line-height: 44px;

			letter-spacing: -1px;
			text-transform: uppercase;
		}

		.registerNew {
			display: flex;
			align-items: center;
			gap: 61px;

			.receiveNewsInputBox {
				display: flex;
				gap: 16px;
				.mantine-Input-input {
					width: 203px;
					height: 23px;
					background-color: transparent;

					outline: none;
					border: none;

					border-radius: 0%;
					padding: 0;

					border-bottom: 1.5px solid var(--white-1);
					color: var(--white-1);
				}
			}
		}

		button {
			font-size: 11.8px;
		}
	}

	.informationSection {
		width: 100%;
		height: 422px;
		padding: 71px 150px 0px 150px;
		background-color: var(--bg-footer);

		display: flex;
		justify-content: space-evenly;

		.iconContainer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-top: 30px;
			gap: 20px;
		}

		.socialIcons {
			width: 48px;
			height: 48px;
			cursor: pointer;
		}

		ul {
			button {
				font-size: 11.8px;
				margin-bottom: 16px;
			}

			width: 267px;
			height: 176px;
			font-size: 12px;
			line-height: 22px;
			font-style: normal;
			font-family: var(--font-open);

			:nth-child(1) {
				width: 170px;
			}

			:nth-child(3) {
				width: 170px;
			}

			:nth-child(4) {
				text-align: end;
			}

			li:nth-child(1) {
				padding-bottom: 25px;
				font-weight: 600;
			}

			li {
				a:-webkit-any-link {
					font-weight: 400;
				}
			}
		}
	}
`;

export { ContainerFooter };
