import React from 'react';

require('styles/BooksCategory.scss')
import categories from '../data/categories';
import {Link} from 'react-router';
class Category extends React.Component{
    //传递：subcategory,说明章节下面是否还有二级章节
    render(){
        var rows;
        // 老版本通过li点击事件来处理 categories的变化
        // <li key={index} onClick={() => {
        //         this.props.changeCategories({
        //             'category':this.props.category.category,
        //             'subcategory':subcategory+'类'
        //         })
        // }}>
        //     {subcategory}
        // </li>
        if(this.props.category.subcategory){
            rows = this.props.category.subcategory.map((subcategory,index) => {
                return(
                    <li key={index} >
                        <Link to={`/book/list/${this.props.category.category}/${subcategory}类`}>
                            {subcategory}
                        </Link>
                    </li>
                )
            })
        }
        // <span onClick={() => {
        //         this.props.changeCategories({
        //             'category':this.props.category.category
        //         })
        // }}>{this.props.category.category}</span>
        return(
            <div className="category">
                <div className="category-title">
                    <span>
                        <Link to={`/book/list/${this.props.category.category}`}>
                            {this.props.category.category}
                        </Link>
                    </span>
                </div>
                {rows ? <div className="subcategory"><ul>{rows}</ul></div> : null}
            </div>
        )
    }
}
class BooksCategory extends React.Component{
    render(){
        var categoryiesViews =  categories.map((category,index) => {
            // console.log(category,index);
            return <Category category={category} key={index}
                        changeCategories={this.props.changeCategories}
                   />
        });
        return(
            <div className="category-list">
                {categoryiesViews}
            </div>
        )
    }
}
export default BooksCategory;
