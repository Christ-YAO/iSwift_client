// import './header.scss';

// import React, { useState } from 'react';
// import { Translate, Storage } from 'react-jhipster';
// import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
// import LoadingBar from 'react-redux-loading-bar';

// import { Home, Brand } from './header-components';
// import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from '../menus';
// import { useAppDispatch } from 'app/config/store';
// import { setLocale } from 'app/shared/reducers/locale';

// export interface IHeaderProps {
//   isAuthenticated: boolean;
//   isAdmin: boolean;
//   ribbonEnv: string;
//   isInProduction: boolean;
//   isOpenAPIEnabled: boolean;
//   currentLocale: string;
// }

// const Header = (props: IHeaderProps) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const dispatch = useAppDispatch();

//   const handleLocaleChange = event => {
//     const langKey = event.target.value;
//     Storage.session.set('locale', langKey);
//     dispatch(setLocale(langKey));
//   };

//   const renderDevRibbon = () =>
//     props.isInProduction === false ? (
//       <div className="ribbon dev">
//         <a href="">
//           <Translate contentKey={`global.ribbon.${props.ribbonEnv}`} />
//         </a>
//       </div>
//     ) : null;

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

//   return (
//     <div id="app-header">
//       {renderDevRibbon()}
//       <LoadingBar className="loading-bar" />
//       <Navbar data-cy="navbar" dark expand="md" fixed="top" className="jh-navbar">
//         <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
//         <Brand />
//         <Collapse isOpen={menuOpen} navbar>
//           <Nav id="header-tabs" className="ms-auto" navbar>
//             <Home />
//             {props.isAuthenticated && <EntitiesMenu />}
//             {props.isAuthenticated && props.isAdmin && <AdminMenu showOpenAPI={props.isOpenAPIEnabled} />}
//             <LocaleMenu currentLocale={props.currentLocale} onClick={handleLocaleChange} />
//             <AccountMenu isAuthenticated={props.isAuthenticated} />
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;





import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Box, Link, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from 'app/components/commons/Logo'
import { NavLink } from "react-router-dom";

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container  sx={{bgcolor: "#a53816", mt: "-60px", maxWidth:"100% !important", p:"0"}}>
        <Toolbar disableGutters sx={{p: '0px'}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink className='nav-active' component="a" to='/' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Banque</NavLink>
                </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className='nav-active' component="a" to='/register_bank' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Ajouter une banque</NavLink>
                </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className='nav-active' component="a" to='/transactions' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Transactions</NavLink>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink className='nav-active' component="a" to='/' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Banque</NavLink>
                </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className='nav-active' component="a" to='/register_bank' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Ajouter une banque</NavLink>
                </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className='nav-active' component="a" to='/transactions' textAlign="center" style={{color: "inherit", textDecoration: 'none',}}>Transactions</NavLink>
                </MenuItem>
                
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
