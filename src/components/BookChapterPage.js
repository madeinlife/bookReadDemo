import React from 'react';
import BookChapter from './BookChapter';
import ChapterList from './ChapterList';
// import ChapterList from './ChapterList2';
class BookChapterPage extends React.Component{
    // 实例化的时候需要传入 chapter{id,...}  还要传入chapters,subchapter
    // 如果chapterList没有，则需要自己获取列表
    constructor(props){
        super(props);
        this.state = {
            chapterid:this.props.params.chapterid,
            chapters:this.props.chapters,
            subchapter:this.props.subchapter
        };
        this.fetchChaptersData = this.fetchChaptersData.bind(this);
        this.changeChapter = this.changeChapter.bind(this);
    }
    componentDidMount(){
        if(this.state.chapters){
            // console.log(this.state.chapters);
        }else{
            this.fetchChaptersData()
        }
    }
    fetchChaptersData(){
        // var url = 'http://guoxuebuluo.com/api/1.0/book/chapters/list/' + this.props.chapter.id;
        var url = 'http://guoxuebuluo.com/api/1.0/book/chapters/list/' + this.state.chapterid;
        fetch(url)
          .then(response => response.json())
            .then(responseData => {
                // console.log(responseData);
                if(responseData){
                    this.setState({
                        chapters:responseData.chapters,
                        subchapter:responseData.subchapter
                    });
                }
            })
              .catch(() => {})
    }
    componentWillReceiveProps(nextProps){
        //不加这个方法，当chapter页面，Link 过来的时候，页面不刷新哦！！！
        // console.log('componentWillReceiveProps');
        // console.log(nextProps);
        if(nextProps.params.chapterid !== this.props.params.chapterid ){
            // console.log('==========>')
            this.setState({
                chapterid:nextProps.params.chapterid,
                loaded:false,
                loading:false
            });
        }
    }

    changeChapter(chapterValue){
        //chapterlist 中的li  handleLiClick点击后 修改chapter
        this.setState({
            chapterid:chapterValue
        });
    }
    render(){
        var chapterListViews;
        if(this.state.chapters){
            chapterListViews = <ChapterList chapters={this.state.chapters}
                                    subchapter={this.state.subchapter}
                                    handleLiClick={this.changeChapter.bind(this)}
                                />
        }
        return(
            <div className='container'>
                <div className='main' key={1}>
                    <BookChapter chapterid={this.state.chapterid} />
                </div>
                <div className='sidebar' key={2}>
                    {chapterListViews}
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default BookChapterPage;
