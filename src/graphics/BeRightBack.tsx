import React from 'react';
import { createRoot } from 'react-dom/client';
import { BreakScreen } from './components/BreakScreen';
import styled from 'styled-components';

export function BeRightBack() {

	return (
		<Wrapper>
			<BreakScreen message="We'll be right back!" />
		</Wrapper>
	);
}

const Wrapper = styled.div``;

const root = createRoot(document.getElementById('root')!);
root.render(<BeRightBack />);