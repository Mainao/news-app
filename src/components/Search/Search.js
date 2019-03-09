import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
	state = {
		sources: []
	}

	componentDidMount() {
	    axios.get(`https://newsapi.org/v2/sources?apiKey=a73c4f2574594e7e8e1130432a30ece2`)
	      	.then(res => {
		        const sources = res.data.sources;
		        this.setState({ sources });
	    	}
	    )
	}


	handleChange = event => {
		this.props.onFilter(event.target.value);
	};

	render() {
		return (
			<div className="form-group col-md-4">
		      	<select className="form-control" value="{this.state.value}" onChange={this.handleChange}>
		      		<option value="">All</option>
		      		{ this.state.sources.map((source,i) => (
						<option key={i} value={source.id}>{source.name}</option>
					)) }
		      	</select>
		    </div>
		);
	}
}

export default Search;