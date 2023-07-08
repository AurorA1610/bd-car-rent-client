import { Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking }) => {
  const { user } = useAuth();
  const handleBookingSubmit = (e) => {
    alert("Submitting");
    // we will collect the user data and send to the server
    handleBookingClose();
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Book {booking.name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: 1, my: 2 }}
              id="outlined-basic"
              defaultValue={user.displayName}
              color="success"
              variant="outlined"
            />
            <TextField
              disabled
              sx={{ width: 1, my: 2 }}
              id="outlined-basic"
              label="Email"
              color="success"
              defaultValue={user.email}
              variant="outlined"
            />
            <TextField
              sx={{ width: 1, my: 2 }}
              id="outlined-basic"
              label="Phone"
              color="success"
              variant="outlined"
            />
            {/* we will use date time picker from mui here */}
            <Button
              type="submit"
              sx={{ width: 1, my: 2 }}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
