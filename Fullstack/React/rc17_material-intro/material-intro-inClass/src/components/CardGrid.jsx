import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data";
import Grid from "@mui/material/Grid";

export default function CardGrid() {
  return (
    <>
      <Typography variant="h4" color="error" align="center" mt={4} mb={4}>
        Card And Grid
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((card) => {
          const { id, text, img, name } = card;
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" image={img} alt="img" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
