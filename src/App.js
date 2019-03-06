import React from 'react';
import styled from 'styled-components';
import { Wrapper, Title, Content, Panel, Panel_Group, Panel_Heading, Panel_Collapse, Panel_Body } from './Wrapper';
import Collapsible from './Collapsible';

//---- out put like this <Heading/ or <Heading></Heading>----

 class HelloWorld extends React.Component {
	render() {
		return (
			<div>
			<Wrapper>
				<Title>Collapsible React</Title>
				
			</Wrapper>
				<Content>
					<Panel_Group>
						<Collapsible title="Overview">
							<p>Anim partiatur cliche reprehenderit, enim eiusmod high life
							Anim partiatur cliche reprehenderit.</p>
						</Collapsible>
						<Collapsible title="Features">
							<p>Fugiat ut est commodo mollit cillum reprehenderit dolor officia est et cupidatat ex.</p>
						</Collapsible>
						<Collapsible title="Software">
							<p>In in cupidatat sunt est laboris quis ea ut do duis. 
							Lorem ipsum veniam adipisicing amet ullamco elit ut ut dolor dolore 
							excepteur. Lorem ipsum do sit excepteur ea irure elit in nulla 
							sint ut nisi excepteur esse.</p>
						</Collapsible>
					</Panel_Group>
				</Content>
			</div>
		);
	}
}

export default HelloWorld;