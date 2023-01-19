import React, { useState } from "react";

// @material-ui components
import { Box, Tab, Tabs, Typography, AppBar } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const a11yProps = (index) => ({
  id: `scrollable-auto-tab-${index}`,
  "aria-controls": `scrollable-auto-tabpanel-${index}`,
});

const ScrollableTabsButtonAuto = (props) => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const tabsPanel = props.tabsName.map((name, key) => (
    <Tab label={name} {...a11yProps(key)} />
  ));

  const tabsContent = props.tabsContent.map((component, key) => (
    <TabPanel value={value} index={key}>
      {component}
    </TabPanel>
  ));

  return (
    <div
      style={{
        flexGrow: 1,
        width: "100%",
        /* backgroundColor: theme.palette.background.paper, */
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label=""
        >
          {tabsPanel}
        </Tabs>
      </AppBar>
      {tabsContent}
    </div>
  );
};

export default ScrollableTabsButtonAuto;
