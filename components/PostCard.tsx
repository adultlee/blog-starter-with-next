import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const PostCardWrapper = styled.div`
	padding: 8px 0;
	margin: 12px 0;
	width: 500px;
	border: 1px solid red;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: 0.2s ease;

	.post-copy {
		width: 100%;
		padding-right: 24px;
	}

	.post-title {
		display: inline-block;
		position: relative;
		font-size: 24px;
		width: 100%;
		border: 1px solid red;
		transition: 0.2s ease;
		overflow: hidden;
		text-overflow: ellipsis;
		&:before {
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			width: 8px;
			height: 8px;
			border-right: 2px solid #8a4d3c;
			border-bottom: 2px solid #fb673e;
			margin-right: 10px;
			transition: 0.4s ease;
			transform: translateY(-50%) rotate(-45deg);
			opacity: 0;
		}
	}
	.post-desc {
		font-size: 18px;
		margin-top: 8px;

		max-height: 100px;
		line-height: 1.57;
		opacity: 0.5;

		/* 한 줄 자르기 */
		display: inline-block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		/* 여러 줄 자르기 추가 스타일 */
		white-space: normal;
		line-height: 1.2;
		height: 3.6em;
		text-align: left;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.post-image {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}

	&:hover {
		opacity: 0.6;
		transition: 0.2s ease;
		.post-title {
			color: #fb673e;
			padding-left: 28px;
			&:before {
				opacity: 1;
				color: #fb673e;
			}
		}

		.post-image {
			transition: 0.2s ease;
			width: 105%;
			height: 105%;
		}
	}
`;

const PostCard = () => {
	return (
		<PostCardWrapper>
			<div className="post-copy">
				<div className="post-image">
					<img src="https://velog.velcdn.com/images/adultlee/post/8f66e8c2-132a-48e4-adc4-8398607dba89/image.png"></img>
				</div>
				<p className="post-title">
					글
					제목djasflkasjdf;lkjasdf;ljkasdfl;jkasd;lfjkasl;djfsadkmlnsa;dlflas;fdjasfl;kj
				</p>
				<p className="post-desc">
					글의 요약sadjfo aposdiutpoashd topashit poasdhi opashidt
					opasdhi opahsid lkajs l;kzjx cl;kjzx l;ja dsflkj
					asdofhiapeoth글의 요약sadjfo aposdiutpoashd topashit poasdhi
					opashidt opasdhi opahsid lkajs l;kzjx cl;kjzx l;ja dsflkj
					asdofhiapeoth글의 요약sadjfo aposdiutpoashd topashit poasdhi
					opashidt opasdhi opahsid lkajs l;kzjx cl;kjzx l;ja dsflkj
					asdofhiapeoth
				</p>
			</div>
		</PostCardWrapper>
	);
};

export default PostCard;
