'use strict';
import React from 'react';
import BookInfo from './BookInfo';
import AuthorInfo from './AuthorInfo';
import Loading from './Loading';
class BookInfoPage extends React.Component{
    //实例化的时候需要传入book属性{'_id'是必须}
    constructor(props){
        super(props);
        this.state = {
            bookid:this.props.params.bookid,
            bookinfo:null,
            loaded:false
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        var url;
        url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.params.bookid;
        fetch(url)
          .then(response => response.json())
            .then(responseData => {
                // console.log(responseData);
                this.setState({
                    bookinfo:responseData,
                    loaded:true
                });
            })
              .catch(() => {})
        // //如果book传递了summary那么，就只get 章节数据，否则get全部bookinfo数据
        // if(this.props.book.summary){
        //     // url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.book._id + '?type=chapters';
        //     url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.params.bookid + '?type=chapters';
        //     fetch(url)
        //       .then(response => response.json())
        //         .then(responseData => {
        //             // console.log(responseData);
        //             var bookinfo = {
        //                 title:this.props.book.title,
        //                 image:this.props.book.image,
        //                 summary:this.props.book.summary,
        //                 category:this.props.book.category,
        //                 author:this.props.book.author,
        //                 subcategory:this.props.book.subcategory,
        //                 chapters:responseData.chapters,
        //                 subchapter:responseData.subchapter
        //             }
        //             this.setState({
        //                 bookinfo:bookinfo,
        //                 loaded:true
        //             });
        //         })
        //           .catch(() => {})
        // }else{
        //     // url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.book._id;
        //     url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.params.bookid;
        //     fetch(url)
        //       .then(response => response.json())
        //         .then(responseData => {
        //             // console.log(responseData);
        //             this.setState({
        //                 bookinfo:responseData,
        //                 loaded:true
        //             });
        //         })
        //           .catch(() => {})
        // }

    }

    render(){

        if(this.state.loaded == false){
            return(
                <div className='container'>
                    <div className='main'>
                        <Loading />
                    </div>
                    <div className='sidebar'>

                    </div>
                </div>
            );
        }

        return(
            <div className='container'>
                <div className='main'>
                    <BookInfo bookinfo={this.state.bookinfo} />
                </div>
                <div className='sidebar'>
                    {this.state.bookinfo.author && this.state.bookinfo.author.summary ? <AuthorInfo author={this.state.bookinfo.author} /> : null}
                </div>
            </div>
        );
    }
}

export default BookInfoPage;
