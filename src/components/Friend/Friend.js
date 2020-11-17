import React from 'react';
import './Friend.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
const Friend = (props) => {
    const{title,body,id}=props.friend
    const history=useHistory();
    const handleClick=(id) =>{
        history.push(`/posts/${id}`)
    }
    return (
        <Container fixed className='Friend' style={{padding:'0'}}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" gutterBottom style={{padding:'10px',color:'#666666'}}>
                {body}
            </Typography>
            <Button onClick={() =>handleClick(id)} variant="contained" color="primary">See more</Button>
        </Container>
    );
};

export default Friend;