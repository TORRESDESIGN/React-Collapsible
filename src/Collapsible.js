import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Content, Panel, Panel_Group, Panel_Heading, Panel_Collapse, Panel_Body } from './Wrapper';

class Collapsible extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isExpanded: false
		}
	}

	handleToggle(e){
		e.preventDefault();
		console.log();
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}

	render(){
		const {title, children} = this.props;
		
		return (
			<Panel onClick={(e) => this.handleToggle(e)}>
				<Panel_Heading>
					<h2>{title}</h2>
				</Panel_Heading>
					<Panel_Collapse isExpanded={this.state.isExpanded} height={this.state.height}>
						<Panel_Body ref="inner">
							{children}
						</Panel_Body>
					</Panel_Collapse>
			</Panel>
		)
	}
}

Collapsible.propTypes = {
	title: PropTypes.string,
};

export default Collapsible;