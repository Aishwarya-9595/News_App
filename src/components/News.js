//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner2 from './Spinner2'
import PropTypes from 'prop-types'

export class News extends Component {
  //static variables in react 

  static defaultProps = {
    country:"in",
    pageSize:8,
    category:'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

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
  //backticks are used so that we can use it as variable
  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=55440c00dd54481eae1f7996c7464b7d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
    loading: false});
  }

  handlePrevClick = async ()=>{
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=55440c00dd54481eae1f7996c7464b7d&page=${this.state.page - 1}
    &pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
  }

  handleNextClick = async ()=>{
      console.log("next");
      
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
            //if greater than total number of pages

          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=55440c00dd54481eae1f7996c7464b7d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data = await fetch(url);
          let parsedData = await data.json();
          
          console.log(parsedData);
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: true
          })
    }
  }

  render() {
   
    return (
      <div className='container my-3'>
      <h1 className='text-center' style={{margin: '35px 0px'}}> NewsMonkey - Top Headlines </h1>
      {this.state.loading && <Spinner2 />}
            <div className='row'>
            {this.state.loading && this.state.articles.map ((element)=>{
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,110):""} 
                          description={element.description ? element.description:""} imageUrl={element.urlToImage} 
                          newsUrl={element.url}/>
              </div>
            })}
        </div>
        <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
              <button disabled={this.setState.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
