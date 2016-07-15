'use strict';
import React from 'react';
require('styles/AuthorInfo.scss');
class AuthorInfo extends React.Component{

    render(){
        var authorImgView;
        if(this.props.author.image){
            authorImgView = (
                <div className='author-img' key={1}>
                    <img src={'http://guoxuebuluo.com/img/authors/' + this.props.author.image} />
                </div>
            );
        }
        return(
            <div className='authorinfo'>
                <div className='author' key={0}>
                    {this.props.author.name + '介绍'}
                </div>
                {authorImgView}
                <div className='summary' key={2}>
                    {this.props.author.summary}
                </div>
            </div>
        );
    }
}

export default AuthorInfo;
