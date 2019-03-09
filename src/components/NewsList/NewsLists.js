import React from 'react';
import './NewsList.css';

const NewsLists = (props) => {
	return (
        <div>
            <div className="card mt-4">
                <div className="card-body CardItem">
                    <img src="https://c.ndtvimg.com/akhilesh-mayawati_625x300_1527085363041.jpg" alt="..." />
                    <div className="Padder">
                        <div>{props.headline.title}</div> 
                        <small className="text-muted">{props.headline.source.id} | <span>{props.headline.publishedAt}</span></small>
                    </div>
                </div>
            </div>
        </div>
		
	)
}

export default NewsLists;