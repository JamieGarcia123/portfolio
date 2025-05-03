
import Carousel from "react-multi-carousel"
import "./logos.css"
import htmllogo from "../../assests/logos/html-1.svg"
import jslogo from "../../assests/logos/logo-javascript.svg"
import pythonlogo from "../../assests/logos/python-4.svg"
import reactlogo from "../../assests/logos/react-1.svg"
import wclogo from "../../assests/logos/woocommerce.svg"
import wplogo from "../../assests/logos/wordpress-icon.svg"
import nextjslogo from "../../assests/logos/next-js.svg"
import m365logo from "../../assests/logos/Microsoft-365.svg"
import github from "../../assests/logos/github.svg"
import elementor from "../../assests/logos/Elementor.svg"

const Logos = ({title, responsive, centered }) => {
  return (
    <div className="carouselWrapper">
      {title ? <h3 className="title">{title}</h3> : null}
    <Carousel showdots={true} responsive={responsive}  centerMode={centered} infinite={true}>
      <img alt="Software developer proficient in HTML" src={htmllogo} width={100} height={100} />
      <img alt="Software developer proficient in Javascript" src={jslogo} width={100} height={100} />
      <img alt="Software developer proficient in React" src={reactlogo} width={100} height={100} />
      <img alt="Software developer proficient in Python" src={pythonlogo} width={100} height={100} />
      <img alt="Software developer proficient in Next.JS" src={nextjslogo} width={100} height={100} />
      <img alt="Software developer proficient in WooCommerce" src={wclogo} width={100} height={100} />
      <img alt="Software developer proficient in WordPress" src={wplogo} width={100} height={100} />
      <img alt="Software developer experienced in Elementor Plugin for Wordpress" src={elementor} width={100} height={100}/> 
      <img alt="Software developer proficient in Microsoft 365" src={m365logo} width={100} height={100}/>  
      <img alt="Software developer proficient with Github" src={github} width={100} height={100}/>  
    </Carousel>
</div>
  )
}

export default Logos;