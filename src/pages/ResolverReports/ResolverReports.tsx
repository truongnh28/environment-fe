import { Avatar, Box, Button, Card, Container, CssBaseline, Fab, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Popper, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import AppBarMobile from "components/AppBarMobile";
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import AppBar from '../../components/AppBar';
import { top10Users } from "../../constants/DataMock";
import HomeIcon from '@mui/icons-material/Home';
import Reports from "./Reports";
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
const mdTheme = createTheme();

function ResolverReports() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position='absolute' className='toolbar' open={false}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Typography
                            component='h1'
                            variant='h6'
                            color='inherit'
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            <Stack direction="row" spacing={3}>
                                <Link to="#" style={{color: "white"}}><HomeIcon /></Link>
                                <Link to="#" style={{color: "white"}}><ListIcon /></Link>
                            </Stack>
                        </Typography>
                        <IconButton color='inherit' onClick={handleClick}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
                            <Box
                                sx={{
                                    border: 0,
                                    p: 1,
                                    bgcolor: 'background.paper',
                                    zIndex: 100,
                                }}
                            >
                                <Button variant='contained'>Logout</Button>
                            </Box>
                        </Popper>
                    </Toolbar>
                </AppBar>
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
                    className='reportor__content'
                >
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Reports />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <AppBarMobile />
        </ThemeProvider>
    );
}

export default ResolverReports;