import React from "react";
import { Link } from 'react-router-dom';
import "../css/SellersOption.css";
import Carousel from "better-react-carousel";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function SellersOption() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 380,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 204,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book Summary
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            About this Book
          </Typography>
          <div className="b1">
            <div className="imgd1">
              <img
              className="im-i"
                width="80%"
                height="80%"
                src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
            <div className="t-type">
              <p className="t-type22">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.<br/> It has survived
                not only five centuries, but also the leap into electronic
                
               
              </p>
            </div>
           
          </div>
          <Link to="/homepage/payment">
          <Button
                className="mui-bt1"
                variant="contained"
                onClick={handleOpen}
              >
                BUY
              </Button>
              </Link>
         
        </Box>
      </Modal>
      <div className="coursel-div">
        <Carousel
          title="CGG"
          cols={6}
          rows={1}
          gap={8}
          loop
          height="5"
          autoplay={2000}
          showDots={true}
        >
          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button
                className="mui-bt"
                variant="contained"
                onClick={handleOpen}
              >
                Read
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/OIP.q1NrW0PDj6jxR_B1ad7rsgHaK9?pid=ImgDet&w=205&h=304&c=7"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/OIP.4cSFKHlGFTfktyQCTUnSTQAAAA?pid=ImgDet&w=204&h=271&c=7"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/OIP.vYNJJZwDytRGx5TLcVY5-AHaK-?pid=ImgDet&w=204&h=302&c=7"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/OIP.FFSmp_mDFwFFBJDSorCXbAHaKb?pid=ImgDet&w=206&h=289&c=7"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/OIP.3ed4FV2iJlLQORslbML3vgHaK9?pid=ImgDet&w=205&h=304&c=7"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Contained
              </Button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="60%"
              src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"
            />
            <div className="flex-cont1">
              <p className="txtx1">Iron Man</p>
              <p className="txtx2">&#8377;200</p>
              {/* <p className='txtx3'>Iron Man</p> */}
              <Button className="mui-bt" variant="contained">
                Read
              </Button>
            </div>
          </Carousel.Item>

          {/* <Carousel.Item>
            <img width="100%"  height="90%"  src="https://picsum.photos/400/300?random=6" />
          </Carousel.Item> */}
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </>
  );
}
