import { Avatar, Box, Button, Card, Container, CssBaseline, Fab, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Popper, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import AppBarMobile from "components/AppBarMobile";
import { styled, createTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import AppBar from '../../components/AppBar';
import { top10Users } from "../../constants/DataMock";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import Title from "pages/ResolverReports/Title";
const mdTheme = createTheme();

function createDate(
    id: number,
    date: string,
    title: string,
    description: string,
    author: string,
    images: string[],
    status: string
) {
    return { id, date, title, description, author, images, status };
}

const fakeData = createDate(1,
    "12:42 PM 26/11/2022",
    "This is a title",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum modi quas blanditiis, sapiente odit maxime eligendi voluptate quasi ex ad. Doloremque veniam tenetur quae, ipsum a ad? Exercitationem, veritatis.\n",
    "user1",
    [
        "https://source.unsplash.com/random/800x800/?img=1",
        "https://source.unsplash.com/random/800x800/?img=1",
        "https://source.unsplash.com/random/800x800/?img=1",
    ],
    "draft",
);

function ResolverReportDetail() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const images = fakeData.images;
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
                                <Link to="#" style={{ color: "white" }}><HomeIcon /></Link>
                                <Link to="#" style={{ color: "white" }}><ListIcon /></Link>
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
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Title>{fakeData.title}</Title>
                                    <Typography variant="subtitle2" gutterBottom>Đăng lúc {fakeData.date} - {fakeData.author}</Typography>
                                    <Typography variant="h4">Nội dung</Typography>
                                    <Typography variant="body1" gutterBottom>{fakeData.description}</Typography>
                                    {images.length > 0 &&
                                        <div>
                                            <Typography variant="h4">Hình ảnh minh họa</Typography>
                                            <Paper elevation={0} sx={{ maxHeight: 270, overflow: "auto" }}>
                                                <Stack direction="row" spacing={1}>
                                                    {images}
                                                </Stack>
                                            </Paper>
                                        </div>
                                    }
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Button variant="contained">Đang xử lý</Button>
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

export default ResolverReportDetail;