import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './Reports.scss';
type Props = {};

export default function Report() {
    const [reports, setReport] = useState([1, 2, 3, 4, 5]);
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
            {reports.map(() => (
                <React.Fragment>
                    <ListItem alignItems='flex-start'>
                        <ListItemText
                            primary='Con sông bị ô nhiễm'
                            secondary={
                                <React.Fragment>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
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
