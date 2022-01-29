//With buttons
// import React, { Component } from 'react'
// import Newsitems from './Newsitems'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'

// export class News extends Component {
//     static defaultProps ={
//         country :'in',
//         pageSize : 8,
//         category : 'general'
//     }
//     static propTypes ={
//        country : PropTypes.string,
//        pageSize : PropTypes.number,
//        category : PropTypes.string,
//     }
//     constructor() {
//         super();
//         console.log("hello");
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1
//         }
//     }

//     async componentDidMount() {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcbfdec7b62e4130884ca732bee24794&page=1&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults , loading:false })
//     }
//     handleBackclick = async () => {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcbfdec7b62e4130884ca732bee24794&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             page:this.state.page - 1,
//             articles: parsedData.articles,
//             loading:false
//         })
//     }
//     handleNextclick = async () => {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcbfdec7b62e4130884ca732bee24794&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             page:this.state.page + 1,
//             articles: parsedData.articles,
//             loading:false
//         })
        
//     }

//     render() {
//         return (
//             <div className="container my-3">
//                 <h2 className="text-center" style={{margin: '35px 0px'}}>Newapp-Top Headlines</h2>
//                  {this.state.loading && <Spinner/>}

//                 <div className="row">
//                     {!this.state.loading && this.state.articles.map((element) => {
//                         return <div className="col-md-4" key={element.url} >
//                             <Newsitems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
//                         </div>
//                     })}
//                 </div><br/>
//                 <div className="contaier d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleBackclick}>&larr; Previous</button>
//                     <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News