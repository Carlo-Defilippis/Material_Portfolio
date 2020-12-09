import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MouseOver from './Mouseover'


// Styles for resume page

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineItemFull: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },

  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "13rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

// Listed experience and resume

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading} style={{textTransform: "none"}}>
        Carlo DeFilippis
      <Typography variant="subtitle2" align="center" className={classes.subHeading}>
        Budd Lake, NJ 07828 <br></br>
        Carlo.Defilippis@me.com
      </Typography>
      </Typography>
      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Professional Summary
        </Typography>
        <Box component="div" className={classes.timeLineItemFull}>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Innovative and proactive Full Stack Developer, successful at developing elegant,<br></br> 
            groundbreaking website and application designs. Talented in project management, team <br></br>
            collaboration and independent problem-solving. Highly organized multitasking with expertise in scheduling<br></br>
            projects, enhancing designs, writing and verifying code. Prepared to offer analytical and detail oriented abilities to the team.<br></br>
            
          </Typography>
        </Box>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Skills
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Proficient in Javascript</li>
              <li>Hands on experience with Node.JS</li>
              <li>Scripting - JavaScript, Bash Scripting, Python</li>
              <li>Databases - MySQL, SQLServer, MongoDB (NoSQL)</li>
            </ul>
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <ul>
              <li>Expert in Git Version Control and hands on Git-Flow</li>
              <li>Expertise working with data structures and algorithms</li>
              <li>Frameworks: BootStrap, JQuery, Semantic-UI, AJAX, React.JS, <br></br>Express, React Native</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Education
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Rutgers University
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Full Stack Developer Program
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            New Brunswick, NJ
            <ul align="left">
              <li>Graduated in Top 10% of Class</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Certifications
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li align="left">JavaScript Algorithms and Data Structures (fCC Certificate)<MouseOver></MouseOver></li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Work History
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Parts Department Professional
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Schumacher Chevrolet<br></br>
            2018-2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Monitored social media and online sources for industry trends.
Handled all customer service issues quickly to maintain high satisfaction levels.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Parts Department Manager
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Autosport Chevrolet<br></br>
            2010-2018
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Ordered parts for customers, repair shops and service department for use in vehicles and shop equipment.
Submitted reports to senior management to aid in business decision-making and planning. Oversaw employee
performance, corrected problems and increased efficiency to maintain productivity targets.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
