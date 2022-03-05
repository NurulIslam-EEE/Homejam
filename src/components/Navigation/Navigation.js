import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import logo from '../../img/logo.png';
import logo2 from '../../img/Vector (Stroke).png';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {

        width: '100px',
        marginRight: '30px'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Navigation() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navContainer: {
            background: "transparent !important",
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: "0 0 0 0 !important"
        },
        navItem: {
            color: 'white',
            textDecoration: 'none',
            marginRight: '40px'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItem2: {
            color: 'white',
            textDecoration: 'none',
            marginRight: '40px',
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        }
    })
    const {
        navContainer,
        navItem, navIcon, navItem2
    } = useStyle();
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar className={navContainer} position="fixed">
                <Toolbar sx={{ maxWidth: '1135px !important' }}>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        <img src={logo} alt="" />
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box >
                        <Link className={navItem2} to='/'>Help</Link>
                        <Link className={navItem2} to='/'>Account</Link>
                        <Link className={navItem} to='/'><img src={logo2} alt="" /></Link>

                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        className={navIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
