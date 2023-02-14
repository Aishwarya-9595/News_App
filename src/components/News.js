//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
  constructor(){
    super();
    console.log("Hello I am a Programmer from news component");
    this.state =  {
      articles : [],
      loading: false,
      page:1
    }
  }

  //it will run after render
  //constructor, render, componentDidMount
  //async can wait for fetch to resolve
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=55440c00dd54481eae1f7996c7464b7d";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
  }

  handleNextClick = async ()=>{
      console.log("next");
      
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
            //if greater than total number of pages
      }
      else{
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=busin
              ess&apiKey=55440c00dd54481eae1f7996c7464b7d&page=${this.state.page + 1}&pageSize=20`;
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
          })
    }
  }

  handlePrevClick = async ()=>{
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=55440c00dd54481eae1f7996c7464b7d&page-${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
  }
  render() {
   
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines </h2>

            <div className='row'>
            {this.state.articles.map ((element)=>{
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,110):""} 
                          description={element.description ? element.description:""} imageUrl={element.urlToImage} 
                          newsUrl={element.url}/>
              </div>
            })}
        </div>
        <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
