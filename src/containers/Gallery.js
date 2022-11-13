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

export const Gallery = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        margin: 2,
        mt: 4,
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
          {projects.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;
            const height = item.featured ? "400rem" : "200rem";

            return (
              <ImageListItem
                key={item.img}
                className="portfolio-card"
                cols={cols}
                rows={rows}
                sx={{
                  border: 4,
                  borderColor: "#4f6367ff",
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
                    color: "#4f6367ff",
                    backgroundColor: "#4f6367ff",
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

const projects = [
  // TEMPLATE FOR FUTURE ADDITIONS
  //  {
  //   img: ,
  //   title: "",
  // },
  {
    img: logo,
    title: "Logo",
    // deployedUrl: "https://fathomless-bayou-99698.herokuapp.com/",
    // gitHubRepo: "https://github.com/C-Sim/we-care-react",
    featured: true,
  },
];
