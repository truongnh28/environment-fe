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
                rạch Xáng bị ô nhiễn rác rất nhiều
                <Chip color='primary' label='Đã nhận' />
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                26/11/2022
            </Typography>
            <Divider />
            <Typography variant='body1' gutterBottom>
                Con kênh rạch Xáng gần nhà tôi có hiện tượng ô nhiễm, nước bốc
                mùi và màu sẫm, rất khó chịu. Mong cơ quan giải quyết.
            </Typography>
            <img
                src={`https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/rptkbun/2022_07_04/hinh2-rac-tren-kenh-te-5-7-2363.jpg?w=164&h=164&fit=crop&auto=format`}
                srcSet={`https://photo-cms-plo.epicdn.me/w850/Uploaded/2022/rptkbun/2022_07_04/hinh2-rac-tren-kenh-te-5-7-2363.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt=''
                width={250}
                loading='lazy'
            />
        </Paper>
    );
}
