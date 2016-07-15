import React from 'react';
import {Link} from 'react-router';
require('styles/ChapterList.scss');

class ChapterLiView extends React.Component{
    // ChapterLiView 渲染ul的li，需要传入chapters数组
    render(){
        var liViews = this.props.chapters.map((chapter,index) => {
            if(chapter.id){
                return(
                    <li key={index} >
                        <Link to={`/chapter/${chapter.id}`}>
                            {chapter.title}
                        </Link>
                    </li>
                );
            }else{
                return (
                    <li key={index} >
                            <span className='lost'>{chapter.title}</span>
                    </li>
                );
            }

        });
        return(
            <ul>
                {liViews}
            </ul>
        );
    }
}
class ChapterList extends React.Component{
    // ChapterList需要传入chapters和subchapter属性
    //chapters是章节列表数据
    //subchapter是判断章节数据是否分级的。
    // 需要传入handleLiClick方法属性
    constructor(props){
        super(props);
        // console.log(this.props.chapters);
        // console.log(this.props.subchapter);
    }
    render(){
        var chapterListViews;
        if(this.props.subchapter){
            chapterListViews = this.props.chapters.map((chapters,index) => {
                return (
                    <div className='chapter' key={index}>
                        <h3>{chapters.title}</h3>
                        <ChapterLiView chapters={chapters.chapters}
                           />
                    </div>
                );
            });
        }else{
            chapterListViews = (
                <div className='chapter'>
                    <ChapterLiView chapters={this.props.chapters}
                         />
                </div>
            )
        }
        return(
            <div className='chapter-list'>
                <div className='title'>
                    <div className='mulu'>目&nbsp;录</div>
                </div>
                {chapterListViews}
            </div>
        );
    }
}

export default ChapterList;
