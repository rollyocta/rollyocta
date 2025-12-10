import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";

const TabsLayout = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
        <Tabs
            value={value}
            onChange={handleChange}
            sx={{
                "& .MuiTab-root": {
                color: "#fff",
                },
                "& .MuiTab-root.Mui-selected": {
                color: "#D4AF37",
                }
            }}
            >
            <Tab label="Work" />
            <Tab label="Education" />
            <Tab label="Skills" />
        </Tabs>

        <hr
        style={{
            border: "none",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.2)",
        }}
        />

        {value === 0 && <Work />}
      {value === 1 && <Education />}
      {value === 2 && <Skills />}
    </Box>
    
  );
};

export default TabsLayout;
