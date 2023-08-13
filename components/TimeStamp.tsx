import styled from "@emotion/styled";

const TimestampSectionWrapper = styled.div`
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

			&::before {
				position: relative;
				left: -1px;
				content: "";
				align-self: center;
				width: 10px;
				height: 10px;
				border-radius: 10px;
				transform: translatex(-50%);
				border: 2px solid #828282;
			}

			.date {
				margin-left: 5px;
				margin-right: 5px;
				width: 115px;
				min-width: 115px;
				color: #828282;
				align-self: center;
			}

			.activity {
				line-height: 23px;
				width: 100%;
			}
		}
	}
`;

const TimestampDate = styled.div`
	margin-left: 5px;
	margin-right: 5px;
	width: 120px;
	min-width: 120px;
	color: #828282;
	align-self: center;
	@media (min-width: 768px) {
		width: 220px;
		min-width: 220px;
	}
`;

const TimestampActivity = styled.div`
	line-height: 23px;
	width: 100%;
`;

interface TimestampProps {
	date: string;
	activity: string;
	links?: string[];
}

function Timestamp({ date, activity, links }: TimestampProps) {
	return (
		<div className="timestamp">
			<TimestampDate>{date}</TimestampDate>
			<TimestampActivity>{activity}&nbsp;</TimestampActivity>
		</div>
	);
}

interface TimeStampSectionProps {
	timestamps: { date: string; activity: string; links?: string[] }[];
}

function TimeStampSection({ timestamps }: TimeStampSectionProps) {
	if (!timestamps || timestamps.length < 2) return null;

	return (
		<TimestampSectionWrapper>
			<h1 className="header">TimeStamp</h1>
			<div className="body">
				{timestamps.map((timestamp, index) => (
					<Timestamp
						key={index}
						date={timestamp.date}
						activity={timestamp.activity}
						links={timestamp.links}
					/>
				))}
			</div>
		</TimestampSectionWrapper>
	);
}

export default TimeStampSection;
