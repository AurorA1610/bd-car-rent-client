import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import BookingModal from "../BookingModal/BookingModal";

const UserService = (props) => {
  const { name, description, img } = props.userService;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardMedia
            style={{ width: "auto", height: "220px", margin: "0 auto" }}
            image={img}
            title={name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="success" onClick={handleBookingOpen}>
              Book
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <BookingModal
      booking={props.userService}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default UserService;
