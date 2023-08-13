/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// 스타일드 컴포넌트 정의
const Container = styled.div`
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid #ddd;
	display: inline-block;
	vertical-align: top;
`;

const Title = styled.h2`
	width: 100%;
	font-size: 28px;
	font-weight: 600;
	padding: 0px 30px;
`;

const Image = styled.img`
	padding: 30px;
	max-width: 100%;
	box-sizing: border-box;
	height: auto;
`;

const Description = styled.p`
	margin-top: 8px;
	padding: 0px 30px;
`;

// Props 타입 정의
type DescriptionWithPhotoProps = {
	title: string;
	imageUrl: string;
	description: string;
};

// 컴포넌트 정의 (함수 컴포넌트)
function DescriptionWithPhoto({
	title,
	imageUrl,
	description,
}: DescriptionWithPhotoProps) {
	return (
		<Container>
			<Title>{title}</Title>
			<Image src={imageUrl} alt={title} />
			<Description>{description}</Description>
		</Container>
	);
}

export default DescriptionWithPhoto;
