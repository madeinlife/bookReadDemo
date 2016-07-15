require('normalize.css/normalize.css');
require('styles/BookList.scss');

import React from 'react';
import Loading from './Loading';
import {Link} from 'react-router';
// const REQUEST_URL = 'http://guoxuebuoluo.com/api/1.0/books/list?limit=10&offset=';
class BookList extends React.Component {
    //需要传入categories属性，必选
    constructor(props) {
        super(props);
        // console.log(this.props.categories);
        this.state = {
            categories:this.props.categories,
            responseData:[],
            loaded:false,
            nextPage:true,
            pageOffset:0,
            loading:false
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData() {
        // console.log('fetchData');
        if(this.state.loading){
            return;
        }else{
            this.setState({
                loading:true
            })
        }
        var query_url;
        // http://guoxuebuluo.com/api/1.0/books/list?category=%E5%AD%90%E9%83%A8&subcategory=%E6%9D%82%E5%AE%B6%E7%B1%BB&limit=10&offset=0
        if(this.state.categories.subcategory){
            query_url = 'http://guoxuebuluo.com/api/1.0/books/list?category=' +
                this.state.categories.category + '&subcategory=' +
                this.state.categories.subcategory + '&limit=10&offset=' +
                this.state.pageOffset * 10;
        }else{
            query_url = 'http://guoxuebuluo.com/api/1.0/books/list?category=' +
                this.state.categories.category + '&limit=10&offset=' +
                this.state.pageOffset * 10;
        }
        // console.log(query_url);
        //很多浏览器不支持fetch，故需要引入这个库：whatwg-fetch
        // import 'whatwg-fetch';
        fetch(query_url)
          .then(response => response.json())
            .then(responseData => {
                if(responseData.length < 10){
                    this.setState(
                        {nextPage:false}
                    );
                }
                responseData = this.state.responseData.concat(responseData);
                // console.log(responseData);
                this.setState({
                    responseData:responseData,
                    loaded:true,
                    loading:false,
                    pageOffset: ++this.state.pageOffset
                });
            })
              .catch(() => {
                  this.setState({
                      Loading:false
                  });
                //   console.log(err);
              })
    }
    componentWillReceiveProps(nextProps){
        // console.log('componentWillReceiveProps');
        // console.log(nextProps);
        if(nextProps.categories !== this.props.categories ){
            //由于setState是异步的，当程序运行完毕后，我们再重新加载数据；
            this.setState({
                categories:nextProps.categories,
                responseData:[],
                loaded:false,
                nextPage:true,
                pageOffset:0,
                loading:false
            },()=>{
                // console.log('当state修改完后，我们要重新加载数据');
                this.fetchData();
            });
        }
    }
    render(){
        if(this.state.loaded == false){
            return <Loading />
        }
        var isDoneView;
        if(this.state.nextPage == false){
            isDoneView = (
                <div className='more'>
                    全部加载完毕，总共{this.state.responseData.length}本书
                </div>
            );
        }else{
            isDoneView = (
                <div onClick={this.fetchData.bind(this)} className='more'>
                    {this.state.loading? '加载中......':'点击加载更多'}
                </div>
            )
        }
        var booklistViews = this.state.responseData.map((book,index) => {
            // console.log(book);
            return (
                <div key={index} className='book-item clearfix'>
                    <div className='book-img'>
                        <Link to={`/info/${book._id}`}>
                            <img src={'http://guoxuebuluo.com/img/books/' + book.image} />
                        </Link>
                    </div>
                    <div className='book-info'>
                        <div className='title'>
                            <Link to={`/info/${book._id}`}>
                                {book.title}
                            </Link>
                        </div>
                        <div className='author'>
                            作者:{book.author ? book.author.name : '佚名'}
                        </div>
                        <div className='summary'>
                            {book.summary}
                        </div>
                    </div>
                </div>
            )
        })
        return(
                <div className='booklist'>
                    {booklistViews}
                    {isDoneView}
                </div>
        );
    }
}
export default BookList;
