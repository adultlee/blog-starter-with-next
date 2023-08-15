import React, { useState, ReactNode, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const CarouselWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.header {
		padding-left: 40px;
		width: 100%;
		font-size: 28px;
		font-weight: 600;
	}
`;
const CarouselContainer = styled.div`
	position: relative;
	width: 50%;
	height: 300px;
	box-sizing: border-box;
	perspective: 500px;
	transform-style: preserve-3d;
	.nav {
		color: black;
		font-size: 5rem;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		z-index: 2;
		cursor: pointer;
		user-select: none;
		background: unset;
		border: unset;

		&.left {
			transform: translateX(-100%) translatey(-50%);
		}

		&.right {
			right: 0;
			transform: translateX(100%) translatey(-50%);
		}

		@media (max-width: 768px) {
			display: none;
		}
	}
`;

interface CardContainerProps {
	offset: number;
	direction: number;
	absOffset: number;
	pointerEvents: string;
	opacity: number;
	display: string;
}

const CardContainer = styled.div<CardContainerProps>`
	position: absolute;
	width: 100%;
	box-sizing: border-box;
	transform: scaleY(calc(1 + ${(props) => props.absOffset} * -0.5))
		translateZ(calc(${(props) => props.absOffset} * -20rem))
		translateX(calc(${(props) => props.direction} * -5rem));
	filter: blur(calc(${(props) => props.absOffset} * 1rem));
	transition: all 0.3s ease-out;
	pointer-events: ${(props) => props.pointerEvents};
	opacity: ${(props) => props.opacity};
	display: ${(props) => props.display};
`;

interface CarouselProps {
	children: ReactNode[];
	maxVisibility?: number;
}

function Carousel({ children, maxVisibility = 3 }: CarouselProps) {
	const count = React.Children.count(children);
	const [active, setActive] = useState(0);
	const [touchStartX, setTouchStartX] = useState(0);
	const [touchEndX, setTouchEndX] = useState(0);
	const containerRef = useRef(null);

	const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
		setTouchStartX(event.touches[0].clientX);
	};

	const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (event) => {
		setTouchEndX(event.touches[0].clientX);
	};

	const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
		const touchDiff = touchStartX - touchEndX;

		if (touchDiff > 50) {
			setActive((prevIndex) => (prevIndex === 0 ? count - 1 : prevIndex - 1));
		} else if (touchDiff < -50) {
			setActive((prevIndex) => (prevIndex === count - 1 ? 0 : prevIndex + 1));
		}

		setTouchStartX(0);
		setTouchEndX(0);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prevIndex) => (prevIndex === count - 1 ? 0 : prevIndex + 1));
		}, 2000); // 5초마다 슬라이드 변경

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<CarouselWrapper
			ref={containerRef}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<h1 className="header">Member List</h1>
			<CarouselContainer className="carousel">
				{active > 0 && (
					<button className="nav left" onClick={() => setActive((i) => i - 1)}>
						&lt;
					</button>
				)}
				{React.Children.map(children, (child, i) => {
					const offset = (active - i) / 3;
					const direction = active - i;
					const absOffset = Math.abs(active - i) / 3;
					const pointerEvents = active === i ? "auto" : "none";
					const opacity = Math.abs(active - i) >= maxVisibility ? 0 : 1;
					const display =
						Math.abs(active - i) > maxVisibility ? "none" : "block";

					return (
						<CardContainer
							className="card-container"
							key={i}
							offset={offset}
							direction={direction}
							absOffset={absOffset}
							pointerEvents={pointerEvents}
							opacity={opacity}
							display={display}
						>
							{child}
						</CardContainer>
					);
				})}
				{active < count - 1 && (
					<button className="nav right" onClick={() => setActive((i) => i + 1)}>
						&gt;
					</button>
				)}
			</CarouselContainer>
		</CarouselWrapper>
	);
}

export default Carousel;
