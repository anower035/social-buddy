import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
import './FriendDetails.css';

const FriendDetails = () => {
    let {id}=useParams();
     const [posts,setPosts]=useState([])
     useEffect(() =>{
         const url=`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts/${id}`
         fetch(url)
         .then(res => res.json())
         .then(data =>
          setPosts(data)
         )
        },[id])
        const {title,body}=posts;
     


    return (
            <Container fixed style={{ padding:'0'}}> 
            <Typography variant="h4" gutterBottom style={{marginTop:'10px',color:'#009AFE'}}>
                {title}
            </Typography>
            <Typography variant="body1" gutterBottom style={{marginBottom:'15px'}}>
                {body}
            </Typography>
                <Comment></Comment>
            </Container>
    );
};

export default FriendDetails;