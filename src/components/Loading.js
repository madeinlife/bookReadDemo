'use strict'
import React from 'react';

var loadingImg = require('../images/loading.gif');
// let logoImg = require('../images/logo_grey.png');
var styles = {
    container:{
        width:'200px',
        margin:'100px auto'
    },
    loadingImg:{
        width:'20px',
        height:'20px',
        paddingBottom:'2px'
    },
    logoGreyImg:{
        height:'25px',
        marginLeft:'5px'
    }
};
class Loading extends React.Component{

    render(){
        return(
            <div style={styles.container}>
                <img src ={loadingImg} style={styles.loadingImg}/>
                <img src='/images/logo_grey.png' style={styles.logoGreyImg} />
            </div>
        );
    }
}

export default Loading;
