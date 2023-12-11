import React from "react";
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
            Please, email us at link.
            {/* {Use this mail to produce the link above: osunrug@gmail.com } */}
          </Typography>
        </Box>

        <Box sx={{ mt: "10%" }}></Box>
        <hr />

        {/* about  */}
        <Box
          sx={{
            textAlign: "center",

            "@media (min-width: 0px)": {
              mt: 13,
              mb: 3,
            },

            "@media (min-width: 768px)": {
              mt: 15,
              mb: 5,
            },

            "@media (min-width: 992px)": {
              mt: 15,
              mb: 5,
            },
            "@media (min-width: 1200px)": {
              mt: 15,
              mb: 15,
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "left",
                color: "#0066FF",
                fontSize: "30px",
                fontWeight: 900,
                mb: 2,
                display: "flex",
                justifyContent: "center",
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
              Python, a versatile and powerful programming language, has
              witnessed an unprecedented surge in popularity in recent years.
              Known for its simplicity, readability, and broad range of
              applications, Python has become a language that truly caters to
              everyone. From beginners taking their first steps into the world
              of programming to seasoned developers working on complex projects,
              Python offers a welcoming and accessible environment. This
              training on "Python for Everyone: Applications and Applicability"
              aims to equip individuals from diverse backgrounds with the
              foundational knowledge and practical skills needed to harness
              Python's power in their respective fields.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "0.5px",
                mt: 5,
              }}
            >
              Python's journey began in the late 1980s when Guido van Rossum
              envisioned a programming language that would emphasize elegance,
              clarity, and ease of use. With a strong focus on simplicity and
              readability, Python's syntax was designed to resemble natural
              language, making it highly approachable even for those without
              prior coding experience. Python's popularity has grown
              exponentially, and it now boasts an expansive ecosystem of
              libraries, frameworks, and tools that cater to various domains and
              applications.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "0.5px",
                mt: 5,
              }}
            >
              Over the years, Python has become a go-to language for a wide
              range of tasks due to its versatility and adaptability. It is
              particularly well-suited for domains such as data analysis, web
              development, scientific computing, machine learning, automation,
              and more. Python's extensive libraries such as NumPy, Pandas,
              Matplotlib, and Scikit-learn provide powerful tools to simplify
              complex tasks and enable efficient workflows in these areas.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "0.5px",
                mt: 5,
              }}
            >
              One of the reasons behind Python's immense popularity is its
              emphasis on accessibility and learnability. Python's clean syntax,
              coupled with its extensive documentation and supportive community,
              makes it an ideal choice for beginners and experienced developers
              alike. With an increasing number of online resources, tutorials,
              and community-driven platforms, Python enables individuals from
              diverse backgrounds to embark on their programming journey and
              expand their skill set.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "0.5px",
                mt: 5,
              }}
            >
              The "Python for Everyone: Applications and Applicability" training
              aims to bridge the gap between Python's versatility and
              individuals seeking to leverage it for their specific needs. By
              providing comprehensive instruction on Python's fundamentals,
              along with exploring its diverse applications, the training equips
              participants to utilize Python effectively in their respective
              domains.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                mt: 5,
                lineHeight: "35px",
                letterSpacing: "0.5px",
              }}
            >
              Whether attendees aim to analyze complex datasets, build engaging
              web applications, harness the power of machine learning, or
              streamline their daily tasks through automation, Python offers the
              tools and flexibility to achieve these objectives. The training
              will inspire participants to explore the power of Python and
              embark on a journey of continuous learning and growth within the
              realm of programming and technology.
            </Typography>
            <Typography
              component="div"
              align="justify"
              sx={{
                mt: 5,
                lineHeight: "35px",
                letterSpacing: "0.5px",
              }}
            >
              In conclusion, the "Python for Everyone: Applications and
              Applicability" training opens doors to a world of possibilities.
              With its easy-to-understand syntax, broad range of libraries, and
              countless real-world applications, Python empowers individuals to
              bring their unique ideas to life and make a significant impact in
              their respective fields. By providing participants with the
              necessary skills and knowledge, this training invites them to
              embark on a transformative journey into the world of Python
              programming and its vast applicability.
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
              Aims and Objectives:
            </Typography>
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              The key aims and objectives of the training on "Python for
              Everyone: Applications and Applicability" are as follows:
            </Box>
            <Box>
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <FiberManualRecordIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Introduction to Python: "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Familiarize participants with the fundamental
                          concepts, syntax, and principles of Python
                          programming.
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
                    primary="Accessibility and Learnability:  "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Create a welcoming and inclusive learning environment,
                          ensuring Python is accessible to individuals from
                          various backgrounds, regardless of their prior
                          programming experience.
                        </Typography>
                        {"  "}
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
                    primary="Hands-on Practical Experience:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Provide participants with hands-on exercises, coding
                          challenges, and real-world examples to reinforce their
                          understanding and enhance their ability to apply
                          Python in practical scenarios.
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
                    primary="Collaboration and Learning Community:  "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Encourage collaboration, interaction, and
                          knowledge-sharing among participants, fostering a
                          supportive learning community.
                        </Typography>
                        {"  "}
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
                    primary="	Understanding Python's Applicability:  "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          : Explore the vast range of domains and applications
                          where Python excels, including data analysis, web
                          development, scientific computing, machine learning,
                          and automation.
                        </Typography>
                        {
                          ": Explore the vast range of domains and applications where Python excels, including data analysis, web development, scientific computing, machine learning, and automation."
                        }
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
                    primary="	Building Foundation Skills:  "
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Lay the groundwork for participants to advance their
                          Python skills beyond the training, empowering them to
                          pursue further learning and development.
                        </Typography>
                        {""}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
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
                Areas of Applications and Usefulness:
              </Typography>
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                Python's applications span a wide range of domains, making it an
                invaluable tool for diverse industries and fields. Some key
                areas where Python finds extensive use include:
              </Box>
              <Box>
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <LooksOneIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="	Data Analysis and Visualization: "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Python's libraries, such as Pandas, NumPy, and
                            Matplotlib, facilitate efficient data manipulation,
                            analysis, and visualization, supporting
                            decision-making and insights extraction from complex
                            datasets.
                          </Typography>
                          {""}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <LooksTwoIcon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Web Development:  "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            With frameworks like Django and Flask, Python
                            enables the building of dynamic, robust, and
                            scalable web applications, satisfying diverse
                            requirements for businesses of all sizes.
                          </Typography>
                          {""}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Looks3Icon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Scientific Computing and Research: "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Python, along with libraries like SciPy, provides a
                            rich ecosystem that supports scientific computing,
                            numerical simulations, and data-driven research in
                            fields such as physics, biology, and engineering.
                          </Typography>
                          {""}
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Looks4Icon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="	Machine Learning and Artificial Intelligence:  "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Python's libraries, such as Scikit-learn and
                            TensorFlow, empower the development and application
                            of machine learning algorithms and models, enabling
                            automation, prediction, and pattern recognition
                            tasks.
                          </Typography>
                          {"  "}
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Looks5Icon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Automation and Scripting:  "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Python's simplicity and versatility make it an
                            excellent choice for automating repetitive tasks and
                            scripting, enhancing productivity and efficiency
                            across various industries.
                          </Typography>
                          {""}
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Looks6Icon />
                    </ListItemAvatar>
                    <ListItemText
                      primary="	Education and Academia:   "
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Python's clean syntax and readability make it an
                            ideal language for teaching programming, enabling
                            educators to convey fundamental concepts effectively
                            and engage students in interactive coding
                            activities.
                          </Typography>
                          {""}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "0.5px",
              mt: 5,
            }}
          >
            Python's usefulness lies not only in its diverse applications but
            also in its large and active community. The Python community offers
            extensive support, resources, and collaboration opportunities to
            individuals of all skill levels. This training aims to empower
            participants with the fundamental knowledge and skills to harness
            Python's power in their respective domains. By providing a
            comprehensive introduction to Python and exploring its wide-ranging
            applications, the training equips participants with practical skills
            and inspires them to leverage Python's versatility in their
            professional pursuits.
          </Box>
          {/* Agenda */}

          <Box
            sx={{
              textAlign: "center",

              "@media (min-width: 0px)": {
                mt: 13,
                mb: 3,
              },

              "@media (min-width: 768px)": {
                mt: 15,
                mb: 5,
              },

              "@media (min-width: 992px)": {
                mt: 15,
                mb: 5,
              },
              "@media (min-width: 1200px)": {
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
                            Introduction to programming concepts, Installing
                            Python and setting up the development environment,
                            Running Python scripts and interactive mode, Basic
                            syntax, variables, and data types.
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
                            Control flow statements (if-else, loops). Lists,
                            tuples, and dictionaries, String manipulation,
                            Functions and modules, File handling and
                            input/output operations.
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
                            Introduction to popular Python libraries (NumPy,
                            Pandas, Matplotlib), Working with data, structures
                            and performing data analysis.
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
                            Visualization of data using Matplotlib, Introduction
                            to web frameworks (Django, Flask).
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
                            Regular expressions, Database connectivity using
                            Python, Introduction to web scraping.
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
                            Introduction to Python frameworks like Django and
                            Flask for building web applications. Understanding
                            the basics of web development, routing, and creating
                            interactive web interfaces.
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
                            Introduction to Machine Learning: Overview of
                            machine learning concepts, algorithms, and Python
                            libraries such as Scikit-learn. Building and
                            evaluating machine learning models for
                            classification and regression tasks.
                          </Typography>
                          {"  "}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box sx={{ mt: "10%" }}></Box>
            <hr />
            {/* Facilitator */}
            <Box
              sx={{
                textAlign: "center",

                "@media (min-width: 0px)": {
                  mt: 13,
                  mb: 3,
                },

                "@media (min-width: 768px)": {
                  mt: 15,
                  mb: 5,
                },

                "@media (min-width: 992px)": {
                  mt: 15,
                  mb: 5,
                },
                "@media (min-width: 1200px)": {
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
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "left",
                    color: "#0066FF",
                    fontSize: "30px",
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Facilitators
                </Typography>
                <Box
                  align="justify"
                  sx={{
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  The following facilitators have been consulted to speak to and
                  train the participants during the five-day physical training
                  workshop:
                </Box>
              </Box>

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
                  <img alt="Timothy" src="./images/fresh.png" />
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
                  Prof. Longe Olumide BABATOPE
                </Typography>
                <Typography
                  align="justify"
                  sx={{
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  Professor Longe Olumide Babatope (MIEE. MNCS, MISOC, MirLab,
                  MIEE, MACM, MISACA, FASI, FSMART) holds a PhD degree in
                  Computer Science (Information Systems Security Specialization)
                  from the University of Benin, Benin City, Nigeria. A recipient
                  of several international awards, he is an alumnus UI-MacArthur
                  Scholar and an alumnus MIT Scholar. He was also a recipient of
                  the prestigious Fulbright SIR Fellowship as well as the highly
                  coveted Heidelberg Nobel Laureate Forum Fellowship in Germany.
                  He is an endowed Professor of Information Systems & Cyber
                  Security Education with the ICT University Foundation USA, A
                  Senior Member of the prestigious Institute of Electrical and
                  Electronics Engineers (IEEE), he is Seasoned in conceiving
                  management information systems theories (evidenced by
                  scholastic publications), and initiatives in ICT diffusion,
                  innovation and uptake. Prof. Longe’s research works on cyber
                  security and allied domains are very highly cited and has
                  supported innovative developments globally earning him
                  recognitions as a pioneering scholar in understanding cyber
                  security causation, apprehension and treatments. He has served
                  in several universities in the capacity of Head of Department,
                  Dean, Director and Member of Governing Council. He has
                  supervised and examined several PhDs as well as Masters and
                  undergraduates in their numbers. He is an external examiner
                  and international collaborator to several Universities
                  globally. He has been named by Microsoft research as one of
                  the leading experts on privacy and information systems
                  research. He is on the Editorial Board of several multiple
                  highly rated international Journals and his works have been
                  cited and quoted several thousand times. Professor Longe
                  Olumide is also known for his mentoring skills and dynamism as
                  well as his selfless approach to grooming the younger
                  generation. He is currently the Dean of the Faculty of
                  Computational Sciences & Informatics, Academic City University
                  College, Accra, Ghana.{" "}
                  <Typography
                    display="inline"
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    He will be available in Nigeria to take some courses during
                    the workshop.
                  </Typography>
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 20,
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <img alt="Timothy" src="./images/tim.png" />
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
                  Timothy A. OGUNLEYE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  (Data Scientist and Python & R Programmer)
                </Typography>
                <Typography
                  align="justify"
                  sx={{
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  Timothy is an R language expert with a sound knowledge of SQL
                  and Python programming. He’s trained by the Department of
                  Computing, Macquarie University, the City of Sydney,
                  Australia. He is well-grounded in Statistics and Mathematics.
                  He started his educational pursuits from the Federal
                  Polytechnic, Ede, Nigeria through the better by far University
                  of Ilorin, Nigeria for both the diploma certification and all
                  the degrees earned. Timothy has worked for a number of local
                  and international organizations including UNDP, NAPTIP,
                  NAICOM, LBS, to mention but a few. He’s also an experienced
                  academic university staff. Currently, he’s a lecturer at the
                  Department of Statistics, Osun State University, Osogbo,
                  Nigeria.
                </Typography>

                <Typography sx={{ textAlign: "left", mt: 3 }}>
                  Contacts:{" "}
                  <Typography
                    display="inline"
                    component={Link}
                    href="mailto:   osunrug@mail.com?subject=Feedback &body=Thank you for your feedback, I will like to ..."
                  >
                    osunrug@gmail.com
                  </Typography>{" "}
                  ;{" "}
                  <Typography
                    display="inline"
                    component={Link}
                    href="mailto:    thompsondx@gmail.com?subject=Feedback &body=Thank you for your feedback, I will like to ..."
                  >
                    thompsondx@gmail.com
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 20,
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <img alt="Timothy" src="./images/boy.png" />
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
                  Uche Victor NKUDU
                </Typography>
                <Typography
                  align="justify"
                  sx={{
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  Victor, a data scientist per excellence, loves connecting with
                  people in a learning context and mentoring students and enjoys
                  team teaching, he worked on designing mathematical tasks that
                  nurture students' problem solving and mathematical reasoning
                  capacities. He is a practising Data Scientist, financial
                  engineer, mathematician and a statistician and to crown it
                  all, a lover of education. He is a certified R programmer. He
                  has over 18 years of practicing mathematics from simple to
                  complex levels. He received an HND in Statistics from Yaba
                  College of Technology and B.Sc. (Ed.) in Mathematics and M.Sc.
                  in Pure Mathematics from University of Lagos, and M.Sc. degree
                  in Financial Engineering from World Quant University, USA. He
                  handles the following set of software tools:{" "}
                  <Typography
                    display="inline"
                    sx={{
                      fontWeight: "900",
                    }}
                  >
                    Python
                  </Typography>
                  , R syntax, SPSS, AMOS, EVIEW, MINITAB, QSB+, TORA, STATA,
                  SAS, SHAZAM, OXMETRIC, MATLAB, SAGE, MATHEMATICA, SQL, Power
                  Bi, and TABLEAU. He is very versatile in programming.
                  Currently, Victor is the Executive Director of Tim-R
                  Programming Consult, Nigeria.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 20,
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <img alt="sal" src="./images/sal.png" />
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
                  Ayobami M. SALAU
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  Data Scientist and Python Programming Expert
                </Typography>
                <Typography
                  align="justify"
                  sx={{
                    mt: 2,
                    lineHeight: "35px",
                    letterSpacing: "1px",
                  }}
                >
                  Ayobami is an expert in both R and Python programming
                  languages. He studied Mathematics at Lagos State University,
                  Nigeria. He has done many projects with both R and Python. He
                  loves creating new things with programming syntax. He is
                  well-grounded in programming and web development. Currently, a
                  team member at Tim-R Programming Consult, Nigeria.
                </Typography>
              </Box>

              <Box sx={{ mt: "10%" }}></Box>
              <hr />

              {/* code of conduct */}
              <Box
                sx={{
                  textAlign: "center",

                  "@media (min-width: 0px)": {
                    mt: 13,
                    mb: 3,
                  },

                  "@media (min-width: 768px)": {
                    mt: 15,
                    mb: 5,
                  },

                  "@media (min-width: 992px)": {
                    mt: 15,
                    mb: 5,
                  },
                  "@media (min-width: 1200px)": {
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
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "left",
                      color: "#0066FF",
                      fontSize: "30px",
                      fontWeight: 900,
                      mb: 2,
                    }}
                  >
                    Code of Conduct
                  </Typography>
                  <Box
                    align="justify"
                    sx={{
                      lineHeight: "35px",
                      letterSpacing: "1px",
                    }}
                  >
                    Behaviours that are disrespectful to workshop’s attendees
                    and sponsors, or intimidate, exclude or cause discomfort to
                    others will not be tolerated. We will not tolerate
                    discrimination or harassment based on characteristics that
                    include, but are not limited to: age, disability, gender
                    reassignment, marriage and civil partnership, pregnancy and
                    parenthood, race, religion or belief (or lack thereof),
                    gender identity and expression, sexual orientation,
                    technical choices, experience level or any other dimension
                    of diversity.
                  </Box>

                  <Box
                    align="justify"
                    sx={{
                      lineHeight: "35px",
                      letterSpacing: "1px",
                      mt: 5,
                    }}
                  >
                    The team members as well as facilitators are responsible for
                    the enforcement of this Code of Conduct and for dealing with
                    misconduct or violations to this policy. Facilitators and
                    workshop assistants (if any) are expected to assist with the
                    enforcement of the Code of Conduct in their respective
                    capacities. By participating, individuals indicate their
                    acceptance of the procedures by which the P-value RUG
                    resolves any Code of Conduct incidents, which might include
                    storage and processing of their personal information.
                  </Box>
                </Box>

                <Box>
                  <Typography
                    align="justify"
                    sx={{
                      lineHeight: "35px",
                      letterSpacing: "1px",
                      mt: 10,
                    }}
                  >
                    Expected behaviour: All participants in our events and
                    communications are expected to show respect and courtesy to
                    others and all interactions should be professional, both
                    online and in-person. The following kinds of behaviours in
                    all our events and platforms are encouraged:
                  </Typography>
                  <Box>
                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                      <nav aria-label="main mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Focus on what is best for the workshop community
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Show courtesy and respect towards every member
                                of the workshop
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Be respectful of different viewpoints and
                                experiences
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Gracefully accept constructive criticism
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Use welcoming and inclusive language
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Adhere to the Code of Conduct and report
                                incidences promptly
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Be direct, but professional
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Ask for consent and respect people’s boundaries
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Be aware of the dynamics of power and privilege
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Be mindful of how much time and space you are
                                taking up.
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      lineHeight: "35px",
                      letterSpacing: "1px",
                      mt: 10,
                    }}
                  >
                    Unacceptable behaviour: Examples of unacceptable behaviour
                    include the following but not limited:
                  </Typography>
                  <Box>
                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                      <nav aria-label="main mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Publication of private communication without
                                consent
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>Excessive swearing</ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>Improper gestures</ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>Use of stereotypes</ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Incitement to violence, suicide or self-harm
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Sustained disruptions of talks, workshops events
                                or communications
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                The display of violent images
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Causing someone to fear for their safety through
                                stalking, following, intimidation, / threatening
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Unwelcome and repeated flirtations,
                                propositions, advances, or other sexual
                                attention
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                including gratuitous or off-topic sexual images
                                or behaviour
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Non-consensual or unwelcome physical contact
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Sexist, racist, homophobic, transphobic,
                                ableist, or exclusionary jokes
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Continuing to initiate interaction with someone
                                after being explicitly asked to stop
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Offensive, insulting, derogatory, or degrading
                                remarks
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Demands for sexual favours in exchange for
                                favourable or preferential treatment
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <KeyboardArrowRightIcon />
                              </ListItemIcon>
                              <ListItemText>
                                Advocating for, or encouraging any of the above
                                behaviours
                              </ListItemText>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Box>
                  </Box>
                </Box>

                <Box
                  align="justify"
                  sx={{
                    lineHeight: "35px",
                    letterSpacing: "1px",
                    mt: 10,
                  }}
                >
                  <Box
                    display="inline"
                    sx={{
                      fontWeight: "800",
                    }}
                  >
                    Consequences of Unacceptable Behaviour:{" "}
                  </Box>
                  Participants who are asked to stop any inappropriate behaviour
                  are expected to comply immediately. This applies to all our
                  events, either online or in-person. If an event participant
                  engages in behaviour that violates this policy, the organizers
                  may warn the offender, ask them to leave the event or
                  workshop, or engage a committee to investigate the Code of
                  Conduct violation and impose appropriate sanctions. Kindly
                  report any complaint to:{" "}
                  <Box
                    display="inline"
                    sx={{
                      textAlign: "left",
                      mt: 5,
                    }}
                  >
                    <Box
                      display="inline"
                      component={Link}
                      href="mailto:   osunrug@mail.com?subject=Feedback &body=Thank you for your feedback, I will like to ..."
                      sx={{
                        fontWeight: "800",
                      }}
                    >
                      osunrug@gmail.com
                    </Box>{" "}
                    and/or{" "}
                    <Box
                      display="inline"
                      component={Link}
                      href="mailto:    thompsondx@gmail.com?subject=Feedback &body=Thank you for your feedback, I will like to ..."
                      sx={{
                        fontWeight: "800",
                      }}
                    >
                      thompsondx@gmail.com
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    textAlign: "left",
                    mt: 10,
                  }}
                >
                  Best wishes from all of us at{" "}
                  <Box
                    display="inline"
                    sx={{
                      fontWeight: "800",
                    }}
                  >
                    Tim-R Programming Consult, Nigeria!
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 5,
                    textAlign: "left",
                    fontWeight: "800",
                  }}
                >
                  Team Lead
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
                            src="https://res.cloudinary.com/pro-solve/image/upload/v1690679313/pic13_s7np4e.png"
                          />
                        </Item>
                      </Grid>
                      <Grid item xs={8}>
                        <Item>
                          <img
                            style={{ maxWidth: "100%" }}
                            alt="pic"
                            src="https://res.cloudinary.com/pro-solve/image/upload/v1690679314/pic14_bicjvy.png"
                          />
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              {/* end of code of conduct */}

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
                          src="https://res.cloudinary.com/pro-solve/image/upload/v1690678873/pic12_gprith.png"
                        />
                      </Item>
                    </Grid>
                    <Grid item xs={8}>
                      <Item>
                        <img
                          style={{ maxWidth: "100%" }}
                          alt="pic"
                          src="https://res.cloudinary.com/pro-solve/image/upload/v1690678878/pic11_i2cgil.png"
                        />
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>

            {/* end of Facilitator */}

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
          {/* end of agenda */}

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
                      src="https://res.cloudinary.com/pro-solve/image/upload/v1690678136/pic7_c7qxg3.png"
                    />
                  </Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="pic"
                      src="https://res.cloudinary.com/pro-solve/image/upload/v1690678136/pic6_afoegu.png"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* end of about */}

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
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
