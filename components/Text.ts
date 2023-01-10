import styled from "@emotion/styled";

export type TextProps = {
	color: string;
	size: string;
	weight: string;
};

const Text = styled.p<TextProps>`
	color: ${({ color }) => color};
	font-size: ${({ size }) => `${size}px`};
	font-weight: ${({ weight }) => weight};
	line-height: 1.6;
	white-space: nowrap;
	z-index: inherit;
	text-overflow: ellipsis;
	overflow: hidden;
	user-select: none;
`;

export default Text;
