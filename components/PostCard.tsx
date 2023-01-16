import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PostCardWrapper = styled.div`
	margin: 12px 0;
	width: 300px;
	min-height: 300px;
	background-color: #170524;
	@media (max-width: 750px) {
		width: 100%;
		min-height: 330px;
	}

	position: relative;
	transition: 0.2s ease;
	overflow: hidden;

	.post-title {
		display: inline-block;
		position: relative;
		font-size: 24px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #e0bcff;
	}
	.post-desc {
		color: #e0bcff;
		font-size: 18px;
		margin-top: 5px;
		line-height: 1.57;
		opacity: 0.5;
		width: auto;

		/* 한 줄 자르기 */
		display: inline-block;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		// 여러 줄 자르기 추가 스타일
		white-space: normal;
		line-height: 1.2;

		text-align: left;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
	}

	.post-image {
		width: 100%;
		height: 150px;
		overflow: hidden;
		background-color: white;
		img {
			width: 100%;
			height: 100%;
		}
	}

	&:hover {
		transform: scale(1.1);
		opacity: 0.6;
		transition: 0.2s ease;

		.post-image {
			transition: 0.3s ease;
		}
	}

	&::before,
	&::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: opacity 0.38s ease-in-out, transform 0.35s ease-in-out;
		content: "";
		opacity: 0;
		pointer-events: none;
	}

	&::before {
		transform: scale3d(0, 1, 1);
		transform-origin: left top;
		border-top: 2px solid #e0bcff;
		border-bottom: 2px solid #e0bcff;
	}

	&::after {
		transform: scale3d(1, 0, 1);
		transform-origin: right top;
		border-right: 2px solid #e0bcff;
		border-left: 2px solid #e0bcff;
	}

	&:hover,
	&:focus {
		&::before,
		&::after {
			transform: scale3d(1, 1, 1);
			opacity: 1;
		}
	}
`;

type PostCardProps = {
	title: string;
	description: string;
	thumbnail: string;
	slug: string;
};

const PostCard = ({ title, description, thumbnail, slug }: PostCardProps) => {
	const router = useRouter();

	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		router.push(`/blog/${slug}`);
	};
	return (
		<PostCardWrapper onClick={handleClick}>
			<div className="post-image">
				<img src={thumbnail} />
			</div>
			<div className="post-title">{title}</div>
			<div className="post-desc">{description}</div>
		</PostCardWrapper>
	);
};

//https://velog.velcdn.com/images/adultlee/post/94c4031f-432d-462b-b91f-181efee2c0df/image.png

export default PostCard;
