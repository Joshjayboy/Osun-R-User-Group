import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Header from "./../components/Header";
import Footer from "./Footer";

import Grid from "@mui/material/Grid";

import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "./../components/Header";

const Agenda = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Header />

      <Box
        sx={{
          textAlign: "center",

          "@media (min-width: 0px)": {
            ml: 3,
            mr: 3,
            mt: 13,
            mb: 3,
          },

          "@media (min-width: 768px)": {
            ml: 5,
            mr: 5,
            mt: 15,
            mb: 5,
          },

          "@media (min-width: 992px)": {
            ml: 5,
            mr: 5,
            mt: 15,
            mb: 5,
          },
          "@media (min-width: 1200px)": {
            ml: 15,
            mr: 15,
            mt: 15,
            mb: 15,
          },
        }}
      >
        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Day 1: 16th October, 2023
          </Typography>

          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Morning Session:  Introduction to Python "
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Introduction to programming concepts, Installing Python
                        and setting up the development environment, Running
                        Python scripts and interactive mode, Basic syntax,
                        variables, and data types.
                      </Typography>
                      {""}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Afternoon Session:  Introduction to Python and Data Structures and Functions  "
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Control flow statements (if-else, loops). Lists, tuples,
                        and dictionaries, String manipulation, Functions and
                        modules, File handling and input/output operations.
                      </Typography>
                      {"  "}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Day 2: 17th October, 2023
          </Typography>

          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Morning Session:  Object-Oriented Programming (OOP)"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        OOP principles and concepts, Creating classes and
                        objects.
                      </Typography>
                      {""}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Afternoon Session:  Object-Oriented Programming (OOP)"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Inheritance and polymorphism, Exception handling.
                      </Typography>
                      {"  "}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Day 3: 18th October, 2023
          </Typography>

          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Morning Session:  Libraries and Frameworks"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Introduction to popular Python libraries (NumPy, Pandas,
                        Matplotlib), Working with data, structures and
                        performing data analysis.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="	Afternoon Session:  Libraries and Frameworks"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Visualization of data using Matplotlib, Introduction to
                        web frameworks (Django, Flask).
                      </Typography>
                      {"  "}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Day 4: 19th October, 2023
          </Typography>

          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="	Morning Session:  Advanced Topics"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Regular expressions, Database connectivity using Python,
                        Introduction to web scraping.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Afternoon Session:  Advanced Topics"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Web Development with Python: Introduction to Python
                        frameworks like Django and Flask for building web
                        applications.
                      </Typography>
                      {"  "}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Day 5: 20th October, 2023
          </Typography>

          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Morning Session:  More Advanced Topics"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Continuation to Web Development with Python:
                        Introduction to Python frameworks like Django and Flask
                        for building web applications. Understanding the basics
                        of web development, routing, and creating interactive
                        web interfaces.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Afternoon Session:  More Advanced Topics"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Introduction to Machine Learning: Overview of machine
                        learning concepts, algorithms, and Python libraries such
                        as Scikit-learn. Building and evaluating machine
                        learning models for classification and regression tasks.
                      </Typography>
                      {"  "}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 9,
            mb: 9,
            height: "90px",
            backgroundColor: "#1976d2",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              pt: 3.5,
            }}
          >
            Photos
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Item>
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="pic"
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690678511/pic8_kctlx7.png"
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="pic"
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690678704/pic9_slglgy.png"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Agenda;
