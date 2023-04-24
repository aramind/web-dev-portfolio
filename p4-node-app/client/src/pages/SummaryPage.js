import React from "react";
import { Box, Toolbar } from "@mui/material";
import muiTheme from "../muiTheme";

import Header from "../components/summary-page-components/Header";
import SummaryCard from "../components/summary-page-components/SummaryCard";
import { useValue } from "../context/ContextProvider";

const SummaryPage = () => {
  // global states
  const {
    state: { activityNames, recordForSelectedDate, alert, loading },
    dispatch,
  } = useValue();

  // local states
  return (
    <Box
      // alignItems={"center"}
      width="100%"
      display={"flex"}
      flexDirection={"column"}
      sx={{
        margin: "0 auto",
        // border: "1px solid green",
        [muiTheme.breakpoints.up("md")]: {
          width: { md: "98%", lg: "96%", xl: "60%" },
        },
      }}
    >
      <Toolbar sx={{ marginBottom: "10px" }} />
      {/* TODO: to remove once final na */}
      {/* <Typography>Summary Page</Typography> */}
      {/* for main content */}
      <Box
        width="100%"
        // gap="1rem"

        sx={{
          margin: "10px auto",
          // border: "1px solid green",
          [muiTheme.breakpoints.up("sm")]: {
            display: { sm: "flex" },
          },
        }}
      >
        <Box
          mb={2}
          mx={1}
          sx={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Header />
          {/* </Box> */}
        </Box>
        <Box
          // flex={4}
          sx={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {activityNames.map((title) => (
            <SummaryCard
              key={title}
              title={title}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SummaryPage;
