import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material/TextField";
import Companies from "../components/Companies";
import PhotosSlide from "../components/Photos";

const Photos = () => {
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
            Training Workshop and Seminars
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            At Osun R User Group, hosting training workshops and seminars is a
            crucial aspect of fostering learning and professional development
            within the field of computational statistics and data science. We
            are committed to providing high-quality and impactful training
            workshops and seminars designed to enhance the skills and knowledge
            base of researchers, data professionals, and students in the fields
            of computational statistics, information technology, and data
            science. Our workshops and seminars blend theoretical concepts,
            practical applications, and hands-on experience, offering a rich
            learning environment for diverse participants. Additionally, Osun
            RUG is dedicated to fostering a supportive and inclusive community
            of professionals, researchers, and learners through these training
            workshops and seminars. We actively promote knowledge sharing,
            mentorship, and collaboration, aiming to create a vibrant and
            impactful community dedicated to advancing computational statistics
            and data science. Pictures below showcase some of our training
            workshop and seminars organized by Osun RUG as well as community
            engagements involved in:
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
            Community Engagement
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Community engagement is a critical aspect of the OSUN R User Group,
            designed to create and foster collaborative relationships, knowledge
            sharing, and enriching interactions within the broader community.
            Here's a detailed outline of the community engagement activities and
            initiatives conducted by Osun RUG:
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
            Engagement Initiatives
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Public Workshops and Lectures: OSUN RUG hosts public workshops and
            lectures aimed at demystifying complex statistical, information
            technology, and data science concepts, making them accessible to a
            wider audience. These workshops serve as platforms for knowledge
            exchange and engagement with the local community, aspiring
            researchers, and professionals new to the field. Community Projects
            and Challenges: Organizing community-driven projects and challenges
            focused on applied statistics, information technology, and data
            science, encouraging participants to collaborate, share ideas, and
            work together to solve real-world problems using computational
            statistics tools like R and Python. Open Data Initiatives:
            Supporting open data initiatives, promoting the sharing and use of
            public data sets, and encouraging community members to engage in
            meaningful data analysis and visualization projects for social good
            and public awareness. Educational Outreach: Engaging with local
            educational institutions, schools, colleges, and universities to
            offer guest lectures, mentorship programs, and educational support
            in statistical analysis and data science for students and faculty.
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
            Industry Collaboration
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Partnerships with Local Organizations: Forming partnerships with
            local businesses, nonprofit organizations, and government
            institutions to collaborate on data-driven projects, research
            initiatives, and community-focused data analysis and statistical
            programs. Industry Networking Events: Hosting networking events and
            seminars to facilitate interactions between community members,
            industry professionals, and researchers, providing opportunities for
            discussion, idea exchange, and potential collaboration.
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
            Outcome and Impact
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Knowledge Dissemination: Promoting the dissemination of research
            findings, best practices, and educational content within the
            community, fostering a culture of continuous learning and growth.
            Skill Development: Providing opportunities for community members to
            enhance their skills, advance their research capabilities, and
            expand their horizons in computational statistics and data science,
            irrespective of their background or experience level. Impactful
            Research and Projects: Encouraging and supporting community members
            to pursue impactful research and projects, contributing to the
            advancement of knowledge and the development of practical solutions
            using statistical analysis and data science techniques.
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
            Inclusivity and Diversity
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Diverse Participation: Embracing diversity and inclusivity, and
            actively encouraging participation from individuals representing
            different backgrounds, experiences, and skill sets, fostering an
            inclusive and dynamic community. Mentorship and Support: Providing
            mentorship and support to new entrants and aspiring researchers,
            promoting an encouraging and supportive environment for community
            members at various stages of their professional and research
            journey.
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
            Community Outreach
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Lastly, Osun RUG actively engages with various community
            organizations, local initiatives, and grassroots forums to
            contribute to social and research causes, promoting the adoption of
            computational statistics, ICT, and data science for the betterment
            of the community and society at large. By fostering such community
            engagement initiatives, OSUN RUG aims to build a strong, inclusive,
            and supportive community dedicated to advancing computational
            statistics, ICT, and data science, collaborating with local
            organizations, and contributing to meaningful research and
            data-driven projects.
          </Box>
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
      {/* <PhotosSlide /> */}

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div
              sx={{
                width: "50%",
                height: "50%",
              }}
            >
              <img
                alt="this"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1690678511/pic8_kctlx7.png"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div
              sx={{
                height: "50%",
              }}
            >
              <img
                width="50%"
                height="10%"
                alt="this"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702324110/Picture7_epjja5.jpg"
              />
            </div>
          </Grid>
          <Grid itemxs={12} md={4}>
            <div
              sx={{
                width: "50%",
                height: "50%",
              }}
            >
              <img
                 width="50%"
                alt="this"
                src="https://res.cloudinary.com/pro-solve/image/upload/v1702324112/Picture6_eo5bt6.jpg"
              />
            </div>
          </Grid>
       
          <Grid itemxs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324113/Picture2_-_Copy_psekki.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324114/Picture11_xkd6hm.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324114/Picture3_-_Copy_ommhse.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324114/Picture12_axxrsy.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324115/Picture5_-_Copy_hzbb2x.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324115/Picture4_-_Copy_prv1wy.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324116/Picture8_-_Copy_xmtzye.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1702324116/Picture9_-_Copy_zl9hfo.jpg"
            />
          </Grid>
        </Grid>
      </Box> */}

      <Footer />
    </>
  );
};

export default Photos;
