import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
const Facilitate = () => {
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
            Facilitators
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            The following facilitators have been consulted to speak to and train
            the participants during the five-day physical training workshop:
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
            Professor Longe Olumide Babatope (MIEE. MNCS, MISOC, MirLab, MIEE,
            MACM, MISACA, FASI, FSMART) holds a PhD degree in Computer Science
            (Information Systems Security Specialization) from the University of
            Benin, Benin City, Nigeria. A recipient of several international
            awards, he is an alumnus UI-MacArthur Scholar and an alumnus MIT
            Scholar. He was also a recipient of the prestigious Fulbright SIR
            Fellowship as well as the highly coveted Heidelberg Nobel Laureate
            Forum Fellowship in Germany. He is an endowed Professor of
            Information Systems & Cyber Security Education with the ICT
            University Foundation USA, A Senior Member of the prestigious
            Institute of Electrical and Electronics Engineers (IEEE), he is
            Seasoned in conceiving management information systems theories
            (evidenced by scholastic publications), and initiatives in ICT
            diffusion, innovation and uptake. Prof. Longe’s research works on
            cyber security and allied domains are very highly cited and has
            supported innovative developments globally earning him recognitions
            as a pioneering scholar in understanding cyber security causation,
            apprehension and treatments. He has served in several universities
            in the capacity of Head of Department, Dean, Director and Member of
            Governing Council. He has supervised and examined several PhDs as
            well as Masters and undergraduates in their numbers. He is an
            external examiner and international collaborator to several
            Universities globally. He has been named by Microsoft research as
            one of the leading experts on privacy and information systems
            research. He is on the Editorial Board of several multiple highly
            rated international Journals and his works have been cited and
            quoted several thousand times. Professor Longe Olumide is also known
            for his mentoring skills and dynamism as well as his selfless
            approach to grooming the younger generation. He is currently the
            Dean of the Faculty of Computational Sciences & Informatics,
            Academic City University College, Accra, Ghana.{" "}
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
            Timothy is an R language expert with a sound knowledge of SQL and
            Python programming. He’s trained by the Department of Computing,
            Macquarie University, the City of Sydney, Australia. He is
            well-grounded in Statistics and Mathematics. He started his
            educational pursuits from the Federal Polytechnic, Ede, Nigeria
            through the better by far University of Ilorin, Nigeria for both the
            diploma certification and all the degrees earned. Timothy has worked
            for a number of local and international organizations including
            UNDP, NAPTIP, NAICOM, LBS, to mention but a few. He’s also an
            experienced academic university staff. Currently, he’s a lecturer at
            the Department of Statistics, Osun State University, Osogbo,
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
            people in a learning context and mentoring students and enjoys team
            teaching, he worked on designing mathematical tasks that nurture
            students' problem solving and mathematical reasoning capacities. He
            is a practising Data Scientist, financial engineer, mathematician
            and a statistician and to crown it all, a lover of education. He is
            a certified R programmer. He has over 18 years of practicing
            mathematics from simple to complex levels. He received an HND in
            Statistics from Yaba College of Technology and B.Sc. (Ed.) in
            Mathematics and M.Sc. in Pure Mathematics from University of Lagos,
            and M.Sc. degree in Financial Engineering from World Quant
            University, USA. He handles the following set of software tools:{" "}
            <Typography
              display="inline"
              sx={{
                fontWeight: "900",
              }}
            >
              Python
            </Typography>
            , R syntax, SPSS, AMOS, EVIEW, MINITAB, QSB+, TORA, STATA, SAS,
            SHAZAM, OXMETRIC, MATLAB, SAGE, MATHEMATICA, SQL, Power Bi, and
            TABLEAU. He is very versatile in programming. Currently, Victor is
            the Executive Director of Tim-R Programming Consult, Nigeria.
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
            Ayobami is an expert in both R and Python programming languages. He
            studied Mathematics at Lagos State University, Nigeria. He has done
            many projects with both R and Python. He loves creating new things
            with programming syntax. He is well-grounded in programming and web
            development. Currently, a team member at Tim-R Programming Consult,
            Nigeria.
          </Typography>
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
      <Footer />
    </>
  );
};

export default Facilitate;
