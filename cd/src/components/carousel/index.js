
import Carousel from "react-multi-carousel"
import "./carousel.css"
import htmllogo from "../../assests/logos/html-1.svg"
import jslogo from "../../assests/logos/logo-javascript.svg"
import pythonlogo from "../../assests/logos/python-4.svg"
import reactlogo from "../../assests/logos/react-1.svg"
import wclogo from "../../assests/logos/woocommerce.svg"
import wplogo from "../../assests/logos/wordpress-icon.svg"
import nextjslogo from "../../assests/logos/next-js.svg"
import m365logo from "../../assests/logos/Microsoft-365.svg"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Logos = ({title}) => {
  return (
    <div className="carouselWrapper">
      {title ? <h3>{title}</h3> : null}
    <Carousel showdots={true} responsive={responsive}  centerMode={true} infinite={true}>
      <img src={htmllogo} width={200} height={200} />
      <img src={jslogo} width={200} height={200} />
      <img src={reactlogo} width={200} height={200} />
      <img src={pythonlogo} width={200} height={200} />
      <img src={nextjslogo} width={200} height={200} />
      <img src={wclogo} width={200} height={200} />
      <img src={wplogo} width={200} height={200} />
      <img src={m365logo} width={200} height={200}/>  
    </Carousel>
</div>
  )
}

export default Logos;