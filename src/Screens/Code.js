import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import Header from "./../Components/Header";
import Header from "./../Components/Header";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";

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
            Code of Conduct
          </Typography>
          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
            }}
          >
            Behaviours that are disrespectful to workshop’s attendees and
            sponsors, or intimidate, exclude or cause discomfort to others will
            not be tolerated. We will not tolerate discrimination or harassment
            based on characteristics that include, but are not limited to: age,
            disability, gender reassignment, marriage and civil partnership,
            pregnancy and parenthood, race, religion or belief (or lack
            thereof), gender identity and expression, sexual orientation,
            technical choices, experience level or any other dimension of
            diversity.
          </Box>

          <Box
            align="justify"
            sx={{
              lineHeight: "35px",
              letterSpacing: "1px",
              mt: 5,
            }}
          >
            The team members as well as facilitators are responsible for the
            enforcement of this Code of Conduct and for dealing with misconduct
            or violations to this policy. Facilitators and workshop assistants
            (if any) are expected to assist with the enforcement of the Code of
            Conduct in their respective capacities. By participating,
            individuals indicate their acceptance of the procedures by which the
            P-value RUG resolves any Code of Conduct incidents, which might
            include storage and processing of their personal information.
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
            communications are expected to show respect and courtesy to others
            and all interactions should be professional, both online and
            in-person. The following kinds of behaviours in all our events and
            platforms are encouraged:
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
                        Show courtesy and respect towards every member of the
                        workshop
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Be respectful of different viewpoints and experiences
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
                        Adhere to the Code of Conduct and report incidences
                        promptly
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>Be direct, but professional</ListItemText>
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
                        Be mindful of how much time and space you are taking up.
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
            Unacceptable behaviour: Examples of unacceptable behaviour include
            the following but not limited:
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
                        Publication of private communication without consent
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
                        Sustained disruptions of talks, workshops events or
                        communications
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>The display of violent images</ListItemText>
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
                        Unwelcome and repeated flirtations, propositions,
                        advances, or other sexual attention
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        including gratuitous or off-topic sexual images or
                        behaviour
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
                        Sexist, racist, homophobic, transphobic, ableist, or
                        exclusionary jokes
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Continuing to initiate interaction with someone after
                        being explicitly asked to stop
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Offensive, insulting, derogatory, or degrading remarks
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Demands for sexual favours in exchange for favourable or
                        preferential treatment
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
          Participants who are asked to stop any inappropriate behaviour are
          expected to comply immediately. This applies to all our events, either
          online or in-person. If an event participant engages in behaviour that
          violates this policy, the organizers may warn the offender, ask them
          to leave the event or workshop, or engage a committee to investigate
          the Code of Conduct violation and impose appropriate sanctions. Kindly
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
      <Footer />
    </>
  );
};

export default Code;
