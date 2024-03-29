import Link from "next/link";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const HeaderBox = styled.header`
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: black;
	z-index: 9999;
	box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(30px);
	font-weight: 300;
	color: #fff;
	transition: all 0.3s;

	&.hide {
		top: -60px;
		box-shadow: none;
	}

	&.top {
		box-shadow: none;
	}

	.header-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 900px;
		height: 100%;
		position: relative;
		margin: 0 auto;
		overflow: hidden;
	}

	.header-links a {
		margin-right: 30px;
		font-size: 20px;
		color: #fff;
		transition: color 0.3s;
	}

	.header-links a:hover {
		color: #acacac;
	}

	.header-links .main-link {
		font-size: 32px;
		margin-right: 30px;
	}

	@media (max-width: 900px) {
		.header-wrapper {
			padding: 0 20px;
		}

		.header-links a {
			font-size: 16px;
			margin-right: 10px;
			transition: transform 0.3s;
		}

		.header-links .main-link {
			font-size: 24px;
			margin-right: 15px;
		}
	}
`;

const Header = () => {
	const [position, setPosition] = useState<number>(0);
	const [visible, setVisible] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			const moving = window.pageYOffset;
			setVisible(position > moving);
			setPosition(moving);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [position]);

	return (
		<HeaderBox
			className={`${visible ? "" : "hide"}${position === 0 ? "top" : ""}`}
		>
			<div className="header-wrapper">
				<div className="header-links">
					<Link href={"/"} className="main-link">
						TeamBlog
					</Link>
					<Link href={"/blog"} className="about">
						blog
					</Link>
				</div>
			</div>
		</HeaderBox>
	);
};

export default Header;
