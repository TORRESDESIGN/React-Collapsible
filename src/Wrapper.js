import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
	background: #BDBDBD;
	width: 100%;
	height: 100px;
`;

const Title = styled.h1`
	padding-top: 30px;
	text-align: center;
	color: #5E35B1;
`;

const Content = styled.div`
	margin: 0 auto;
	width: 500px;
	height: 200px;
	color: black;
`;

const Panel_Group = styled.div`
	border-radius: 2px;
	border: 3px solid #5E35B1;
`;

const Panel = styled.div`
	background: #BDBDBD;
	padding: 10px 10px;
`;

const Panel_Heading = styled.div`
	padding: 5px;
	cursor: pointer;
`;

const currentHeight = props => props.isExpanded ? props.height : 0;
const Panel_Collapse = styled.div`
	background: white;
	border-top: 1px solid #5E35B1;
	overflow: hidden;
	height: ${currentHeight}px;
	transition: height 0.3s ease-out;
`;

const Panel_Body = styled.div`
	background: white;
	border: none !important;
	{/* display: ${props => (props.isExpanded ? 'block' : 'none')}; */}
	
`;


export {
	Wrapper,
	Title,
	Content,
	Panel_Group,
	Panel,
	Panel_Heading,
	Panel_Collapse,
	Panel_Body,
}