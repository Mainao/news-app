import React, { Component } from 'react';
import './App.css';
import NewsLists from './components/NewsList/NewsLists';
import Search from './components/Search/Search';
import axios from 'axios';

class App extends Component {
    state = {
        filter: '',
        headlines: []
    }

    componentDidMount() {
        const apiKey = "a73c4f2574594e7e8e1130432a30ece2";
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
            .then(res => {
                const headlines = res.data.articles;
                this.setState({ headlines });
            }
        )
    }

    handleFilter = sourceId => {
        this.setState( {filter: sourceId } )
    };
    
    render() {
        const { filter, headlines } = this.state;
        let filteredHeadlines = headlines.filter(h => {
            if(filter === '')
                return -1;
            else
                return h.source.id === filter;
        });
        return (
            <div>
                <nav className="navbar navbar-light NavWhiteSh">
                    <a href="https://mainao.github.io/" className="navbar-brand">
                        <h4>News</h4>
                    </a>
                    <form className="form-inline my-2 my-lg-0">
                        <Search onFilter={this.handleFilter} />
                    </form>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            { filteredHeadlines.map((headline,i) => (
                                <NewsLists key={i} headline={headline} />
                            )) }
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;