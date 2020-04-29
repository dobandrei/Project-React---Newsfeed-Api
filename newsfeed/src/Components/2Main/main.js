import React, { Component } from 'react';
import './main.css';

import TopStory from './1TopStory/topStory';

import News from './2News/news';


class Main extends Component  {
  constructor (props){
    super(props)
    this.state = {
      loading: false,
      news: []
    }
  }

componentDidMount() {
  this.setState({loading:true})

  fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=59bd456150dc4b619e5595414eba1589')
  .then(response => response.json())
  .then(data => {
    this.setState ({
      news : data.articles,
      loading: false
    })
  })
}



  render () {
    
    const text = this.state.loading ? "Loading ..." : 
    <div>

      <div  className='topNewsContainer'>
        {this.state.news.filter((x,index) => index == 0).map(x => <TopStory data = {x}/>)} 
      </div>

      <div className='newsContainer'>
      {this.state.news.filter((x,index) => index > 0).map((x,index) => <News data = {x} key = {index}/>)}
      </div>

    </div>
    return (
          <div className="main">
            {text}  
          </div>
        );
 }
}

export default Main;