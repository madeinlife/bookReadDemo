import React from 'react';
import BookList from './BookList';
import BooksCategory from './BooksCategory';

class BooksPage extends React.Component{
    //BooksPage 图书分类列表页面，需要传入categories属性。不是必须的
    //2016-05-22：改版成传入subcategory,category参数

    constructor(props){
        super(props);
        // console.log(this.props.params);
        var categories;
        if(this.props.params){
            categories =  {
                category:this.props.params.category ? this.props.params.category :'子部',
                subcategory:this.props.params.subcategory
            };
        }else{
            categories =  {
                category:'子部',
                subcategory:null
            }
        }
        // console.log(categories);
        this.state = {
            categories:categories
        }
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
        //只有添加这个方法，当相同路由页面，页面才能刷新。
        // console.log(nextProps.params);
        // nextProps.params && nextProps.params.category &&
        if(nextProps.params !== this.props.params){
            // console.log('=========>');
            this.setState({
                categories:{
                    category:nextProps.params.category ? nextProps.params.category : '子部',
                    subcategory:nextProps.params.subcategory
                }
            });
        }else{
            // this.setState({
            //     categories:{
            //         category:'子部',
            //         subcategory:'儒家类'
            //     }
            // });
        }
    }
    changeCategories(categoriesValue){
        // console.log(categoriesValue);
        this.setState({
            categories:categoriesValue
        });
    }
    render(){
        var BookListView = <BookList  categories={this.state.categories}  />
        return(
            <div className='container'>
                <div className='main' key='1'>
                    {BookListView}
                </div>
                <div className='sidebar' key='2'>
                    <BooksCategory  changeCategories={this.changeCategories.bind(this)}/>
                </div>


            </div>
        );
    }
}

export default BooksPage;
