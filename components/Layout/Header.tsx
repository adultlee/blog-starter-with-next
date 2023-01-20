import Link from "next/link";
import styled from "@emotion/styled";
import Text from "../Text";
import { useState } from "react";

export const TopBarContainer = styled.header`
	position: sticky;
	height: 46px;
	width: 100%;
	backdrop-filter: saturate(180%) blur(20px);
	background-color: #0f0317;
	.container {
		display: flex;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
	}
`;

const HeaderContent = styled.div`
	width: 85%;
	display: flex;
	justify-content: space-between;
`;

const HeaderText = styled(Text)`
	line-height: 46px;
`;

const Header = () => {
	return (
		<TopBarContainer>
			<div className="container">
				<HeaderContent>
					<Link href="/">
						<HeaderText color="white" size={20} weight={600}>
							Blog
						</HeaderText>
					</Link>
				</HeaderContent>
			</div>
		</TopBarContainer>
	);
};

export default Header;
