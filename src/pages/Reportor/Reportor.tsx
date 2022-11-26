import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import AppBar from '../../components/AppBar';
import Report from './components/Report';
import Reports from './components/Reports';
import AddReportIcon from './components/AddReportIcon';
import CardItem from './components/CardItem';

import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import AddReportModal from './components/AddReportModal';

const mdTheme = createTheme();

const Reportor: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {/* <AppBar position='absolute' open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component='h1'
                            variant='h6'
                            color='inherit'
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color='inherit'>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar> */}
                <AddReportModal open={open} setOpen={setOpen} />
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    {/* <Toolbar /> */}
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <AddReportIcon setOpen={setOpen} />
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <CardItem />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <CardItem title='Đang xử lý' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <CardItem title='Đã xử lý' />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <CardItem title='Bị từ chối' />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Reports />
                            </Grid>
                            <Grid item xs={8}>
                                <Report />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Reportor;
