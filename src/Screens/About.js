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
        <Box
          align="justify"
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          >
            Our Key Members
          </Typography>
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <img
                alt="Timothy"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329285/Picture1_mapikh.jpg"
              />
            </Box>

            <Typography
              sx={{
                textAlign: "left",
                mt: 5,
                color: "#0066FF",
                fontWeight: 900,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Prof. Adebowale Olusola ADEJUMO
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Prof. A.O. ADEJUMO, a seasoned administrator and academician,
              hails from Igboora in Oyo State of Nigeria. He is a Professor of
              Statistics and former Head of Department of Statistics, University
              of Ilorin, Nigeria. He holds both Bachelor of Science (B.Sc.) and
              Master of Science (M.Sc.) degrees in Statistics from the better by
              far University of Ilorin, Ilorin, Nigeria and Doctor of Philosophy
              (PhD) degree in Statistics from Ludwig Maximilians University,
              Munich, Germany. His areas of specialization are Statistical
              Modelling, Biostatistics, Time Series and Categorical Data
              Analysis. He has over 70 publications in academic journals both
              locally and internationally and, has supervised over thirty master
              and six PhD students in total.
              <br />
              <br />
              He has served as technical editor and reviewer to so many journal
              outlets. He has attended many conferences both locally and
              internationally and even presented some papers. He is a member of
              some notable academic associations like Nigerian Statistical
              Association (NSA), Science Association of Nigeria, International
              Biometric Society (IBS), European Centre for Research Training and
              Development, UK, Nigerian Association of Mathematical Physics
              (NAMP), to mention but a few. He could be reached through
              aodejumo@unilorin.edu.ng. He has served in various capacities to
              so many non-governmental organizations and academic institutes. He
              is very passionate and highly accommodating. His profile could be
              checked here:
              <br />
              <br />
              <a href="https://ng.linkedin.com/in/adebowale-adejumo-78a635127">
                https://ng.linkedin.com/in/adebowale-adejumo-78a635127
              </a>
              <br />
              <br />
              <a
                href="  https://www.researchgate.net/profile/Adebowale_Olusola_Adejumo
       "
              >
                https://www.researchgate.net/profile/Adebowale_Olusola_Adejumo
              </a>
              <br />
              <br />
              <a href="  https://orcid.org/0000-0002-3127-1685 ">
                https://orcid.org/0000-0002-3127-1685
              </a>
              <br />
              <br />
              <a
                href="  https://www.mendeley.com/profiles/adebowale-adejumo//#profile-publications.
           "
              >
                https://www.mendeley.com/profiles/adebowale-adejumo//#profile-publications.
              </a>
              <br />
              <br />
            </Typography>
          </Box>
        </Box>

        <Box
          align="justify"
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          ></Typography>
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <img
                alt="Timothy"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329285/Picture2_mtdszh.jpg"
              />
            </Box>

            <Typography
              sx={{
                textAlign: "left",
                mt: 5,
                color: "#0066FF",
                fontWeight: 900,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Prof. Gafar Matanmi OYEYEMI
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              G.M. Oyeyemi is a Professor of Statistics, Physical Science
              Faculty, University of Ilorin, Nigeria. He had his higher
              education at University of Ilorin, where he obtained his
              Bachelor’s degree in Statistics in 1998 with second Class Upper
              Division. His passion for teaching and intellectual enquiries
              propelled him to further his education at the same University and
              had his Master’s and later Ph.D degrees in Statistics in 2003 and
              2009 respectively. He has successfully supervised numerous B.Sc.,
              M.Sc., M.Phil. and Ph.D. students and had many scholarly
              presentations and publications spanning local, national and
              international journal outlets. Prof. Oyeyemi specializes in Data
              Science, Multivariate Analysis and its Applications. Prof. Oyeyemi
              has held several posts and served in various committees at
              Department, Faculty and University levels. He has also served as
              committee organizing member for the 1st Virtual International
              Conference of the Faculty of Science, University of Ilorin during
              the covid year. He is currently the Head, Department of
              Statistics. Prof Oyeyemi is a member of many Academic Societies
              such as Nigerian Statistical Association (NSA), Science
              Association of Nigeria (SAN), International Biometrics Society
              (IBS) and International Association of Statistical Computing
              (IASC) among others. He could be reached through:
              gmoyeyemi@yahoo.com
              <br />
              <br />
            </Typography>
          </Box>
        </Box>

        <Box
          align="justify"
          sx={{
            mt: 4,
          }}
        >
          <Typography
            sx={{
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
            }}
          ></Typography>
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <img
                alt="Timothy"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329286/Picture3_vdbl1b.jpg"
              />
            </Box>

            <Typography
              sx={{
                textAlign: "left",
                mt: 5,
                color: "#0066FF",
                fontWeight: 900,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Prof. Timothy Olabisi OLATAYO
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Timothy O. OLATAYO is a Professor of Statistics specializing in
              time series econometrics. He holds a Diploma in Computer Science
              from the University of Ibadan Training Centre, Ibadan, Nigeria in
              the year 1998. In the year 1995, he had his first degree from the
              University of Ilorin, Ilorin, Nigeria in Statistics Department. He
              later proceeded to University of Ibadan, Nigeria to earn second
              and third degrees (Statistics) in the years 2000 and 2010
              respectively. Asides these, he also holds Masters in Information
              Technology from Obafemi Awolowo University, Ile-Ife, Nigeria in
              the year 2016.
              <br />
              <br />
              Currently, he’s a Professor of Statistics at the Department of
              Mathematical Sciences, Olabisi Onabanjo University, Ago-Iwoye,
              Nigeria. He is a fellow member of Royal Statistical Society
              (FRSS), London. Prof. Olatayo has more than 22 years of research
              and teaching experiences at the university level. He has graduated
              quite a number of students in all levels of degree including PhD,
              Masters, and B.Sc.
              <br />
              <br /> In short, he was once an acting head of department of
              Mathematical Sciences between 2016 and 2018. He is a member of
              some notable academic associations like Nigerian Statistical
              Association (NSA), Mathematical Association of Nigeria (MAN),
              American Association of Nigeria (AMA), International Biometric
              Society (IBS), Royal Statistical Society (RSS), Nigerian
              Association of Mathematical Physics (NAMP), Professional
              Statistician Society of Nigeria (PSSN), Nigerian Mathematical
              Association (NMA), to mention but a few. He has served as
              technical editor and reviewer to so many journal outlets.
              <br />
              <br />
              Has has written a notable number of books and book chapters
              including journal articles. He has attended many conferences both
              locally and internationally and even presented some papers. His
              area of research has contributed greatly to academia.
              <br />
              <br />
              He could be reached through: bisi.olatayo@oouagoiwoye.edu.ng
              <br />
              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
