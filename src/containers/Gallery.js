import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import { PageTitle } from "../components/atoms/PageTitle";

import logo from "../components/atoms/images/Logo.png";
import platter from "../components/atoms/images/Platter.jpg";
import platterTing from "../components/atoms/images/PlatterTing.jpg";

import meal from "../components/atoms/images/Meal.jpg";

import mealChicken from "../components/atoms/images/MealChicken.jpg";
import mealHake from "../components/atoms/images/MealHake.jpg";
import mealMutton from "../components/atoms/images/MealMutton.jpg";
import mealTing from "../components/atoms/images/MealTing.jpg";

import foodBurger from "../components/atoms/images/FoodBurger.jpg";
import foodHake from "../components/atoms/images/FoodHake.jpg";
import foodJerk from "../components/atoms/images/FoodJerk.jpg";

import drinkMagnum from "../components/atoms/images/DrinkMagnum.jpg";
import drinkRedStripe from "../components/atoms/images/DrinkRedStripe.jpg";
import drinkSupermalt from "../components/atoms/images/DrinkSupermalt.jpg";
import drinkTing from "../components/atoms/images/DrinkTing.jpg";
import drinkTropical from "../components/atoms/images/DrinkTropical.jpg";

import staff from "../components/atoms/images/Staff.png";
import staffHut from "../components/atoms/images/StaffHut.png";
import trailer1 from "../components/atoms/images/Trailer1.jpg";
import trailerSt from "../components/atoms/images/TrailerSt.jpg";
import trailerBack from "../components/atoms/images/TrailerBack.jpg";
import trailerStand from "../components/atoms/images/TrailerStand.jpg";
import trailerParty from "../components/atoms/images/TrailerParty.jpg";
import review1 from "../components/atoms/images/Review1.jpg";
import review2 from "../components/atoms/images/Review2.jpg";
import review3 from "../components/atoms/images/Review3.jpg";
import review4 from "../components/atoms/images/Review4.png";

export const Gallery = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        margin: 2,
        mt: 8,
      }}
    >
      <PageTitle title="Gallery" />
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <ImageList
          sx={{
            margin: "18px",
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            alignItems: isMobile ? "center" : "",
            justifyContent: isMobile ? "center" : "",
          }}
          cols={4}
          spacing={8}
        >
          {gallery.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 1 : 1;
            const height = item.featured ? "400rem" : "200rem";

            return (
              <ImageListItem
                key={item.img}
                className="portfolio-card"
                cols={cols}
                rows={rows}
                sx={{
                  border: 4,
                  borderColor: "#000000ff",
                  margin: 2,
                  width: isMobile ? "300px" : "auto",
                }}
              >
                {/* <a href={item.deployedUrl} target="_blank" rel="noreferrer"> */}
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                  width="100%"
                  height={height}
                />
                {/* </a> */}
                {/* <ImageListItemBar
                  subtitle={item.title}
                  className="project-title"
                  sx={{
                    color: "#000000ff",
                    backgroundColor: "#000000ff",
                    fontWeight: 100,
                    lineHeight: "18px",
                  }}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`GitHub repo for ${item.title}`}
                      href={item.gitHubRepo}
                      target="_blank"
                      className="icon"
                    >
                      <GitHub />
                    </IconButton> */}
                {/* } /> */}
              </ImageListItem>
            );
          })}
        </ImageList>
      </Grid>
    </Box>
  );
};

const gallery = [
  // TEMPLATE FOR FUTURE ADDITIONS
  //  {
  //   img: ,
  //   title: "",
  // featured: true,

  // },
  {
    img: platter,
    title: "platter",
    featured: true,
  },
  {
    img: platterTing,
    title: "platterTing",
    featured: true,
  },
  {
    img: mealMutton,
    title: "mealMutton",
    featured: true,
  },
  {
    img: mealChicken,
    title: "mealChicken",
    featured: true,
  },
  {
    img: mealHake,
    title: "mealHake",
    featured: true,
  },
  {
    img: mealTing,
    title: "mealTing",
    featured: true,
  },

  {
    img: foodBurger,
    title: "foodBurger",
    featured: true,
  },
  {
    img: foodHake,
    title: "foodHake",
    featured: true,
  },
  {
    img: foodJerk,
    title: "foodJerk",
    featured: true,
  },

  {
    img: drinkMagnum,
    title: "drinkMagnum",
  },
  {
    img: drinkRedStripe,
    title: "drinkRedStripe",
  },
  {
    img: drinkSupermalt,
    title: "drinkSupermalt",
  },
  {
    img: drinkTing,
    title: "drinkTing",
  },
  {
    img: meal,
    title: "meal",
  },

  {
    img: staff,
    title: "staff",
  },
  {
    img: staffHut,
    title: "staffHut",
    featured: "true",
  },

  {
    img: review1,
    title: "review1",
    featured: "true",
  },
  {
    img: trailerParty,
    title: "trailerParty",
  },

  {
    img: trailer1,
    title: "trailer1",
  },
  {
    img: trailerBack,
    title: "trailerBack",
  },
  {
    img: trailerSt,
    title: "trailerSt",
  },
  {
    img: trailerStand,
    title: "trailerStand",
  },
  {
    img: review2,
    title: "review2",
  },
  {
    img: review3,
    title: "review3",
  },

  {
    img: review4,
    title: "review4",
  },
];
