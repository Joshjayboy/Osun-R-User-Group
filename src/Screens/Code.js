import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Header from "../components/Header";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material/TextField";
import Companies from "../components/Companies";

const Code = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#353043",
          color: "white",
        }}
      >
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
              Policy
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              For a research and training group, it's essential to establish a
              clear and comprehensive set of codes of conduct and policies that
              underpin ethical practice, integrity, collaboration, responsible
              data management, and community engagement. Here's a list of them:
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
              Research Integrity and Ethics
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Ethical Conduct: All research activities must adhere to the
              highest ethical standards, following guidelines related to human
              subjects, animal welfare, and ethical conduct in research.
              Research Misconduct: Strict policies against falsification,
              fabrication, and plagiarism of research data, ensuring integrity
              and trust in the research output.
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
              Responsible data management
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Data Privacy: Adherence to data privacy regulations and ethical
              handling of sensitive personal data, with clear policies for data
              anonymization and protection. Data Sharing: Promoting transparency
              and collaboration through responsible data sharing, ensuring
              compliance with legal, ethical, and privacy considerations. Data
              Security: Robust data security measures to protect research data
              from unauthorized access, ensuring confidentiality and integrity.
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
              Collaboration and Teamwork
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Professional Conduct: Encouraging respectful and inclusive
              interactions among team members, fostering an environment that
              values diverse perspectives and constructive dialogues.
              Intellectual Property Rights: Clearly delineating policies related
              to intellectual property, authorship, and ownership of research
              outputs and collaborative work.
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
              Knowledge Sharing: Commitment to knowledge dissemination and
              public engagement, ensuring research findings are shared with the
              broader community through publications, open-access initiatives,
              and outreach programs. Community Partnership: Foster partnerships
              and engagement with local communities, stakeholders, and relevant
              organizations for impactful research and training initiatives.
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
              Training and Mentorship
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Learning Environment: Creating a supportive and constructive
              learning environment for trainees, promoting professional
              development, mentorship, and career guidance. Inclusivity and
              Diversity: Ensuring an inclusive approach to training and
              mentorship, recognizing and respecting diversity in all its forms.
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
              Use of Resource and Funding
            </Typography>
            <Box
              align="justify"
              sx={{
                lineHeight: "35px",
                letterSpacing: "1px",
              }}
            >
              Resource Allocation: Transparent and efficient use of resources
              and funding for research and training activities, ensuring
              accountability and wise stewardship. Conflict of Interest:
              Policies for disclosure and management of potential conflicts of
              interest, promoting transparency and ethical conduct in resource
              allocation and decision-making. These policies serve as a
              foundational framework to guide the conduct of research and
              training activities, fostering responsible and impactful
              engagement with the broader research and training community. It is
              critical to adapt these policies to align with the specific goals,
              values, and focus areas of our research and training group - Osun
              RUG.
            </Box>
          </Box>
          <Box
            sx={{
              mt: 7,
              mb: 7,
              textAlign: "center",
              color: "#0066FF",
              fontSize: "20px",
            }}
          >
            Our Partners
          </Box>
          <Companies />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Code;
