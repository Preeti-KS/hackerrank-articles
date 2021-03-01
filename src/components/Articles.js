import React from 'react';

/**
 *
 * @param {{articles: {title: string, upvotes: number, date: string}[] }} props
 */
function Articles(props) {
    // console.log('props', props)
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {props.articles?.map((value, index) => {
                    return <tr data-testid="article" key={"article-index-" + index}>
                    <td data-testid="article-title">{value.title}</td>
                    <td data-testid="article-upvotes">{value.upvotes}</td>
                    <td data-testid="article-date">{value.date}</td>
                </tr>
                })}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
