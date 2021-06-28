import React, { useState, useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext.js'

import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppleIcon from '@material-ui/icons/Apple';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = makeStyles((theme) => ({

  menuButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  itemMenu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = useState(false)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);


  const { currentUser, setCurrentuser } = useContext(AuthContext);
  const handleLogout = async () => {
    await setCurrentuser(null);
    localStorage.clear();
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>)

  //drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };console.log(state)

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  
  return (
    <Grid container>
      <Grid item xl={12}>
        <AppBar style={{ background: 'linear-gradient(45deg, #008080 30%, #99EEFF 90%)' }}>
          <Toolbar className={classes.itemMenu}>
            <div className={classes.sectionMobile}>
              {['left'].map((anchor)=>(
                <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>

              ))}
            </div>
            <div>
              <AppleIcon />
            </div>
            <div className={classes.sectionDesktop}>
              <div style={{ display: 'flex' }} className="item--menu">
                <Typography noWrap>หน้าหลัก</Typography>
                <Typography noWrap>การบริการ</Typography>
                <Typography noWrap>ค่าบริการ</Typography>
                <Typography noWrap>คู่มือการใช้งาน</Typography>
                <Typography noWrap>ติดต่อสอบถาม</Typography>
                <Typography noWrap>EN | TH</Typography>
              </div>
              <div className={classes.menuButton}>
                <Link style={{ textDecoration: 'none' }} to="/login"><Button variant="outlined" color="secondary">เข้าสู่ระบบ</Button></Link>
                <Button variant="contained">สมัครสมาชิก</Button>
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Grid>

    </Grid>
  )
}
