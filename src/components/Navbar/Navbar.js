import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: '2.5rem',
      color: theme.tertiary,
      cursor: 'pointer',
      transform: 'translateY(-10px)',
      transition: 'color 0.3s',
      '&:hover': {
        color: theme.primary,
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
      [t.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },

    // Drawer panel (yang kamu mau jadi #8b6a4e)
    MuiDrawer: {
      padding: '0em 1.8em',
      width: '14em',
      fontFamily: 'var(--primaryFont)',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      background: '"#F6F0E8',
      overflow: 'hidden',
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      [t.breakpoints.down('sm')]: {
        width: '12em',
      },
    },

    closebtnIcon: {
      fontSize: '2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: '#8b6a4e',
      position: 'absolute',
      right: 40,
      top: 40,
      transition: 'opacity 0.2s',
      '&:hover': {
        opacity: 0.8,
      },
      [t.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
      },
    },

    drawerItem: {
        margin: '2rem auto',
        borderRadius: '78px',
        background: 'transparent',
        color: '#8b6a4e',        // ⬅️ WARNA FONT GELAP (mirip sebelumnya)
        width: '85%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '0 30px',
        border: '2px solid #F6F0E8',   // outline putih
        transition: 'all 0.25s ease',

        '&:hover': {
            background: '#8b6a4e',
            color: '#8b6a4e',
        },
    },


    drawerLinks: {
      fontFamily: 'var(--primaryFont)',
      width: '50%',
      fontSize: '1.3rem',
      fontWeight: 600,
      [t.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      },
    },

    drawerIcon: {
      fontSize: '1.6rem',
      [t.breakpoints.down('sm')]: {
        fontSize: '1.385rem',
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) return name.split(' ')[0];
    return name;
  };

  return (
    <div className='navbar'>
      <div className='navbar--container'>
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label='Menu'
        />
      </div>

      <Drawer
        ModalProps={{
            BackdropProps: {
            style: { backgroundColor: 'transparent' } // no shadow overlay
            }
        }}
        variant='temporary'
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') handleDrawerClose();
          else if (reason !== 'escapeKeyDown') handleDrawerClose();
        }}
        anchor='left'
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className='drawer'
        disableScrollLock={true}
      >
        <div className='div-closebtn'>
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role='button'
            tabIndex='0'
            aria-label='Close'
          />
        </div>

        <br />

        <div onClick={handleDrawerClose}>
          <div className='navLink--container'>
            {/* HOME */}
            <Fade left>
              <NavLink to='/' smooth={true} spy='true' duration={800}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>

            {/* ABOUT */}
            <Fade left>
              <NavLink to='/#about' smooth={true} spy='true' duration={800}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            {/* PROJECTS */}
            <Fade left>
              <NavLink to='/#projects' smooth={true} spy='true' duration={800}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Projects</span>
                </div>
              </NavLink>
            </Fade>

            {/* CONTACT */}
            <Fade left>
              <NavLink to='/#contacts' smooth={true} spy='true' duration={800}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
