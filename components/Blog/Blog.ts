import styled from "@emotion/styled";

export const BlogContainer = styled.div`
	position: relative;
	width: 100%;
	font-size: 16px;
	line-height: 1.8;
	font-weight: 400;

	* {
		color: #f9f1ff;
	}

	a {
		color: #aba8ff;
		transition: color 0.2s ease;
		&:hover {
			color: #289aff;
			text-decoration: underline;
		}
	}

	h1 {
		font-size: 28px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	h2 {
		font-size: 26px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	h3 {
		font-size: 22px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	h4 {
		font-size: 18px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	h5 {
		font-size: 17px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	h6 {
		font-size: 16px;
		font-weight: 500;
		margin: 30px 0 0;
		color: #e0bcff;
	}

	strong {
		font-weight: 600;
		color: #e0bcff;
	}

	p {
		margin: 0.7em 0;
	}

	pre {
		padding: 10px 16px;
		width: 100%;
		font-size: 17px;
		font-weight: 500;
		border-radius: 5px;
		background-color: black;
		font-size: 15px;

		code {
			padding: 0.25rem 0.5rem;
			margin: 0;
			font-size: 0.85em;
			border-radius: 3px;
		}
		overflow-x: scroll;
		border: 2px solid #e0bcff;
	}

	blockquote {
		margin: 0.5rem 0;
		padding: 0.5rem 1rem;
		position: relative;
		border-left: 4px solid #e0bcff;

		& p {
			display: inline;
			color: #8a929b;
		}
	}

	ul {
		margin: 0;
		padding-left: 20px;
		margin: 1rem 0;
		li {
			list-style: disc;
		}
	}

	ol {
		margin: 0;
		padding-left: 20px;
		margin: 1rem 0;
		li {
			list-style: decimal;
		}
	}

	table {
		margin: 1em 0;
		border-collapse: collapse;
		width: auto;
	}

	thead th {
		border-bottom: 2px solid #e0bcff;
	}

	td {
		padding: 0.5rem 1.2rem;
		border: 1px solid #e0bcff;
	}

	th {
		padding: 0.5rem 1.2rem;
		font-weight: 500;
		border: 1px solid #e0bcff;
	}

	sup a {
		font-size: 12px;
	}

	img {
		max-width: 100%;
	}
`;

export const BlogTitle = styled.h1`
	font-size: 30px;
	word-break: keep-all;
`;

export const BlogContent = styled.div`
	margin-top: 36px;
`;
