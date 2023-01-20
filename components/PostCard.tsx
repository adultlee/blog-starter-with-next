import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Text from "./Text";
import TeamMembersMetaData from "../data/teamMembers";
import { useState, useEffect } from "react";

const PostCardWrapper = styled.div`
	margin: 12px 0;
	width: 300px;
	min-height: 330px;
	background-color: #170524;

	@media (max-width: 750px) {
		width: 100%;
		min-height: 330px;
	}

	position: relative;
	transition: 0.2s ease;
	overflow: hidden;
	cursor: pointer;

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
		border-top: 3px solid #e0bcff;
		border-bottom: 3px solid #e0bcff;
	}

	&::after {
		transform: scale3d(1, 0, 1);
		transform-origin: right top;
		border-right: 3px solid #e0bcff;
		border-left: 3px solid #e0bcff;
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
	author: string;
	publishedAt: string;
};

type ImageType = {
	src?: string;
};

const PostImage = styled.div<ImageType>`
	width: 100%;
	height: 150px;
	overflow: hidden;
	background-size: cover;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
`;

const PostTitle = styled.div`
	display: inline-block;
	position: relative;
	font-size: 24px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #e0bcff;
	margin: 5px;
`;

const PostDescripption = styled.div`
	color: #e0bcff;
	font-size: 18px;
	margin-top: 5px;
	line-height: 1.57;
	opacity: 0.5;
	width: auto;
	display: inline-block;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	line-height: 1.2;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	margin: 0px 5px;
`;

const PostFootterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 15px 5px;
`;

const PostProfileWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

const PostProfileImage = styled.div<ImageType>`
	border-radius: 50%;
	width: 25px;
	height: 25px;
	display: flex;
	margin-right: 10px;
	border: 1px solid rgb(163, 151, 198);
	background-size: cover;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
`;

const PostProfileText = styled(Text)``;

const PostDateText = styled(Text)`
	margin-right: 15px;
`;

const PostCard = ({
	title,
	description,
	thumbnail,
	slug,
	author,
	publishedAt,
}: PostCardProps) => {
	const router = useRouter();
	const [profileThumbnail, setProfileThumbnail] = useState<
		string | undefined
	>("");

	useEffect(() => {
		for (let data of TeamMembersMetaData) {
			if (data.name === author) {
				setProfileThumbnail(data.thumbnail);
				return;
			}
		}
	}, [author]);

	const handleClick = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		router.push(`/blog/${slug}`);
	};

	return (
		<PostCardWrapper onClick={handleClick}>
			<PostImage className="post-image" src={thumbnail} />
			<PostTitle className="post-title">{title}</PostTitle>
			<PostDescripption className="post-desc">
				{description}
			</PostDescripption>
			<PostFootterWrapper>
				<PostProfileWrapper>
					<PostProfileImage src={profileThumbnail} />
					<PostProfileText color="#f9f1ff" size={16} weight={400}>
						{author}
					</PostProfileText>
				</PostProfileWrapper>
				<PostDateText color="#f9f1ff" size={16} weight={400}>
					{publishedAt}
				</PostDateText>
			</PostFootterWrapper>
		</PostCardWrapper>
	);
};

export default PostCard;
