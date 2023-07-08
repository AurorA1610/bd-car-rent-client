import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import UserService from "./UserService";
import img1 from "../../../images/image0.jpg";
import img2 from "../../../images/image1.jpg";
import img3 from "../../../images/image2.jpg";
import img4 from "../../../images/image3.jpg";
import img5 from "../../../images/image4.jpg";
import img6 from "../../../images/image5.jpg";

const userServices = [
  {
    name: "Toy car",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img1,
  },
  {
    name: "Black car 1",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img2,
  },
  {
    name: "White car 1",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img3,
  },
  {
    name: "White car 2",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img4,
  },
  {
    name: "Black car 2",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img5,
  },
  {
    name: "Silver car",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: img6,
  },
];

const UserServices = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, color: "success.main", m: 5 }}
          component="div"
        >
          Pick a car
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {userServices.map((userService) => (
            <UserService
              key={userService.name}
              userService={userService}
            ></UserService>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UserServices;
