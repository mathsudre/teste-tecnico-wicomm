import styled from "styled-components";

interface IButton {
	w?: string;
	h?: string;
	shouldHover?: boolean;
	showcase?: boolean;
	transparent?: boolean;
	footer?: boolean;
	layoutHover?: boolean;	
	layoutHoverAlternative?:boolean
	black?:boolean
}

const StyledButton = styled.button`
	width: ${(props: IButton) => props.w};
	height: ${(props: IButton) => props.h};

	font-family: var(--font-open);
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;

	text-align: center;
	text-transform: uppercase;

	transition: 0.3s;

	

	${(props) =>
		props.transparent
			? "background-color: transparent; border: 2.5px solid var(--white-1);color: var(--white-1);"
			: ""};

	${(props) =>
		props.showcase
			? "background-color: var(--white-1); border: 2.5px solid var(--orange);color: var(--orange);"
			: ""};

	${(props) =>
		props.black
			? "background-color: var(--black); border: 2.5px solid var(--blacke); color: var(--white-1);"
			: ""};

	${(props) =>
		props.footer
			? "background-color: var(--blue-marine); border: 2.5px solid var(--blue-marine);color: var(--white-1);"
			: ""};

	/* HOVER */
	${(props) =>
		props.shouldHover
			? "&:hover { background-color: var(--orange); border: 2.5px solid var(--orange); color: var(--white-1);  }"
			: ""}

	${(props) =>
		props.layoutHover
			? "&:hover { background-color: var(--white-1); border: 2.5px solid var(--white-1); color: var(--gray-4);  }"
		: ""}		

	${(props) =>
		props.layoutHoverAlternative
			? "&:hover { background-color: var(--white-1); border: 2.5px solid var(--gray-4); color: var(--gray-4);  }"
		: ""}		
	
`;

export default StyledButton;
