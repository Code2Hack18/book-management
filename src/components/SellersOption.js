import React from 'react';
import Button from '@mui/material/Button';
import '../css/SellersOption.css';
import Carousel from 'better-react-carousel'

export default function SellersOption() {
     return (

        <div className="coursel-div">
        
        <Carousel title='CGG' cols={6} rows={1} gap={8} loop height="5" showDots={true}>
          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/OIP.q1NrW0PDj6jxR_B1ad7rsgHaK9?pid=ImgDet&w=205&h=304&c=7"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/OIP.4cSFKHlGFTfktyQCTUnSTQAAAA?pid=ImgDet&w=204&h=271&c=7"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/OIP.vYNJJZwDytRGx5TLcVY5-AHaK-?pid=ImgDet&w=204&h=302&c=7"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/OIP.FFSmp_mDFwFFBJDSorCXbAHaKb?pid=ImgDet&w=206&h=289&c=7"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/OIP.3ed4FV2iJlLQORslbML3vgHaK9?pid=ImgDet&w=205&h=304&c=7"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Contained</Button>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <img width="100%" height="60%" src="https://th.bing.com/th/id/R.06a7f91ce97a1e53478c8bfcb371a9d3?rik=TTFYlhM%2f8xCSzA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2firon-man-3-international-poster.jpg&ehk=4G49I%2f07Aw0XigMQQV%2buCv2KhuBOYuz4pMeBMMq2tWE%3d&risl=&pid=ImgRaw&r=0"  />
            <div className='flex-cont1'>
            <p className='txtx1'>Iron Man</p>
            <p className='txtx2'>&#8377;200</p>
            {/* <p className='txtx3'>Iron Man</p> */}
            <Button className="mui-bt" variant="contained">Read</Button>
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
   
      )
}
