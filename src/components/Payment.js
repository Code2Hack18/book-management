import React from "react";
import "../css/Payment.css";
// import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Link } from "react-router-dom";

export default function Payment() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 150,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 204,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [formattedText, setformattedText] =" ";
  var [text , setText]=" ";

  // let handleCardNumber =(text)=>{
    // let formattedText = text.split(' ').join('');
  //   if (text.length==4) {
  //     setformattedText = text+" ";
  //     setText(text.length=0);

  //   }
  //   console.log(formattedText);
  //   return formattedText;
  // }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <div class="wrapper">
            {" "}
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              {" "}
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />{" "}
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <h3 className="pss" id="ppp">Payment Successful</h3>
          </div>
        </Box>
      </Modal>
      <div className="main-pay">
        <div className="text-div">
          <div className="tt-header">
            <h3 className="pd">Payment Details</h3>

            {/* <input className='ipt'></input> */}
            <Box
              sx={{
                width: 500,
                maxWidth: "80%",
                paddingLeft: "5px",
              }}
            >
              <TextField
                className="ccd"
                fullWidth
                label="Card Holder Name"
                id="fullWidth"
                
              />
            </Box>
            <Box
              className="bx"
              sx={{
                width: 500,
                maxWidth: "80%",
                paddingLeft: "5px",
              }}
            >
              <TextField
                className="ccd"
                fullWidth
                label="Credit Card Number"
                id="fullWidth"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                // onChange={(e)=>handleCardNumber(e.target.value)}

              />
            </Box>
            <div className="cvv-date">
              <TextField
                className="date ccd"
                label="Expiary Date"
                placeholder="mm / yy"
              />
              <TextField className="date ccd" label="CVV" placeholder="x x x" />
            </div>
          </div>
          <div className="it-d ccd"></div>
          <Button
            sx={{ ml: 1, mt: 3 }}
            className="mui-bt2"
            variant="contained"
            onClick={handleOpen}
          >
            Make Payment
          </Button>
        </div>
        <div className="img-divv">
          <img
            id="cd-1"
            className="ccd-1"
            width="100%"
            height="55%"
            src="https://cdn.pixabay.com/photo/2016/09/05/18/49/plastic-card-1647376_1280.jpg"
          />
        </div>
      </div>
    </>
  );
}




