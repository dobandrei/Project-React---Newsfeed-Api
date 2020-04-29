import React from 'react';
import '../main.css';

function News({data}) {
  return (
    <div className="container">
        <img src ={data.urlToImage} alt = {`image ${data.title}`}/>
        <title>{data.title}</title>
        <h2>Author: {data.author}</h2>
        <span>Published date: {data.publishedAt.slice(0,10)}</span>  
        <p>{data.description}</p>
            
    </div>
  );
}

export default News;