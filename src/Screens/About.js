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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329284/Picture4_delfkn.jpg"
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
              Prof. Dawud Adebayo AGUNBIADE
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Adebayo Agunbiade currently works at the Department of
              Mathematical Sciences, Olabisi Onabanjo University, Ago-Iwoye,
              Nigeria. Agunbiade does research in Computational Statistics,
              Simultaneous Equation Modelling and Econometric Methods. The
              current project is on 'Violation of Basic Assumptions of MLR -
              Multicollinearity and Heteroscedasticity' & 'Using INGARCH Process
              to Model Cases of COVID-19'. He has passion for academic business
              and has produced over 5 Doctoral graduates.
              <br />
              <br /> Prof. Bayo Agunbiade is a Statistician and Data Analysis
              specialist. He parades two M. Sc degrees in Statistics and
              Information Science as well as a Ph.D. in Statistics from the
              University of Ibadan. His experience was obtained from the
              Association for Reproductive and Family Health (ARFH) Ibadan;
              Executive Finance and Investments Ltd. (EFIL), Ibadan and Rasmed
              groups, Ibadan. He has put in some years of rigorous teaching and
              research at the university levels. He has many articles in
              reputable journals and co-authored some published books. He has
              attended so many conferences and workshops both locally and abroad
              to update his knowledge in which he has presented some of his
              works. He was responsible for organizing seminars, giving lectures
              at many functions and coordinating projects within and outside the
              university levels. He has participated in the data collection,
              analysis and IEC project on women empowerment of a frontline NGO
              based in Ibadan, Nigeria. He has demonstrable skills in
              coordination, data analysis, teaching & research as well as people
              management. He is a Professor of Statistics at the Department of
              Mathematical Sciences, Olabisi Onabanjo University, Ago-Iwoye,
              Nigeria and his research activities are mainly in Statistical
              Modeling/Inference, Probability Theory, Computational Statistics,
              Econometric Methods, Regression Analysis and Stochastic Process.
              He is a member of the Nigeria Statistical Association (NSA),
              American Statistical Association (ASA), and the American
              Mathematical Society (AMS).
              <br />
              <br /> He could be reached through:
              adebayo.agunbiade@oouagoiwoye.edu.ng .
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329279/Picture5_hvosit.jpg"
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
              Uche Victor NKUDU, a data scientist per excellence, loves
              connecting with people in a learning context and mentoring
              students and enjoys team teaching, he worked on designing
              mathematical tasks that nurture students' problem solving and
              mathematical reasoning capacities. He is a practising Data
              Scientist, financial engineer, mathematician and a statistician
              and to crown it all, a lover of education. He is a certified R
              programmer. He has over 18 years of practicing mathematics from
              simple to complex levels. He received an HND in Statistics from
              Yaba College of Technology and B.Sc. (Ed.) in Mathematics and
              M.Sc. in Pure Mathematics from University of Lagos, and M.Sc.
              degree in Financial Engineering from World Quant University, USA.
              He handles the following set of software tools: R syntax, SPSS,
              AMOS, EVIEW, MINITAB, QSB+, TORA, Python, STATA, SAS, SHAZAM,
              OXMETRIC, MATLAB, SAGE, MATHEMATICA, SQL, Power Bi, and TABLEAU.
              He is very versatile in programming. Currently, Victor is the
              Executive Director of Tim-R Programming Consult, Nigeria.
              <br />
              <br />
              He could be reached through: nkudu4luv@gmail.com
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329295/Picture6_vchnbv.png"
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
              Monday O. ADENOMON (PhD)
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Monday Adenomon is an Associate Professor in the field of
              Statistics, Department of Statistics, Nasarawa State University,
              Keffi, Nigeria. He has PhD (Statistics) in 2016 from the better by
              far University of Ilorin, Nigeria; M.Sc. (Statistics) in 2010;
              B.Sc. (Statistics) in 2021; PGD in Statistics in 2008 and HND in
              Statistics in 2004. His research areas include Econometrics; Time
              series Analysis; Financial time series analysis; Spatial
              Econometrics and Interdisciplinary Statistical Analysis;
              communication in statistics.
              <br />
              <br /> He is an elected ISI Short Course and Outreach Officer
              (2021-2023); Fellow, Royal statistical Society, UK; Fellow,
              African Scientific Institute; International committee member,
              IASC-LARS School of Computational Statistics and Data Science
              (September, 2021); Chair of the International Association for
              Statistical Computing (IASC) African Members Group (2021 till
              date); Team Lead, Ambitious Africa Nigeria team (2020-2021);
              Lead-Organizer of the Northern Nigeria LISA 2020 Symposium (2020);
              Lead-Organizer, IASC physical symposium in Nigeria (2019 and
              2021); LISA Scholar (2019); Member, Committee of Sport Statistics
              Research Group of International Statistical Institutes (ISI) (2019
              till date); Chartered Statistician of the Royal Statistical
              Society (2019 till Date); Coordinator, NSUK-LISA Stat Lab (2018
              till Date); Founder, Foundation of Laboratory for Econometrics &
              Applied Statistics of Nigeria (aka Found-LEAS-in-Nigeria) (2018
              till Date); Mentor, LISA 2020 Networks (2018 till date).
              <br />
              <br /> He has so many grants which include: Consultant and Partner
              to eBASE on "We attain project" (2020); Statistical building
              Consultant to Food and Agriculture Organisation (FAO, 2020 and
              2021); R Users Group (RUGS) grant for statistical capacity
              building (2021); TETFUND Institutional based research (2015);
              TETFUND Manuscript publication grant (2017); TETFUND Institutional
              based research (co-investigator, 2018); TETFUND International
              conference travel grant (2019); TETFUND Institutional based
              research grant (2019); ISI statistical capacity grant (2020).
              <br />
              <br /> He could be reached through: adenomonmo@nsuk.edu.ng . He
              could also be found in:  Scopus with the following ID:
              scopus.com/authid/detail.uri?authorld=57215507440 ;  Web of
              Science ResearcherID: AAU-5175-2020 
              Mendeley:Mendeley.com/authors/57215507440/  Google citation:
              https://scholar.google.com/citations?user=fqNq8EcAAAAJ&hl=en 
              Research gate citation:
              https://www.researchgate.net/profile/Monday_Adenomon  Open
              Research Contributors ID: https://orcid.org/0000-0002-9523-8032
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329286/Picture7_sdgwfn.jpg"
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
              Dr Toluwase Janet AKINGBADE
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Toluwalase is a lecturer in Covenant University, Otta, Ogun State,
              Nigeria. She obtained a Ph.D degree in Statistics from University
              of Nigeria, Nsukka, Nigeria. She holds M.Sc. and B.Sc. (Hons)
              degrees both in Statistics from University of Ilorin, Nigeria. She
              was awarded as the best graduating Statistics student in her first
              degree. Her Ph.D. research work was primarily focused on
              developing efficient estimators for five different real-life
              situations in survey. Her research interests are in areas of
              Sample Survey, Demography, Quality Control, Biostatistics and Data
              Sciences. Toluwalase has over nine years academic work experience
              as a lecturer and researcher. She has published academic research
              papers in different reputable journals and conferences. She has
              professional certificate in Database and SQL for Data Sciences,
              Machine Learning and Data Visualization with Python and R. She is
              an active member of Nigerian Statistical Association (NSA-CISON)
              and Microsoft Certified Professional (MCP). She has actively
              participated as IT team in a virtual conference organized by some
              associations in Nigeria.
              <br />
              <br />
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329295/Picture8_tnio0c.jpg"
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
              Yusuf Akintunde Azeez
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Mr Yusuf is an experienced statistician with over twelve years of
              experience in analyzing and interpreting complex data. He is a
              first class product of Applied Mathematics from Bells University
              of Technology, Ota, Nigeria. He holds a Master of Science (M.Sc.)
              degree in Statistics obtained from University of Agriculture,
              Makurdi, Nigeria.
              <br />
              <br />
              However, he is a real-practical oriented person who has passed
              through Kwara State Polytechnic, Ilorin, Nigeria for both National
              Diploma (ND) and Higher National Diploma (HND) certification in
              Statistics. Mr Yusuf also possesses a Postgraduate Diploma (PGD)
              in Statistics from Ahmadu Bello University, Zaria, Nigeria. He is
              an associate member of the Institute for Operation Research of
              Nigeria. Also, he is a member of Nigerian Statistical Association.
              <br />
              <br />
              He is currently an active staff of NAFDAC, Nigeria. He has won
              several awards including 2021 Best Graduating Student of Physical
              Science Faculty, Bells University of Technology, Ota, Nigeria;
              most outstanding staff in PRS Department, NAFDAC 2013 Staff Merit
              Award, and so on. He has served as organizing committee member for
              some organizations within the country.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329289/Picture9_aar811.jpg"
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
              Kazeem Adeniyi ALAMU
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Alamu is a Principal Planning Officer at the Ministry of Economic
              Planning, Budget and Development, Osun State. He is an
              Educationist, a Mathematician and a Statistician. He bagged Higher
              Diploma in Statistics from The Federal Polytechnic, Ede, Osun
              State with Upper Credit Division in 2000 and furthered his study
              at the Osun State University, Osogbo, Osun State between 2012-2015
              where he obtained a Second-Class Upper Degree in Mathematics.
              Here, he was among the best students for the department.
              <br />
              <br />
              He proceeded to the great Obafemi Awolowo University, Ile-Ife,
              Osun State for his Master of Science Degree in Statistics. Alamu
              is an experienced data analyst with a vast knowledge in several
              computer packages and statistical software such as Microsoft Word,
              Microsoft Excel, Microsoft Access, LateX, Oracle Hyperion, SPSS,
              jMULTI, STATA, R-Dialect, and EVIEWS.
              <br />
              <br /> Above all, Alamu is a seasoned Planner. He is leading
              expert in preparation of High-level development documents:
              National Development Plan, State Development Plan and Local
              Development Plan, Medium Term Sector Strategy (MTSS), Medium Term
              Expenditure Framework (MTEF), etc. He has attended professional
              capacity building trainings within and outside Nigeria.
              <br />
              <br /> He, however, was privileged to have travelled out of the
              country twice, precisely, Dakar, Senegal, on Strategic Planning
              and Results-Based Budgeting and Gender-Responsive Economic Policy
              Management. Currently, Alamu is a leading Data Expert in Osun
              State and a consultant on preparation of High-Level Documents. He
              has also co-led the hosting online conference held in Dakar,
              Senegal through Zoom.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329295/Picture10_fatd69.jpg"
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
              Osahon Ukpebor
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Osahon Ukpebor is a dynamic and innovative Data Scientist
              specializing in hydrogeology, with a profound commitment to
              addressing the challenges of climate change and its impact on
              groundwater resources. Holding a Master of Science in Hydrogeology
              and Applied Geophysics, Osahon Ukpebor has developed a unique
              expertise in the application of satellite data and machine
              learning techniques to climate issues. He is currently the a
              senior research officer under Osun R User Group.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329293/Picture11_wchsc5.jpg"
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
              Joseph Olawale BAMIDELE
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Joseph Olawale Bamidele is a B.Tech graduate majors in Mathematics
              and its applications in the field of Software Development, Web
              Design and Game Systems. He has worked on novel projects for
              qodesquare as programming director and pursues causes related to
              education using software technologies. As a Web Applications
              Developer with grounded experience in JavaScript, MySQL and other
              Backend Technologies, he is passionate about mentoring and
              teaching others, enabling them with creative capacity to be
              inventors and creators. He loves reading, meeting people of like
              minds, tweaking and tinkering, and building useful stuffs.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329296/Picture12_ckdpgo.jpg"
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
              Obafemi Keshinro
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Mr. Obafemi Keshinro is a PAR and Head, Academic Process Planning
              and Statistics, Academic Planning Unit, University of Lagos,
              Nigeria. He had Higher National Diploma (HND) certification in
              Statistics from the Yaba College of Technology, Yaba, Nigeria. He
              possesses Postgraduate Diploma (PGD) and Master of Science (M.Sc.)
              in Statistics from the University of Ibadan, Nigeria. He is also
              holding Bachelor of Science (B.Sc.) degree in Economics from the
              Lagos State University, Nigeria. Further to these, he is still
              holding Master of Science (M.Sc.) in Economics and Master of
              Science (M.Sc.) in Actuarial Science from the University of Lagos,
              Nigeria. He is the founder of Chapter4.com.ng and
              FlexismartSolutions.org. He is the coordinator of Applied Data
              Science Community Learning and also a faculty advisor, ASA Nigeria
              Student Chapter.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329295/Picture14_bbgbhu.jpg"
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
              Eleko Elizabeth
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Elizabeth is a trained professional statistician. She works as a
              senior statistician with the national open university of Nigeria.
              She holds Master of Science (M.Sc.) degree in Statistics from the
              University of Lagos, Nigeria; Postgraduate Diploma in Education
              and Bachelor of Science (B.Sc.) degree from the National Open
              University, Nigeria; Higher National Diploma (HND) in Statistics
              from the Federal Polytechnic, Ado-Ekiti, Nigeria. Elizabeth has
              worked as Quality Control Officer at Handling Cocoa Producing
              Company, Akure, Nigeria; Financial Planner at Cornerstone
              Insurance Company, Port Harcourt, Nigeria. A member of several
              professional bodies like Nigerian Institute of Management (NIM);
              Nigerian Statistical Association (NSA), to mention but a few. She
              is a certified R language expert. She equally has in-depth
              knowledge of Excel and SPSS for data analytical science. She is
              very good in planning events both physical and online via YouTube
              and zoom.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329295/Picture15_mtj5wh.jpg"
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
              Dr Olumide ADESINA
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Olumide holds B.Sc. (Hons) degree in Mathematics from University
              of Ilorin, Nigeria; MBA in Financial Management from Ladoke
              Akintola University of Technology, Ogbomoso, Nigeria; M.Sc. in
              Statistics from University of Lagos, Nigeria; and Ph.D. Statistics
              from Olabisi Onabanjo University, Ago-Iwoye, Nigeria. He is a
              lecturer in the Department of Mathematical Sciences, Redeemer’s
              University, Ede, Osun State, Nigeria. His area of specialization
              is Mathematical Statistics as well as computational Statistics. He
              has published over 40 scholarly articles in reputable outlets. His
              publications in Elsevier journals are sizable equally published
              data sets in Elsevier Mendeley. He has reviewed about 160 journal
              articles. Dr. Olumide Adesina is proficient in software such as R
              and Python and has conducted several pieces of training in the
              areas of Data Science and Business Analytics for Bankers,
              Actuaries, operation managers, and policymakers in various
              organizations. He is a professional member of the International
              Association for Official Statistics (IAOS), and Secretary,
              Nigerian Statistical Association (NSA), Ogun State chapter. He has
              served as IT expert while hosting online webinars and virtual
              conference for some organizations.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329296/Picture16_id4ntd.jpg"
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
              Dr (Mrs) Ifeyinwa DANIEL
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Dr. (Mrs.) Ifeyinwa Daniel is a Mathematician, a Functional and
              Data Analyst, with so many years of teaching and research in
              Mathematics. She has worked for various schools, universities,
              colleges and research institution. She got her B.Sc. from the
              University of Nigeria, Nsukka (UNN); M.Sc. and PhD from University
              of Lagos (UNILAG) and Federal University of Agriculture, Abeokuta
              (FUNAAB) respectively. Currently, she is a university lecturer in
              Nigeria.
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
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702329297/Picture17_dl60fy.jpg"
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
              Mubasiru Asafe LAMIDI
            </Typography>
            <Typography
              align="justify"
              sx={{
                mt: 2,
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Mr. Lamidi is holds Bachelor and master’s degrees in Statistics
              from University of Ilorin, Nigeria. He worked briefly with
              department of Statistics, Federal Polytechnic, Ede, Nigeria
              between 2002 and 2005 before proceeded to Universiteit Hasselt,
              Diepenbeek Belgium where he further obtained MSc degrees in
              Applied Statistics and Biostatistics. Mr. Lamidi has about 20
              years’ working experience with some publications. He is also
              experienced in data management, database administration and
              Statistical methodologies such as General and Generalized linear
              and linear mixed models, ANOVA, ANCOVA, survival analysis,
              non-linear models, design and analysis of clinical trial data and
              Bayesian modeling techniques. He is an expert in SAS®, R®, STATA®
              and SPSS® software for Statistical analyses, Python, and Microsoft
              SQL for data management. Mr. Lamidi is currently working with the
              University of Calgary, Alberta in Canada. He is open to
              collaborative works with colleagues and corporate organizations.
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
