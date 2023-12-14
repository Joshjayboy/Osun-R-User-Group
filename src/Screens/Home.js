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
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702593088/WhatsApp_Image_2023-12-14_at_1.33.38_AM_g9nj59.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702593135/WhatsApp_Image_2023-12-14_at_1.25.37_AM_mbq1af.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702593134/WhatsApp_Image_2023-12-14_at_1.32.27_AM_q4082u.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702587866/man_zwgkqw.jpg",
      caption: "",
    },
    {
      url: "https://res.cloudinary.com/pro-solve/image/upload/v1702593133/WhatsApp_Image_2023-12-14_at_1.25.32_AM_pm7jn1.jpg",
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
        {/* abobut timothy */}
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              mt: 5,
              color: "#cb9c0e",
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
            Timothy A. Ogunleye, a seasoned statistician and visionary data
            scientist, combines a robust academic foundation, extensive industry
            experience, and a passion for advancing statistical computing in
            Africa. His journey began at the prestigious University of Ilorin,
            Nigeria, where he specialized in Quantitative Modelling (Machine
            Learning), Econometrics, Psychometrics, and Morphometrics,
            showcasing a deep interest in Data Science, Biostatistics, Designs
            of Experiment, and Applied Statistics. His comprehensive expertise
            encompasses a profound understanding of Statistics and Mathematics,
            establishing him as a respected authority in the field.
            <br />
            <br />
            Armed with a profound knowledge of statistical analysis and
            computational methods, Timothy is an expert in the R language,
            complemented by a strong command of SQL and Python programming
            languages. His dedication to expanding his skills led him to the
            Department of Computing at Macquarie University, the City of Sydney,
            Australia, where he received official certification as an R and
            Python Programmer in the realm of Data Science. These credentials
            attest to his unwavering commitment to mastering cutting-edge
            technologies and analytical tools within the data science landscape.
            <br />
            <br />
            Timothy’s educational pursuits initially commenced at the Federal
            Polytechnic, Ede, Nigeria, where he earned both National Diploma
            (ND) and Higher National Diploma (HND) certificates in Statistics,
            laying a solid academic groundwork for his future accomplishments.
            Notably, he currently serves as the Secretary-General of the
            International Association for Statistical Computing, African Members
            Group (IASC-AMG), demonstrating his influential presence in the
            statistical community on an international level.
            <br />
            <br /> Boasting over 16 years of extensive experience spanning
            across industries and academia, Timothy has etched a distinguished
            career journey during which he has contributed significantly to both
            scholarly and professional domains. His intellectual prowess is
            reflected in his extensive publication record, comprising numerous
            academic papers that have made a noteworthy impact both locally and
            on the global stage. Furthermore, he is recognized for his profound
            expertise as a monitoring and evaluation (M&E) expert, showcasing an
            unparalleled aptitude for imparting knowledge as a distinguished
            educator and tutor.
            <br />
            <br /> In minding the significance of knowledge dissemination and
            community enrichment, Timothy takes on leadership roles as the
            coordinator of the Osun R Users Group (Osun RUG), Nigeria, and as
            the co-founder of Tim-R Programming Consult, Nigeria — two
            non-profit, non-governmental organizations dedicated to nurturing a
            thriving community of statisticians and data enthusiasts. His
            commitment to the advancement of statistical computing techniques is
            apparent, reflecting his profound passion for driving impactful
            change and sustainable progress within the statistical and data
            science domains.
            <br />
            <br />
            With an inherent ability to grasp complex concepts swiftly and a
            proven aptitude for rapid assimilation, Timothy’s role as a lecturer
            at the Department of Statistics, Faculty of Basic and Applied
            Sciences, College of Science, Engineering and Technology (SET) at
            Osun State University, Osogbo, Nigeria, further underscores his
            commitment to excellence in education and his dedication to shaping
            the future generation of statistical and data science practitioners.
            <br />
            <br /> For collaborative endeavors, inquiries, or professional
            engagements, Timothy can be reached via the following email
            addresses:
            <br />
            <br /> *<a href="mailto:osunrug@rug.org.ng">osunrug@rug.org.ng</a>
            <br />
            <br />*
            <a href="mailto:timothy.ogunleye@uniosun.edu.ng">
              timothy.ogunleye@uniosun.edu.ng
            </a>
            <br />
            <br />
            Timothy A. Ogunleye stands as a pivotal figure in spearheading the
            advancement of statistical computing and data science and embodies a
            steadfast commitment to the continual evolution and innovation
            within these critical domains.
            <br />
            <br />
          </Typography>
        </Box>
        {/* end of about timothy */}

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
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Excellence:
            </span>{" "}
            We value excellence in all aspects of our work, driving us to pursue
            the highest standards in research, education, and ethical practice.
            <br />
            <span
              style={{
                fontWeight: 800,
              }}
            >
              Integrity:
            </span>{" "}
            We uphold the principles of integrity, transparency, and ethical
            conduct in our research activities, educational initiatives, and
            collaborative endeavors.
            <br />
            <span
              style={{
                fontWeight: 800,
              }}
            >
              Innovation:
            </span>{" "}
            We are committed to fostering a nurturing environment that
            encourages innovative thinking, empowers creativity, and embraces
            technological advancements in computational statistics and data
            science.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Diversity and Inclusion:
            </span>{" "}
            We celebrate diversity, promote equity, and foster inclusivity
            within our community, acknowledging the rich tapestry of
            backgrounds, experiences, and perspectives that drive our collective
            success.
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
              <span
                style={{
                  fontWeight: 900,
                }}
              >
                Research Excellence:
              </span>{" "}
              Drive groundbreaking research in computational statistics, machine
              learning, and data analysis, contributing to advancements in
              statistical theory and practice.
              <br />
              <span
                style={{
                  fontWeight: 900,
                }}
              >
                Education and Training:
              </span>{" "}
              Provide comprehensive, industry-relevant data science training
              programs, fostering a new generation of skilled practitioners and
              researchers in the field.
              <br />
              <span
                style={{
                  fontWeight: 900,
                }}
              >
                Community Engagement:
              </span>{" "}
              Foster collaborative partnerships and engage with academic,
              professional, and public communities to share knowledge, drive
              innovation, and impact societal change through data-driven
              insights.
              <br />
              <span
                style={{
                  fontWeight: 900,
                }}
              >
                Ethical Practice:
              </span>{" "}
              Uphold the highest standards of ethical conduct, data privacy, and
              research integrity in all our activities, ensuring the responsible
              and ethical use of data and statistical methodologies.
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
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Our training programs cover a broad spectrum of topics, including
            but not limited to:
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Machine Learning:
            </span>{" "}
            Advanced techniques in supervised and unsupervised learning, deep
            learning, and neural network applications.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Statistical Programming:
            </span>{" "}
            Proficiency in R, Python, and other statistical software, enabling
            participants to perform sophisticated data analysis and modeling.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Big Data Analytics:
            </span>{" "}
            Strategies for handling and analyzing complex, large-scale datasets
            using distributed computing environments and cloud-based platforms.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Data Visualization:
            </span>{" "}
            Effective techniques for visually communicating quantitative and
            qualitative insights derived from data analysis.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Statistical Modeling:
            </span>{" "}
            Advanced statistical modeling approaches for predictive analytics,
            forecasting, and hypothesis testing across various domains.
            <br />
            <span
              style={{
                fontWeight: 900,
              }}
            >
              Ethical Data Use:
            </span>{" "}
            A focus on understanding ethical principles, data privacy
            regulations, and responsible data use in research, industry, and
            policy-making applications. Through our comprehensive training
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
                color: "#cb9c0e",
                fontWeight: 900,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Timothy A. Ogunleye: A Visionary Statistician and Data Scientist
            </Typography>
            {/* <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Timothy A. Ogunleye, a seasoned statistician and visionary data
              scientist, combines a robust academic foundation, extensive
              industry experience, and a passion for advancing statistical
              computing in Africa. His journey began at the prestigious
              University of Ilorin, Nigeria, where he specialized in
              Quantitative Modelling (Machine Learning), Econometrics,
              Psychometrics, and Morphometrics, showcasing a deep interest in
              Data Science, Biostatistics, Designs of Experiment, and Applied
              Statistics. His comprehensive expertise encompasses a profound
              understanding of Statistics and Mathematics, establishing him as a
              respected authority in the field.
              <br />
              <br />
              Armed with a profound knowledge of statistical analysis and
              computational methods, Timothy is an expert in the R language,
              complemented by a strong command of SQL and Python programming
              languages. His dedication to expanding his skills led him to the
              Department of Computing at Macquarie University, the City of
              Sydney, Australia, where he received official certification as an
              R and Python Programmer in the realm of Data Science. These
              credentials attest to his unwavering commitment to mastering
              cutting-edge technologies and analytical tools within the data
              science landscape.
              <br />
              <br />
              Timothy’s educational pursuits initially commenced at the Federal
              Polytechnic, Ede, Nigeria, where he earned both National Diploma
              (ND) and Higher National Diploma (HND) certificates in Statistics,
              laying a solid academic groundwork for his future accomplishments.
              Notably, he currently serves as the Secretary-General of the
              International Association for Statistical Computing, African
              Members Group (IASC-AMG), demonstrating his influential presence
              in the statistical community on an international level.
              <br />
              <br /> Boasting over 16 years of extensive experience spanning
              across industries and academia, Timothy has etched a distinguished
              career journey during which he has contributed significantly to
              both scholarly and professional domains. His intellectual prowess
              is reflected in his extensive publication record, comprising
              numerous academic papers that have made a noteworthy impact both
              locally and on the global stage. Furthermore, he is recognized for
              his profound expertise as a monitoring and evaluation (M&E)
              expert, showcasing an unparalleled aptitude for imparting
              knowledge as a distinguished educator and tutor.
              <br />
              <br /> In minding the significance of knowledge dissemination and
              community enrichment, Timothy takes on leadership roles as the
              coordinator of the Osun R Users Group (Osun RUG), Nigeria, and as
              the co-founder of Tim-R Programming Consult, Nigeria — two
              non-profit, non-governmental organizations dedicated to nurturing
              a thriving community of statisticians and data enthusiasts. His
              commitment to the advancement of statistical computing techniques
              is apparent, reflecting his profound passion for driving impactful
              change and sustainable progress within the statistical and data
              science domains.
              <br />
              <br />
              With an inherent ability to grasp complex concepts swiftly and a
              proven aptitude for rapid assimilation, Timothy’s role as a
              lecturer at the Department of Statistics, Faculty of Basic and
              Applied Sciences, College of Science, Engineering and Technology
              (SET) at Osun State University, Osogbo, Nigeria, further
              underscores his commitment to excellence in education and his
              dedication to shaping the future generation of statistical and
              data science practitioners.
              <br />
              <br /> For collaborative endeavors, inquiries, or professional
              engagements, Timothy can be reached via the following email
              addresses:
              <br />
              <br /> *<a href="mailto:osunrug@rug.org.ng">osunrug@rug.org.ng</a>
              <br />
              <br />*
              <a href="mailto:timothy.ogunleye@uniosun.edu.ng">
                timothy.ogunleye@uniosun.edu.ng
              </a>
              <br />
              <br />
              Timothy A. Ogunleye stands as a pivotal figure in spearheading the
              advancement of statistical computing and data science and embodies
              a steadfast commitment to the continual evolution and innovation
              within these critical domains.
              <br />
              <br />
            </Typography> */}
          </Box>
        </Box>

        <Box sx={{ mt: "10%" }}></Box>
        <hr />

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
