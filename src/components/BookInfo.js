import React from 'react';
import ChapterList from './ChapterList';
class BookInfo extends React.Component{
    //实例化需要传递：bookinfo{title,image,summary,chapters,subchapter}
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         bookinfo:null,
    //         loaded:false
    //     };
    //     this.fetchData = this.fetchData.bind(this);
    // }
    // componentDidMount(){
    //     this.fetchData();
    // }
    // fetchData(){
    //     let url = 'http://guoxuebuluo.com/api/1.0/book/' + this.props.book._id;
    //     fetch(url)
    //       .then(response => response.json())
    //         .then(responseData => {
    //             console.log(responseData);
    //             this.setState({
    //                 bookinfo:responseData,
    //                 loaded:true
    //             });
    //         })
    //           .catch(err => {})
    // }

    render(){
        // if(this.state.loaded == false){
        //     return <div> Loading </div>
        // }
        return(
            <div className='bookinfo'>
                <div className='title'>
                    <h2>{this.props.bookinfo.title}</h2>
                    <span className='author'>
                        作者:{this.props.bookinfo.author ? this.props.bookinfo.author.name : '佚名'}
                    </span>
                    <div className='book-img'>
                        <img src={'http://guoxuebuluo.com/img/books/' + this.props.bookinfo.image} 
                        alt='{this.props.bookinfo.title}' />
                    </div>
                    <div className='summary'>
                        {this.props.bookinfo.summary}
                    </div>
                    <div className='clearfix'> </div>
                    <ChapterList
                        chapters={this.props.bookinfo.chapters}
                        subchapter={this.props.bookinfo.subchapter}
                    />
                </div>
            </div>
        );
    }
}

export default BookInfo;
