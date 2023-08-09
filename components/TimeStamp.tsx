import styled from "@emotion/styled";

const TimestampSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	margin-bottom: 50px;
	word-break: keep-all;

	.body {
		width: 100%;
		padding: 0 10px;

		.timestamp {
			display: flex;
			justify-items: center;

			width: 100%;
			margin-left: 5px;
			padding: 10px 0;
			border-left: 2px solid #bdbdbd;

			font-size: 18px;
			font-weight: 400;

			&:first-child {
				padding-top: 7px;
			}

			&:last-child {
				padding-bottom: 7px;
			}

			&::before {
				position: relative;
				left: -1px;
				content: "";
				align-self: center;
				width: 10px;
				height: 10px;
				background-color: var(--background-color);
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

				@media (min-width: 768px) {
					width: 200px;
					min-width: 200px;
				}
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
	width: 115px;
	min-width: 115px;
	color: #828282;
	align-self: center;

	@media (min-width: 768px) {
		width: 200px;
		min-width: 200px;
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
			<div className="body">
				{timestamps.map((timestamp, index) =>
					index === 0 ? null : (
						<Timestamp
							key={index}
							date={timestamp.date}
							activity={timestamp.activity}
							links={timestamp.links}
						/>
					)
				)}
			</div>
		</TimestampSectionWrapper>
	);
}

export default TimeStampSection;
