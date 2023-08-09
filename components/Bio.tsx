import { css } from "@emotion/react";
import styled from "@emotion/styled";

const BioWrapper = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #f5f5f5;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const BioImage = styled.div`
	width: 300px;
	height: 300px;
	background-color: #e0e0e0;
	border-radius: 50%;
	margin-right: 15px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 900px) {
		margin-right: 0;
		margin-bottom: 15px;
	}
`;

const BioTitle = styled.h2`
	font-size: 24px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	::before {
		content: "";
		display: block;
		width: 10px;
		height: 10px;
		background-color: #5cb85c;
		border-radius: 50%;
		margin-right: 10px;
	}
`;

const BioContent = styled.p`
	font-size: 16px;
	line-height: 1.5;
`;

const BioContentWrapper = styled.div`
	width: 60%;
	border: 1px solid green;
`;

function Bio() {
	return (
		<BioWrapper>
			<BioImage>
				<img src="your-image-source.jpg" alt="Bio" /> {/* 이미지 소스 추가 */}
			</BioImage>
			<BioContentWrapper>
				<BioTitle>Bio</BioTitle>
				<BioContent>
					`This is a sample Bio component with an image and styled using asdf\n
					asdfasdf sadfasdf asdfasdfsadf sadfasdfasdf\n
					asdfasdfdfsdfsafdasdfasdfas \n @emotion/styled. ㅁㄴㅇㄹ ㅁㄴㅇㄹ
					ㅁㄴㅇㄹㅁㄴㅇㄹ ㅁㄴㅇㄹ`
				</BioContent>
			</BioContentWrapper>
		</BioWrapper>
	);
}

export default Bio;
