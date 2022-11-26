import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function Copyright(props: any) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link to='https://mui.com/'>Your Website</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;
