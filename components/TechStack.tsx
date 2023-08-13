import styled from "@emotion/styled";

const TechStackWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	justify-content: center;
	width: 100%;
	margin-bottom: 50px;
	padding: 0px 40px;
	word-break: keep-all;
	box-sizing: border-box;
	.header {
		width: 100%;
		font-size: 28px;
		font-weight: 600;
	}
	.body {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		.timestamp {
			display: flex;
			justify-items: center;
			width: 100%;
			margin-left: 5px;
			padding: 10px 0;
			font-size: 18px;
			font-weight: 400;
		}
	}
`;

const TechBadge = styled.span`
	padding: 5px 10px;
	margin: 5px;
	border-radius: 16px;
	background-color: black;
	color: white;
	font-size: 1rem;
	font-weight: 400;
`;

const TechStackType = styled.div`
	margin-left: 5px;
	margin-right: 5px;
	width: 120px;
	min-width: 120px;
	color: #828282;
	align-self: center;
	font-size: 1.5rem;
	font-weight: 700;
	@media (min-width: 768px) {
		width: 200px;
		min-width: 200px;
	}
`;

const TechStacList = styled.div`
	line-height: 23px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

interface StackProps {
	type: string;
	stack?: string[];
}

function Stack({ type, stack }: StackProps) {
	return (
		<div className="timestamp">
			<TechStackType>{type}</TechStackType>
			<TechStacList>
				{stack?.map((stack, index) => (
					<TechBadge key={index}>{stack}</TechBadge>
				))}
			</TechStacList>
		</div>
	);
}

interface TechStackProps {
	stackList: { type: string; stack: string[] }[];
}

function TechStack({ stackList }: TechStackProps) {
	if (!stackList || stackList.length < 2) return null;

	return (
		<TechStackWrapper>
			<h1 className="header">Tech Stack</h1>
			<div className="body">
				{stackList.map((stackList, index) => (
					<Stack key={index} type={stackList.type} stack={stackList.stack} />
				))}
			</div>
		</TechStackWrapper>
	);
}

export default TechStack;
