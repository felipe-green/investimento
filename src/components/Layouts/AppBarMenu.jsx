import React, { useState } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
// @material-ui components
import {
  ExitToApp as ExitToAppIcon,
  AccountCircle as AccountCircleIcon,
  LockRounded as LockRoundedIcon,
  Help as HelpIcon,
} from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { grey, lightBlue } from "@mui/material/colors";

import routes from "../../routes";
import { locale } from "../../settings";

/* const useStyles = makeStyles((theme) => ({
  appBarActionButtonMenu: {
    marginLeft: 10,
    padding: 0,
    backgroundColor: grey[800],
    "&:hover": {
      backgroundColor: grey[800],
    },
    label: {
      padding: 0,
    },
    minHeight: 0,
    minWidth: 0,
  },
    appBarActionButtonMenuShift: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBarActionMenuIcon: {
    color: grey[200],
    width: 20,
    height: 20,
        [theme.breakpoints.down("sm")]: {
      width: 18,
      height: 18,
    },
  },
  avatarMenuText: {
    color: grey[900],
  },
  avatarButtonMenu: {
    marginLeft: 10,
    padding: 0,
    backgroundColor: grey[800],
    "&:hover": {
      backgroundColor: grey[800],
    },
    label: {
      padding: 0,
    },
    minHeight: 0,
    minWidth: 0,
  },
    avatarButtonMenuShift: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatarMenu: {
    color: grey[200],
    width: 22,
    height: 22,
        [theme.breakpoints.down("sm")]: {
      width: 19,
      height: 19,
    },
  },
  avatarMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: grey[300],
      "& .MuiListItemIcon-root": {
        color: lightBlue[900],
      },
    },
  },
  avatarMenuListItemIcon: {
    minWidth: 32,
  },
  avatarMenuIcon: {
    fontSize: 18,
  },
})); */

const AppBarMenu = (props) => {
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(null);

  const openAvatarMenu = (event) => {
    setAvatarMenuOpen(event.currentTarget);
  };

  const closeAvatarMenu = () => {
    setAvatarMenuOpen(null);
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };

  const avatarMenuLinks = routes.map((prop) => {
    if (prop.display === "avatar") {
      return (
        <ListItem
          onClick={closeAvatarMenu}
          component={Link}
          to={prop.layout + prop.path}
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: grey[300],
              "& .MuiListItemIcon-root": {
                color: lightBlue[900],
              },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <prop.icon sx={{ fontSize: 18 }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: grey[900],
            }}
            primary={prop.label}
          />
        </ListItem>
      );
    }
    return null;
  });

  return (
    <>
      {/*<IconButton
      aria-controls="help-menu"
      className={clsx(customClasses.appBarActionButtonMenu, {
        [customClasses.appBarActionButtonMenuShift]: props.topBarItemsOpen,
      })}
    >
      <HelpIcon className={customClasses.appBarActionMenuIcon} />
    </IconButton>
    <IconButton
      aria-controls="permissions-menu"
      className={clsx(customClasses.appBarActionButtonMenu, {
        [customClasses.appBarActionButtonMenuShift]: props.topBarItemsOpen,
      })}
    >
      <LockRoundedIcon className={customClasses.appBarActionMenuIcon} />
    </IconButton>*/}
      <IconButton
        aria-controls="avatar-menu"
        aria-haspopup="true"
        onClick={openAvatarMenu}
        /* className={clsx(customClasses.avatarButtonMenu, {
          [customClasses.avatarButtonMenuShift]: props.topBarItemsOpen,
        })} */
        size="large"
      >
        <AccountCircleIcon
          sx={{
            color: grey[200],
            width: { xs: 19, sm: 22 },
            height: { xs: 19, sm: 22 },
          }}
        />
      </IconButton>
      <Menu
        anchorEl={avatarMenuOpen}
        keepMounted
        open={Boolean(avatarMenuOpen)}
        onClose={closeAvatarMenu}
        id="avatar-menu"
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {avatarMenuLinks}
        <ListItem
          onClick={logout}
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: grey[300],
              "& .MuiListItemIcon-root": {
                color: lightBlue[900],
              },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ExitToAppIcon sx={{ fontSize: 18 }} />
          </ListItemIcon>
          <ListItemText primary={locale.appBar.avatarLogout} />
        </ListItem>
      </Menu>
    </>
  );
};

export default AppBarMenu;
