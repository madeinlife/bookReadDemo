import React from 'react';
import Loading from './Loading';
import {Link} from 'react-router';
class BookChapter extends React.Component{
    // BookChapter实例化的时候需要传入chapter对象:[有id,title,translate对象];
    //文章的内容是html，所有需要用到div下 dangerouslySetInnerHTML属性的设置。
    constructor(props){
        super(props);
        this.state = {
            chapterid:this.props.chapterid,
            chapterInfo:{},
            loaded:false,
            loading:false
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        //当页面在loading的时候，状态修改了也不fetchData，
        if(this.state.loading){
            return;
        }else{
            this.setState({
                loading:true
            });
        }
        // fetch 章节的数据
        var url ='http://guoxuebuluo.com/api/1.0/book/chapters/html/' + this.state.chapterid;
        fetch(url)
          .then(response => response.json())
            .then(responseData => {
                // console.log(responseData);
                this.setState({
                    loading:false,
                    loaded:true,
                    chapterInfo:responseData
                })
            })
            .catch(() => {
                this.setState({
                    Loading:false
                });
            })
    }
    componentWillReceiveProps(nextProps){
        // console.log('componentWillReceiveProps');
        // console.log(nextProps);
        if(nextProps.chapterid !== this.props.chapterid ){
            //由于setState是异步的，当程序运行完毕后，我们再重新加载数据；
            // console.log('==========>')
            this.setState({
                chapterid:nextProps.chapterid,
                loaded:false,
                loading:false
            },()=>{
                // console.log('当state修改完后，我们要重新加载数据');
                this.fetchData();
            });
        }
    }
    render(){

        if(this.state.loaded === false){
            return <Loading />
        }
        return(
            <div className='article'>
                <div className='title' key={0}>
                    <h2>{this.state.chapterInfo.chapter}</h2>
                    <span>《{this.state.chapterInfo.book}》</span>
                </div>
                <div className='article-wrap' key={1}
                    dangerouslySetInnerHTML={{__html:this.state.chapterInfo.content}} />

                <div className='changeChapter' key={2}>
                    <div className='pre changeButton' key={0}>
                        {this.state.chapterInfo.pre ? <Link to={`/chapter/${this.state.chapterInfo.pre}`}>
                            上一章
                        </Link> : <a className='no'>上一章</a>}

                    </div>
                    <div className='next changeButton'>
                        {this.state.chapterInfo.next ? <Link to={`/chapter/${this.state.chapterInfo.next}`}>
                            下一章
                        </Link> : <a className='no'>下一章</a>}
                    </div>
                </div>
                <div className='clearfix' key={5}> </div>
            </div>
        );
    }
}

export default BookChapter;
