import React from 'react';
import Photo from '../Photo/Photo';
import Typography from '@material-ui/core/Typography';
import './CommentBox.css';

const CommentBox = (props) => {
    const {body,email,name}=props.comment
    
    return (
        <div className='CommentBox'>
            <div className>
                <Photo></Photo>
            </div>
            <Typography variant="body1" gutterBottom >
                <h4 style={{margin:'5px 0px'}}>{name}</h4>
                <p style={{margin:'5px 0px'}}>Email:{email}</p>
                <p style={{margin:'5px 0px'}}>{body}</p>
            </Typography>
        </div>
    );
};

export default CommentBox;