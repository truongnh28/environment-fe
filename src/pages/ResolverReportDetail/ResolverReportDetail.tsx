import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ListItemButton, ListItemText, Stack } from '@mui/material';
import Title from "../ResolverReports/Title";
import Image from "./Image";

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


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function ResolverReportDetail() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const images = fakeData.images.map((image, index) => <Image key={index} src={image}/>);
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </List>
                </Drawer>
                <Box
                    component="main"
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
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                                            <Paper elevation={0} sx={{ maxHeight: 270, overflow: "auto"}}>
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
                                    {/* Button */}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ResolverReportDetail;