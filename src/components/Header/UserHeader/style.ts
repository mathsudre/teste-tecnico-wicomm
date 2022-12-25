import styled from "styled-components";

const StyledUserSectionHeader = styled.section`	
	margin: 0 auto;
	height: 90px;
	width: 80%;
	gap: 88px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: var(--white-1);

	.rightSection {
		width: 399px;
		height: 37px;
		gap: 32px;

		display: flex;

		align-items: center;
		justify-content: center;

		.loginRegister {
			width: 163px;
			height: 37px;			

			display: flex;
			align-items: flex-end;			

			div {
				display: flex;
				flex-direction: column;

				text-decoration: none;

				font-family: var(--font-open);
				font-style: normal;
				font-weight: 600;
				line-height: 22px;

				span {
					font-style: normal;
					font-weight: 600;
					font-size: 9px;
				}

				.linkSection {
					display: flex;
					flex-direction: row;
					gap: 5px;

					font-size: 10px;
				}
			}
		}

		.favorite {
			width: 98px;
			height: 20px;
			padding-top: 8px;

			gap: 11px;

			display: flex;			

			font-family: var(--font-open);
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 22px;
			
			cursor: pointer;
		}

		.bag {
			width: 50px;
			height: 26px;
			padding-top: 8px;
			cursor: pointer;

			.labelBag{				
				div{
					padding: 0;
					margin: 0;

					top: 10px;

					width: 14px;
					height: 14px;
					border-radius:50%;
					
					span{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						height: 100%;
					} 
				}
			}			
		}
	}

	.searchInput {
		width: 399px;
		height: 37px;
		border-radius: 100%;

		input {
			background-color: var(--bg-footer);
			font-family: var(--font-open);
			outline: none;
		}

		input::placeholder {
			color: var(--black);
			font-family: var(--font-open);
			font-style: normal;
			font-weight: 600;
			font-size: 12px;
			line-height: 22px;
		}
	}
`;

export default StyledUserSectionHeader;
