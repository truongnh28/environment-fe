import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {};

export default function CardItem() {
    return (
        <Card>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                >
                    Phản hồi của tôi
                </Typography>
                <Typography
                    sx={{ fontSize: 20 }}
                    color='text.secondary'
                    gutterBottom
                >
                    1000
                </Typography>
            </CardContent>
        </Card>
    );
}
