import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// @material-ui components
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  Divider,
  List,
  Collapse,
  ListSubheader,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { grey } from "@mui/material/colors";

import { drawerWidth } from "../../settings";

import routes from "../../routes";

/* const useStyles = makeStyles((theme) => ({
drawer: {
       [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    overflowY: "hidden",
  },
  drawerList: {
    paddingTop: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: `1px solid ${grey[300]}`,
    "&*::-webkit-scrollbar": {
      width: 4,
    },
    "&*::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&*::-webkit-scrollbar-thumb": {
      background: grey[400],
      borderRadius: 50,
    },
  },
  mainMenuWrapper: {
    flexDirection: "column",
    minHeight: "100vh",
    display: "flex",
  },
  mainMenu: {
    flexGrow: 1,
  },
  logoContainer: {
    background: "#ffffff",
  },
  logoImage: {
    width: "100%",
    padding: 20,
  },
  listMainMenu: {
    padding: 16,
    fontSize: 13,
    color: grey[900],
    "&:hover": {
      background: "#266abd",
      color: grey[50],
      cursor: "pointer",
      "& .MuiListItemIcon-root": {
        color: grey[50],
      },
    },
    "& .MuiTypography-root": {
      fontSize: 15,
    },
  },
  listIconMainMenu: {
    minWidth: 35,
  },
  collapsibleMenu: {
    background: grey[50],
  },
  menuSubheader: {
    margin: "15px 0 10px 35px",
    lineHeight: 1,
  },
  listMainSubMenu: {
    whiteSpace: "normal",
    padding: "12px 12px 12px 42px",
    lineHeight: 1,
    minHeight: 1,
    "&:hover": {
      background: grey[200],
    },
  },
  listIconMainSubMenu: {
    minWidth: 16,
    color: grey[600],
    height: 16,
  },
  IconMainSubMenu: {
    height: 16,
    width: 24,
  },
  subMenuItemLabel: {
    fontSize: 14,
    padding: 0,
    margin: 0,
    lineHeight: 1,
    color: grey[800],
  },
})); */

const DrawerWrapper = (props) => {
  const [collapsibleMenu, setCollapsibleMenu] = useState({});

  useEffect(() => {
    const itemsMenu = {};
    routes.forEach((route) => {
      if (route.layout === "/dashboard" && route.display === "menu") {
        const menuGroup =
          typeof route.menuGroup !== "undefined"
            ? route.menuGroup
            : "unknownMenu";
        itemsMenu[menuGroup] = false;
      }
    });
    setCollapsibleMenu(itemsMenu);
  }, []);

  const toggleMenuCollapsible = (menuGroup) => {
    const itemsMenu = { ...collapsibleMenu };
    if (typeof menuGroup !== "undefined") {
      itemsMenu[menuGroup] = !itemsMenu[menuGroup];
    }
    setCollapsibleMenu(itemsMenu);
  };

  const drawer = (
    <Box sx={{ flexDirection: "column", minHeight: "100vh", display: "flex" }}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Box sx={{ background: "#ffffff" }}>
          <img
            src="https://cdn.zinnerlog.com.br/images/logo.png"
            alt="Grupo Zinner"
            style={{
              width: "280px",
              padding: 20,
            }}
          />
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          sx={{ paddingTop: 0 }}
        >
          {routes.map((route) => {
            if (
              route.display === "menu" &&
              typeof route.menuGroup !== "undefined"
            ) {
              return (
                <>
                  <ListItem
                    onClick={() => toggleMenuCollapsible(route.menuGroup)}
                    sx={{
                      padding: "16px",
                      fontSize: 13,
                      color: "grey[900]",
                      "&:hover": {
                        background: "#266abd",
                        color: grey[50],
                        cursor: "pointer",
                        "& .MuiListItemIcon-root": {
                          color: grey[50],
                        },
                      },
                      "& .MuiTypography-root": {
                        fontSize: 15,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 35,
                      }}
                    >
                      <route.icon />
                    </ListItemIcon>
                    <ListItemText primary={route.label} />
                    {collapsibleMenu[route.menuGroup] ? (
                      <ExpandMoreIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </ListItem>
                  <Collapse
                    in={collapsibleMenu[route.menuGroup]}
                    timeout="auto"
                    unmountOnExit
                    sx={{ background: grey[50] }}
                  >
                    {route.links &&
                      route.links.map((link) => {
                        if (link.divider) {
                          return <Divider light />;
                        }
                        if (link.subheader) {
                          return (
                            <ListSubheader
                              sx={{
                                margin: "15px 0 10px 35px",
                                lineHeight: 1,
                              }}
                              disableSticky
                            >
                              {link.subheaderTitle}
                            </ListSubheader>
                          );
                        }
                        return (
                          <ListItem
                            component={Link}
                            to={route.layout + link.path}
                            sx={{
                              whiteSpace: "normal",
                              padding: "12px 12px 12px 42px",
                              lineHeight: 1,
                              minHeight: 1,
                              "&:hover": {
                                background: grey[200],
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 16,
                                color: grey[600],
                                height: 16,
                              }}
                            >
                              <ChevronRightIcon
                                sx={{ height: 16, width: 24 }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={link.label}
                              sx={{
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                                lineHeight: 1,
                                color: grey[800],
                              }}
                              disableTypography
                            />
                          </ListItem>
                        );
                      })}
                  </Collapse>
                  <Divider light />
                </>
              );
            }
            if (
              route.display === "menu-standalone" &&
              typeof route.menuGroup !== "undefined"
            ) {
              return (
                <>
                  <ListItem
                    component={Link}
                    to={route.layout + route.path}
                    sx={{
                      padding: 16,
                      fontSize: 13,
                      color: grey[900],
                      "&:hover": {
                        background: "#266abd",
                        color: grey[50],
                        cursor: "pointer",
                        "& .MuiListItemIcon-root": {
                          color: grey[50],
                        },
                      },
                      "& .MuiTypography-root": {
                        fontSize: 15,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <route.icon />
                    </ListItemIcon>
                    <ListItemText primary={route.label} />
                  </ListItem>
                  <Divider light />
                </>
              );
            }
            return null;
          })}
        </List>
      </Box>
    </Box>
  );

  return (
    <nav
      style={{
        overflowY: "hidden",
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="main-menu"
    >
      <Drawer
        sx={{
          width: drawerWidth,
          borderRight: `1px solid ${grey[300]}`,
          "&*::-webkit-scrollbar": {
            width: 4,
          },
          "&*::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&*::-webkit-scrollbar-thumb": {
            background: grey[400],
            borderRadius: 50,
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default DrawerWrapper;
