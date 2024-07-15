import React, { useCallback } from "react";
import styled from "styled-components";
import { CommentatorInfo } from "../../types/schemas";
import { InputLabel, InputRow } from '../components/Layout';

interface CommentatorProps {
	comm: CommentatorInfo;
	setCommentator: React.Dispatch<React.SetStateAction<CommentatorInfo>>;
}

export const Commentator: React.FC<CommentatorProps> = ({ comm, setCommentator }) => {

	const setName = useCallback((name: string) => {
		setCommentator((oldComm) => { return { ...oldComm, name: name }} );
	}, []);

	const setPronouns = useCallback((pronouns: string) => {
		setCommentator((oldComm) => { return { ...oldComm, pronouns: pronouns }} );
	}, []);

	const setTag = useCallback((tag: string) => {
		setCommentator((oldComm) => { return { ...oldComm, tag: tag }} );
	}, []);

	return (
		<Container>
			<InputRow>
				<InputLabel>Name</InputLabel>
				<input type="text" value={comm.name || ""} onChange={(event) => { setName(event.target.value); }} />
			</InputRow>
			<InputRow>
				<InputLabel>Pronouns (opt.)</InputLabel>
				<input type="text" value={comm.pronouns || ""} onChange={(event) => { setPronouns(event.target.value); }}/>
			</InputRow>
			<InputRow>
				<InputLabel>Tag (opt.)</InputLabel>
				<input type="text" value={comm.tag || ""} onChange={(event) => { setTag(event.target.value); }}/>
			</InputRow>
		</Container>
	);
}

const Container = styled.div`
    display: contents;
`