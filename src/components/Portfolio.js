import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/react.png";
import project2 from "../images/googlebooks.png";
import project3 from "../images/budget.png";
import project4 from "../images/manager.png";
import project5 from "../images/march.gif";
import project6 from "../images/fitness.png";

// Styles for portfolio

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    height: "85%"
  },
}));

// Projects list in card containers

const projects = [
  {
    name: "React Employee Searcher",
    description: `This React application allows managers to quickly filter through non-sensitive 
    data to find employees contact information. A dynamic table built with React.JS that can be 
    sorted in any way your heart desires!`,
    image: project1,
    link: "https://carlo-defilippis.github.io/React_Employee_App/",
    github: "https://github.com/Carlo-Defilippis/React_Employee_App",
  },
  {
    name: "Google Books Search & Save",
    description: `This is a React-based application that allows users to query and display books from 
    the Google Books API. The backend technologies include Node, Express, and MongoDB, and allows 
    users to search for books of interest, save their favorites to a wishlist, and purchase them later.`,
    image: project2,
    link: "https://google-book-search-carlo.herokuapp.com/",
    github: "https://github.com/Carlo-Defilippis/google_book_search/blob/master/README.md",
  },
  {
    name: "Progressive Budget",
    description: `Budget tracker that records data of money spent and paid on a Mongo DataBase, 
    and if the user is offline its saves your user inputs and it then adds the data to the MONGO 
    DataBase when it is back online.`,
    image: project3,
    link: "https://budget-tracker-carlo.herokuapp.com/",
    github: "https://github.com/Carlo-Defilippis/Progressive_Budget",
  },
  {
    name: "Employee Tracker",
    description: `Node module that is used to add, remove, and view employees, roles and departments 
    on a database. Live demo is hosted on repl.it to easily showcase its usesage.`,
    image: project4,
    link: "https://repl.it/@CarloDefilippis/EmployeeTracker#README.md",
    github: "https://github.com/Carlo-Defilippis/Employee_Tracker",
  },
  {
    name: "Marching Squares",
    description: `Visualized the marching squares algorithm via JavaScript and HTML.  Marching squares 
    outlines blobs of non-transparent pixels inside a bitmap. It is a computer graphics algorithm that 
    generates contours for a two-dimensional scalar field (rectangular array of individual numerical values).`,
    image: project5,
    link: "https://carlo-defilippis.github.io/MarchingSquares/",
    github: "https://github.com/Carlo-Defilippis/MarchingSquares",
  },
  {
    name: "Fitness Tracker",
    description: `Fitness Tracker is a Semantic and MongoDB application that allows users to add work 
    outs and track them via a graph system. The backend technologies include Node, Express, and MongoDB.`,
    image: project6,
    link: "https://fitness-tracker-carlod.herokuapp.com/stats",
    github: "https://github.com/Carlo-Defilippis/Fitness_Tracker",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="100%"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <a href={project.github} target="blank">
                <Button size="small" color="primary">
                  Github
                </Button>
                </a>
                <a href={project.link} target="blank">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
