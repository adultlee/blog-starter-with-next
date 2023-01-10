import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";

const PostCardWrapper = styled.div`
	padding: 8px 0;
	margin: 12px 0;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: 0.2s ease;
	border: 1px solid white;
	.post-copy {
		padding-right: 24px;
	}

	.post-title {
		display: inline-block;
		position: relative;
		font-size: 24px;
		transition: 0.2s ease;
		&:before {
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			width: 8px;
			height: 8px;
			border-right: 2px solid #fb673e;
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
		line-height: 1.57;
		opacity: 0.5;
	}
	.post-image {
		min-width: 160px;
		width: 160px;
		height: 90px;
		border-radius: 4px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}

	&:hover {
		opacity: 0.6;

		.post-title {
			color: #fb673e;
			padding-left: 28px;
			&:before {
				opacity: 1;
				color: #fb673e;
			}
		}
	}
`;

const PostCard = () => {
	return (
		<PostCardWrapper>
			<div className="post-copy">
				<p className="post-title">글 제목</p>
				<p className="post-desc">글의 요약</p>
			</div>
		</PostCardWrapper>
	);
};

export default PostCard;
