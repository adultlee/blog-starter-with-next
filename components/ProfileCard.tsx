import styled from "@emotion/styled";

const ProfileCardContainer = styled.div`
	width: 60%;
	border: 1px solid #ccc;
	background-color: white;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10%;
	border: 2px solid black;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease-out;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 15px;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
`;

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-bottom: 10px;

	@media (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

const ProfileName = styled.h2`
	font-size: 1.5rem;
	margin: 0;
`;

const ProfileDescription = styled.p`
	margin: 10px 0;
`;

interface ProfileCardProps {
	imageSrc: string;
	name: string;
	description: string;
}

function ProfileCard({ imageSrc, name, description }: ProfileCardProps) {
	return (
		<ProfileCardContainer>
			<ProfileImage src={imageSrc} alt={name} />
			<ProfileName>{name}</ProfileName>
			<ProfileDescription>{description}</ProfileDescription>
		</ProfileCardContainer>
	);
}

export default ProfileCard;
