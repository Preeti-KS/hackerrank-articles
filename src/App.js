import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

/**
 *
 * @param {{articles: {title: string, upvotes: number, date: string}[] }} props
 */
function App({articles}) {
    // console.log('app article', articles)
    const [dArticles, setArticles] = useState(articles.sort(function(a, b){
        return b.upvotes - a.upvotes;
    }))

    function mostUpvotedClick() {
        // console.log('articles', articles)
        setArticles(articles.sort(function(a, b){
            return b.upvotes - a.upvotes;
        }).concat([]))
    }

    function mostRecentClick() {
        setArticles(articles.sort(function(a, b){
            return new Date(b.date) - new Date(a.date);
        }).concat([]))
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={mostUpvotedClick}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={mostRecentClick}>Most Recent</button>
            </div>
            <Articles articles={dArticles}/>
        </div>
    );

}

export default App;
