import styled from 'styled-components';

export const Container = styled.header`
	background-color: var(--blue);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 12rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.25rem;

	figure {
		width: 15.43%;

		img {
			width: 100%;
			height: auto;
		}
	}

	button {
		height: 3rem;
		padding: 0px 2rem;
		border: none;
		border-radius: 0.25rem;

		font-size: 1rem;
		line-height: 1.5rem;
		color: var(--white);
		background-color: var(--blue-light);

		transition: filter 200ms linear;

		&:hover {
			filter: brightness(0.9);
		}
	}
	@media screen and (max-width: 490px) {
		figure {
			width: 41.3%;
			min-width: 67.5px;
		}
	}

	@media screen and (min-width: 2500px) {
		width: 67.2%; // 1680
		max-width: none;

		figure {
			width: 10.3%;

			img {
				width: 100%;
				height: auto;
			}
		}

		button {
			font-size: 2rem;

			height: 4.5rem;
		}
	}
`;
