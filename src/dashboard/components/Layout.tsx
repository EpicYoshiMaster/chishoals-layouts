import styled from "styled-components";

export const InputSection = styled.div`
	padding: 10px 20px;
	width: 100%;

	display: grid;
	grid-template-columns: max-content 1fr;	
`;

export const InputRow = styled.div`
	display: contents;

	& input, textarea, select {
		height: 2rem;
		font-size: 1rem;
	}
`;

export const InputSubheader = styled.div`
    grid-column: 1 / -1;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.75rem 0;
`

export const InputLabel = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 0.5rem;
	font-weight: 700;
	line-height: 2;
`

export const InputButton = styled.button`
	margin: 10px;
	padding: 10px 50px;
	font-size: 1.5rem;
	font-weight: bold;
	border: none;
	border-radius: 0.5rem;
	color: #ffffff;
	background-color: #d346fe; //#9746fe

	&:not(:disabled):hover {
		background-color: #5f2573;
	}

	&:not(:disabled):active {
		background-color: #4c1d5c;
	}

	&:disabled {
		opacity: 0.5;
	}
`;

export const InputButtonSmall = styled(InputButton)`
    font-size: 1.25rem;
    padding: 5px 25px;
`;