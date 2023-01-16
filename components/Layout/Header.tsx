import Link from "next/link";
import styled from "@emotion/styled";
import Text from "../Text";

export const TopBarContainer = styled.header`
	position: sticky;
	height: 46px;
	width: 100%;
	backdrop-filter: saturate(180%) blur(20px);
	background-color: #0f0317;

	.container {
		width: 100%;
		max-width: 1140px;
		margin: 0 auto;
		padding: 0 22px;
	}
`;

const HeaderText = styled(Text)`
	line-height: 46px;
`;

const Header = () => {
	return (
		<TopBarContainer>
			<div className="container">
				<Link href="/">
					<HeaderText color="white" size={20} weight={600}>
						Blog
					</HeaderText>
				</Link>
			</div>
		</TopBarContainer>
	);
};

export default Header;
