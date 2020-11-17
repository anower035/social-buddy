import { Container } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';


import './Home.css';

const Home = () => {
    const [friends,setFriends]=useState([])
    useEffect(()=>{
      const url='https://jsonplaceholder.typicode.com/posts'
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setFriends(data)
        console.log(data)
      })
    },[])
    return (
        <Container fixed style={{padding:'0'}}>
            {
              friends.map(friend =><Friend friend={friend}></Friend>)
            }
        </Container>
    );
};

export default Home;