import React from "react";

import { Fade } from "react-slideshow-image";
import Header from "../components/Header";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
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
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import Looks6Icon from "@mui/icons-material/Looks6";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ListItemButton from "@mui/material/ListItemButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Facilitate from "./Facilitate";
const Home = () => {
  const imageURL =
    "https://cdn.pixabay.com/photo/2023/05/20/20/39/european-roller-8007340__340.jpg";
  const Background = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    // height: "400px",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  };
  const slideImages = [
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702269390/jason-goodman-vbxyFxlgpjM-unsplash_p3j3ox.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702272436/austin-distel-rxpThOwuVgE-unsplash_iubdmq.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702272568/kevin-bhagat-zNRITe8NPqY-unsplash_yglmhy.jpg",
      caption: "",
    },
  ];
  return (
    <>
      <Header />
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* <img
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
          height="100vh"
          width="100vw"
          alt="this"
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702269390/jason-goodman-vbxyFxlgpjM-unsplash_p3j3ox.jpg"
        /> */}
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
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
            mb: 15,
          },
        }}
      >
        <Box
          sx={{
            mt: 10,
          }}
        ></Box>

        <Box>
          <Typography
            sx={{
              textAlign: "left",
              color: "#0066FF",
              fontSize: "20px",
              mb: 2,
              mt: 10,
            }}
          ></Typography>
          <Typography
            align="justify"
            component="div"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Welcome to the official website of Osun R User Group, Nigeria - the
            Center for Computational Statistics and Data Science. As a leading
            hub for innovative research and specialized training, we are
            dedicated to advancing the frontiers of computational statistics and
            data science/machine learning. Our center serves as a collaborative
            platform where researchers, scholars, and aspiring data scientists
            converge to explore cutting-edge methodologies, develop new
            statistical tools, and harness the power of data-driven insights.
          </Typography>
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
            Our Mission
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            At the Center for Computational Statistics and Data Science (Osun
            RUG), our mission is to foster a dynamic environment where
            data-driven research thrives, and where emerging talents are
            equipped with the latest tools and methodologies essential for
            success in the digital era. We are committed to pushing the
            boundaries of statistical analysis, empowering researchers and
            practitioners through specialized training, and making impactful
            contributions to the broader scientific community.
          </Typography>
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
            Our Vision
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Our vision is to be a globally recognized center of excellence in
            the field of computational statistics and data science. We aspire to
            be a catalyst for pioneering research breakthroughs, a premier
            provider of specialized data science education, and a dedicated
            advocate for responsible and impactful data-driven decision-making.
            We envision a future where our center stands as a beacon of ethical
            research, intellectual curiosity, and data-driven innovation at the
            intersection of science, technology, and society.
          </Typography>
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
            Our Value Statement
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            *Excellence: We value excellence in all aspects of our work, driving
            us to pursue the highest standards in research, education, and
            ethical practice.
            <br />
            *Integrity: We uphold the principles of integrity, transparency, and
            ethical conduct in our research activities, educational initiatives,
            and collaborative endeavors.
            <br />
            *Innovation: We are committed to fostering a nurturing environment
            that encourages innovative thinking, empowers creativity, and
            embraces technological advancements in computational statistics and
            data science.
            <br />
            *Diversity and Inclusion: We celebrate diversity, promote equity,
            and foster inclusivity within our community, acknowledging the rich
            tapestry of backgrounds, experiences, and perspectives that drive
            our collective success.
          </Typography>
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
            Our Objectives
          </Typography>

          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              *Research Excellence: Drive groundbreaking research in
              computational statistics, machine learning, and data analysis,
              contributing to advancements in statistical theory and practice.
              <br />
              *Education and Training: Provide comprehensive, industry-relevant
              data science training programs, fostering a new generation of
              skilled practitioners and researchers in the field.
              <br />
              *Community Engagement: Foster collaborative partnerships and
              engage with academic, professional, and public communities to
              share knowledge, drive innovation, and impact societal change
              through data-driven insights.
              <br />
              *Ethical Practice: Uphold the highest standards of ethical
              conduct, data privacy, and research integrity in all our
              activities, ensuring the responsible and ethical use of data and
              statistical methodologies.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            color: "#0066FF",
            fontSize: "20px",
            mt: 5,
          }}
        >
          Our Scope
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            // sx={{
            //   mt: 5,
            //   mb: 5,
            // }}
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Our training programs cover a broad spectrum of topics, including
            but not limited to:
            <br />
            *Machine Learning: Advanced techniques in supervised and
            unsupervised learning, deep learning, and neural network
            applications.
            <br />
            *Statistical Programming: Proficiency in R, Python, and other
            statistical software, enabling participants to perform sophisticated
            data analysis and modeling.
            <br />
            *Big Data Analytics: Strategies for handling and analyzing complex,
            large-scale datasets using distributed computing environments and
            cloud-based platforms.
            <br />
            *Data Visualization: Effective techniques for visually communicating
            quantitative and qualitative insights derived from data analysis.
            <br />
            *Statistical Modeling: Advanced statistical modeling approaches for
            predictive analytics, forecasting, and hypothesis testing across
            various domains.
            <br />
            *Ethical Data Use: A focus on understanding ethical principles, data
            privacy regulations, and responsible data use in research, industry,
            and policy-making applications. Through our comprehensive training
            scope, we aim to equip participants with the theoretical foundation,
            practical skills, and ethical considerations necessary for success
            in the dynamic, ever-evolving field of computational statistics and
            data science. In a nutshell, we offer comprehensive training
            programs and workshops designed to equip individuals (including
            undergraduate and postgraduate students as well as members of staff
            of machine learning inclined organizations) with the advanced skills
            needed in the rapidly evolving landscape of data science. Our
            courses cover a spectrum of topics including machine learning, big
            data analytics, statistical programming, and specialized
            applications of computational statistics. With a blend of
            theoretical foundations and practical applications, our training
            initiatives cultivate leaders in the field of data science.
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: "left",
            lineHeight: "35px",
            letterSpacing: "1px",
          }}
        >
          <Typography
            display="inline"
            sx={{
              fontWeight: "900",
            }}
          >
            NB:{" "}
          </Typography>
          Evidence of payments (in form of duly signed and stamped receipts)
          will be issued to all registered participants on arrival at the venue
          of the training workshop.
        </Box>

        <Box sx={{ mt: 10 }}></Box>
        <Fade>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              {/* <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div> */}
              <img style={{ width: "100%" }} src={slideImage.url} />
            </div>
          ))}
        </Fade>

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
            Our Research Excellence
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Our center (Osun RUG) is at the forefront of groundbreaking research
            in computational statistics and data science. From cutting-edge
            algorithm development to novel statistical models, our researchers
            are dedicated to addressing complex challenges across diverse
            disciplines. We focus on driving forward the frontiers of
            statistical theory and application, and our collaborative
            partnerships extend our impact to a wide range of fields, from
            healthcare and environmental science to finance and social
            analytics.
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
            Community Collaboration
          </Typography>
          <Typography
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            As advocates for open collaboration and knowledge-sharing, our
            center actively engages with the academic and professional
            communities, both locally and globally. We organize symposiums,
            conferences, and forums to facilitate the exchange of ideas, foster
            networking opportunities, and inspire new collaborative research
            initiatives. We encourage the integration of diverse perspectives
            and expertise to propel data science and statistical research
            forward.
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
            Real-World Impact
          </Typography>
          <Typography sx={{ lineHeight: "35px", letterSpacing: "1px" }}>
            The research conducted at our center is not limited to theoretical
            exploration. We prioritize translating our findings into practical
            applications with tangible real-world impact. From guiding
            healthcare decisions to informing environmental policy and
            supporting innovative technological advancements, our dedication to
            actionable research sets us apart in the world of computational
            statistics and data science.
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
            Join Our Community
          </Typography>
          <Typography sx={{ lineHeight: "35px", letterSpacing: "1px" }}>
            We invite researchers, students, industry professionals, and data
            enthusiasts to become part of our vibrant community. By joining
            forces with the Center for Computational Statistics and Data
            Science, you gain access to valuable resources, workshops, and
            networking opportunities aimed at expanding your expertise and
            contributing to the advancement of statistical research and data
            science. Explore our website to discover upcoming events, research
            highlights, training opportunities, and resources that are shaping
            the future of computational statistics and data science. We look
            forward to collaborating with you as we contribute to the
            transformative possibilities of data-driven research and education.
            Please, email us at <a href="mailto:osunrug@gmail.com">link</a>.
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
            Coordinator and Convener
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702273475/Picture2_pnegkd.jpg"
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
              Timothy A. Ogunleye: A Visionary Statistician and Data Scientist
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Professor Longe Olumide Babatope (MIEE. MNCS, MISOC, MirLab, MIEE,
              MACM, MISACA, FASI, FSMART) holds a PhD degree in Computer Science
              (Information Systems Security Specialization) from the University
              of Benin, Benin City, Nigeria. A recipient of several
              international awards, he is an alumnus UI-MacArthur Scholar and an
              alumnus MIT Scholar. He was also a recipient of the prestigious
              Fulbright SIR Fellowship as well as the highly coveted Heidelberg
              Nobel Laureate Forum Fellowship in Germany. He is an endowed
              Professor of Information Systems & Cyber Security Education with
              the ICT University Foundation USA, A Senior Member of the
              prestigious Institute of Electrical and Electronics Engineers
              (IEEE), he is Seasoned in conceiving management information
              systems theories (evidenced by scholastic publications), and
              initiatives in ICT diffusion, innovation and uptake. Prof. Longe’s
              research works on cyber security and allied domains are very
              highly cited and has supported innovative developments globally
              earning him recognitions as a pioneering scholar in understanding
              cyber security causation, apprehension and treatments. He has
              served in several universities in the capacity of Head of
              Department, Dean, Director and Member of Governing Council. He has
              supervised and examined several PhDs as well as Masters and
              undergraduates in their numbers. He is an external examiner and
              international collaborator to several Universities globally. He
              has been named by Microsoft research as one of the leading experts
              on privacy and information systems research. He is on the
              Editorial Board of several multiple highly rated international
              Journals and his works have been cited and quoted several thousand
              times. Professor Longe Olumide is also known for his mentoring
              skills and dynamism as well as his selfless approach to grooming
              the younger generation. He is currently the Dean of the Faculty of
              Computational Sciences & Informatics, Academic City University
              College, Accra, Ghana.{" "}
              <Typography
                display="inline"
                sx={{
                  fontWeight: 900,
                }}
              >
                He will be available in Nigeria to take some courses during the
                workshop.
              </Typography>
            </Typography>
          </Box>
          {/* <Typography sx={{ lineHeight: "35px", letterSpacing: "1px" }}>
            We invite researchers, students, industry professionals, and data
            enthusiasts to become part of our vibrant community. By joining
            forces with the Center for Computational Statistics and Data
            Science, you gain access to valuable resources, workshops, and
            networking opportunities aimed at expanding your expertise and
            contributing to the advancement of statistical research and data
            science. Explore our website to discover upcoming events, research
            highlights, training opportunities, and resources that are shaping
            the future of computational statistics and data science. We look
            forward to collaborating with you as we contribute to the
            transformative possibilities of data-driven research and education.
            Please, email us at link.
            {/* {Use this mail to produce the link above: osunrug@gmail.com } */}
          {/* </Typography>  */}
        </Box>

        <Box sx={{ mt: "10%" }}></Box>
        <hr />

        {/* about  */}

        {/* end of about */}

        {/* <Box
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
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690676725/pic1_uz3pvf.png"
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="pic"
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690677309/pic_3_wbrvyy.png"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box> */}

        {/* <Box
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
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690677504/pic4_oqpfjc.png"
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="pic"
                    src="https://res.cloudinary.com/pro-solve/image/upload/v1690677596/pic5_j61oyt.png"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box> */}
      </Box>

      <Footer />
    </>
  );
};

export default Home;
