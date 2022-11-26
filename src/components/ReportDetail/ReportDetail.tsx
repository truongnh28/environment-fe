import React from 'react';
import { Paper, Typography, Stack, Box } from '@mui/material';
import './ReportDetail.scss';
type Props = {};

const ReportDetail = (props: Props) => {
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography component='h2' variant='h2' color='primary'>
                Con Kênh tàu hũ có hiện tượng cá chết hàng loạt
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
                Đăng lúc 26/11/2022 - Thanh.nn
            </Typography>
            <Typography variant='body1' gutterBottom>
                Sáng nay kênh Tàu hũ tại Thị Nghè có hiện tượng cá chết hàng
                loạt, không rõ nguyên nhân. Nước có mùi hôi khó chịu, có váng
                dầu. Mong chính quyền giải quyết.
            </Typography>
            <div>
                <Typography variant='h6'>Hình ảnh minh họa</Typography>
                <Box className='rp-detail__image'>
                    <Stack
                        direction='row'
                        sx={{
                            width: 250,
                            height: 250,
                            objectFit: 'contain',
                        }}
                        spacing={1}
                    >
                        <img
                            alt=''
                            src='https://source.unsplash.com/random/800x800/?img=1'
                        />
                    </Stack>
                </Box>
            </div>
        </Paper>
    );
};

export default ReportDetail;
