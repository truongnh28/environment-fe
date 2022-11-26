import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

type Props = {};

export default function Report() {
    const [reports, setReports] = React.useState([1, 2, 3, 4, 5, 6]);
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
                overflow: 'scroll',
            }}
        >
            <Typography variant='h6' gutterBottom>
                THis is tile <Chip color='primary' label='Soft' />
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                26/11/2022
            </Typography>
            <Divider />
            <Typography variant='body1' gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Typography>
        </Paper>
    );
}
