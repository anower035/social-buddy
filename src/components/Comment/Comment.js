import React, { useState, useEffect} from 'react';
import CommentBox from '../CommentBox/CommentBox';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './Comment.css';

const Comment = () => {
    const [comments,setComments]=useState([])
    useEffect(() =>{
        const url ='https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/comments/?_limit=5'
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setComments(data)
            // console.log(data)
        })
    },[])
    return (
        <Container fixed  disableGutters='true'>
            <Typography variant="body1" gutterBottom>
                <h3>Comments({comments.length}):</h3>
            </Typography>
            <Typography variant="body1" gutterBottom>
                {
                    comments.map(comment =><CommentBox comment={comment} key={comment.id}></CommentBox>)
                }
            </Typography>

        </Container>
    );
};

export default Comment;