import React from 'react';
import { createRoot } from 'react-dom/client';
import { BreakScreen } from './components/BreakScreen';
import styled from 'styled-components';

export function StartingSoon() {

	return (
		<Wrapper>
			<BreakScreen message="Starting Soon!" />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

const root = createRoot(document.getElementById('root')!);
root.render(<StartingSoon />);