import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './Reports.scss';
import { useAppSelector } from 'app/hooks';
type Props = {};

export default function Report() {
    const reports = useAppSelector((state) => state.reports);
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                height: 500,
                overflowY: 'scroll',
            }}
            className='reportor__reportlist'
        >
            {reports.data.map((rp) => (
                <React.Fragment key={rp.id}>
                    <ListItem alignItems='flex-start'>
                        <ListItemText
                            primary={rp.title}
                            secondary={
                                <React.Fragment>
                                    {rp.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                </React.Fragment>
            ))}
        </List>
    );
}
