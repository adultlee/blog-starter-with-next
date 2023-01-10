import styled from "@emotion/styled";

type ButtonProps = {
	color: string;
	width: number;
	height: number;
};

const Button = styled.button<ButtonProps>`
	display: inline-block;
	position: relative;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 1.3;
	width: ${({ width }) => width}vw;
	height: ${({ height }) => height}px;
	color: ${({ color }) => color};
	transition: all 0.2s;
`;

export default Button;
