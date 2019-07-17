import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import './Navbar.scss';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));
export default function PrimarySearchAppBar () {
    const data = [
        {
            id: 'home',
            title: 'Home'
        },
        {
            id: 'portfolio',
            title: 'Portfolio'
        },
        {
            id: 'services',
            title: 'Services'
        },
        {
            id: 'contactUs',
            title: 'Contact Us'
        }
    ];
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleMobileMenuClose () {
        setMobileMoreAnchorEl(null);
    }

    function handleMobileMenuOpen (event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >   
            {data.map(item => {
                return <MenuItem key = {item.id}>
                    <a className="hiddenItems" href = {`#${item.id}`}>{item.title}</a>
                </MenuItem>;
            })}
        </Menu>
    );
    return (
        <div className={`navigation ${classes.grow}`}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <img src='./VanIT.png' alt='aaaaa' style = { { width: '35px', height: '35px', borderRadius: '50%' } }></img>
                    </Typography>
                    <Typography className={classes.title} variant="h6" noWrap>
                        VanIT
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {data.map(item => {
                            return <IconButton key = {item.id}>
                                <a href = {`#${item.id}`}>{item.title}</a>
                            </IconButton>;
                        })}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="Show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}