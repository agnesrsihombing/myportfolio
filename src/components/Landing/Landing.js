import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ACCENT = '#8b6a4e';
const CREAM = '#F6F0E8';

const useStyles = makeStyles((t) => ({
  primaryBtnRoot: {
    backgroundColor: ACCENT,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${ACCENT}`,
    transition: '120ms ease-out',

    '&:hover': {
      backgroundColor: ACCENT,
      border: `3px solid ${ACCENT}`,
      transform: 'translateY(-2px)',
    },
  },
  primaryBtnLabel: {
    color: `${CREAM} !important`,
  },
  contactBtnMobileHide: {
    [t.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <div className='landing'>
      <div className='landing--container'>
        <div className='landing--container-left' style={{ backgroundColor: theme.primary }}>
          <div className='lcl--content'>
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                <FaLinkedin className='landing--social' style={{ color: theme.secondary }} aria-label='LinkedIn' />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target='_blank' rel='noreferrer'>
                <FaGithub className='landing--social' style={{ color: theme.secondary }} aria-label='GitHub' />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                <FaInstagram className='landing--social' style={{ color: theme.secondary }} aria-label='Instagram' />
              </a>
            )}
          </div>
        </div>

        <img
          src={headerData.image}
          alt=''
          className='landing--img'
          style={{
            opacity: `${drawerOpen ? '0' : '1'}`,
            borderColor: theme.secondary,
          }}
        />

        <div className='landing--container-right' style={{ backgroundColor: theme.secondary }}>
          <div className='lcr--content' style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className='lcr-buttonContainer'>
              {headerData.resumePdf && (
                <Button
                    component="a"
                    href={headerData.resumePdf}
                    download="cvagnes.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    classes={{ root: classes.primaryBtnRoot, label: classes.primaryBtnLabel }}
                >
                    Download CV
                </Button>
            )}


              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button
                  classes={{ root: classes.primaryBtnRoot, label: classes.primaryBtnLabel }}
                  className={classes.contactBtnMobileHide}
                >
                  Contact
                </Button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
