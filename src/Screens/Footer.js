import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Footer = () => {
  function Copyright() {
    return (
      <React.Fragment>
        {"© "}
        <Link color="inherit" href="/">
          partners
        </Link>{" "}
        {new Date().getFullYear()}
      </React.Fragment>
    );
  }

  const iconStyle = {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "warning.main",
    mr: 1,
    "&:hover": {
      bgcolor: "warning.dark",
    },
  };

  const LANGUAGES = [
    {
      code: "en-US",
      name: "English",
    },
    {
      code: "fr-FR",
      name: "Français",
    },
  ];
  return (
    <>
      <Typography
        component="footer"
        sx={{ display: "flex", bgcolor: "#fff5f8" }}
      >
        <Container sx={{ my: 8, display: "flex" }}>
          {/* <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item sx={{ display: "flex" }}>
                  <Box
                    component="a"
                    href="https://unilag.edu.ng/"
                    sx={iconStyle}
                  >
                    <img width="50px" src="./images/uni.png" alt="unilag" />
                  </Box>{" "}
                  <Box
                    component="a"
                    href="https://unilagconsult.com.ng/about.html"
                    sx={iconStyle}
                  >
                    <img width="50px" src="./images/pat.jpeg" alt="partners" />
                  </Box>
                </Grid>
                <Grid item>
                  <Copyright />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Legal
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="/">Terms</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="/">Privacy</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={8} md={4}>
              <Typography variant="h6" marked="left" gutterBottom>
                Language
              </Typography>
              <TextField
                select
                size="medium"
                variant="standard"
                SelectProps={{
                  native: true,
                }}
                sx={{ mt: 1, width: 150 }}
              >
                {LANGUAGES.map((language) => (
                  <option value={language.code} key={language.code}>
                    {language.name}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid> */}
          Address: Room 203, CHS Intercollegiate Building, Department of
          Statistics, Faculty of Pure and Applied Sciences, College of Science,
          Engineering and Technology, Osun State University, Osogbo, Nigeria.
          Contact: osunrug@rug.org.ng
        </Container>
      </Typography>
    </>
  );
};

export default Footer;
