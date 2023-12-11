import React from "react";
import Header from "../components/Header";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";

import Grid from "@mui/material/Grid";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const images = [
    "https://res.cloudinary.com/pro-solve/image/upload/v1702273475/Picture2_pnegkd.jpg",
    "https://res.cloudinary.com/pro-solve/image/upload/v1701029663/image_5_jncddl.png",
    "https://res.cloudinary.com/pro-solve/image/upload/v1698385619/scott-graham-5fNmWej4tAA-unsplash_yotsdx.jpg",
    "https://res.cloudinary.com/pro-solve/image/upload/v1700407731/HUMAN_BRAIN_WITH_LIGHT_BULB_1_1_xrtyhl.png",
    "https://res.cloudinary.com/pro-solve/image/upload/v1698385617/clement-helardot-95YRwf6CNw8-unsplash_fbuvmx.jpg",
    "https://res.cloudinary.com/pro-solve/image/upload/v1695570672/campaign-creators-gMsnXqILjp4-unsplash_wpgw2p.jpg",
  ];

  return (
    <>
      <Header />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} alt="this" />
          ))}
        </Zoom>
      </div>
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
            mb: 9,
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            About
          </Typography>
          <Typography
            component="div"
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "0.5px",
            }}
          >
            Welcome to the virtual home of our esteemed research group
            comprising distinguished professors and professionals in the fields
            of statistics, computer science, mathematics, and data science.
            Here, we bring together a collective of passionate educators and
            researchers dedicated to the advancement of statistical and
            mathematical methodologies, data science, and the exploration of
            cutting-edge technologies such as machine learning, artificial
            intelligence, and deep learning, etc. As a research group, our
            vision is to serve as a catalyst for transformative advancements in
            statistical modeling, data analysis, information and communication
            technology, and the integration of emerging other technologies such
            as machine learning, artificial intelligence, recurrent neural
            networks (RNN), convolutional neural networks (CNN), and more. We
            aim to nurture a community of scholars committed to pushing the
            boundaries of knowledge and leveraging technology to solve complex
            problems in a diverse array of domains. We seek grants all over the
            world to cater for 70% of our activities, including research and
            training.
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
              mt: 8,
            }}
          >
            Our Expertise
          </Typography>
          <Typography
            component="div"
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "0.5px",
            }}
          >
            Drawn from diverse academia and industry backgrounds, our group
            fosters an environment where a rich tapestry of skills in Python, R
            Language, Java, JavaScript, C, C++, C#, SQL, Swift, Kotlin, PHP,
            Ruby, Goland, Typescript, Scala, MATLAB, Objective-C, Rust, PowerBI,
            Haskell, and Shell Scripting languages such as Bash, Power Shell,
            converge. Committed to excellence, we combine a profound expertise
            in advanced statistical analysis with a dedication to harnessing the
            power of technology to glean insights from complex data and we go
            extra-miles in achieving solutions to ICT-inclined problems.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
