import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Container,
    Grid,
    Box,
    AppBar,
    Toolbar,
    Fab,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ReportDetail from '../../components/ReportDetail';
import './ReportDetailOfReportor.scss';

type Props = {};

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const ReportDetailOfReportor = (props: Props) => {
    return (
        <React.Fragment>
            <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                <ReportDetail />
            </Container>
            <Grid
                container
                spacing={0}
                className='rp-detail-of-rptor__mobile-bar'
            >
                <Grid item xs={12} sm={0}>
                    <AppBar
                        position='fixed'
                        color='primary'
                        sx={{ top: 'auto', bottom: 0 }}
                    >
                        <Toolbar>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                            >
                                <MenuIcon />
                            </IconButton>
                            <StyledFab color='secondary' aria-label='add'>
                                <AddIcon />
                            </StyledFab>
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton color='inherit'>
                                <SearchIcon />
                            </IconButton>
                            <IconButton color='inherit'>
                                <MoreIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ReportDetailOfReportor;
