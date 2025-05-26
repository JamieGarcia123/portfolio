
import Carousel from "react-multi-carousel"
import "./logos.css"
import htmllogo from "../../assets/logos/html-1.svg"
import jslogo from "../../assets/logos/logo-javascript.svg"
import pythonlogo from "../../assets/logos/python-4.svg"
import reactlogo from "../../assets/logos/react-1.svg"
import wclogo from "../../assets/logos/woocommerce.svg"
import wplogo from "../../assets/logos/wordpress-icon.svg"
import nextjslogo from "../../assets/logos/next-js.svg"
import m365logo from "../../assets/logos/Microsoft-365.svg"
import github from "../../assets/logos/github.svg"
import elementor from "../../assets/logos/Elementor.svg"
import avada from "../../assets/logos/avada-g.svg"

const Logos = ({title, responsive, centered }) => {
  return (
    <div className="carouselWrapper">
      {title ? <h3 className="title">{title}</h3> : null}
    <Carousel showdots={true} responsive={responsive}  centerMode={centered} infinite={true}>
      <img alt="Software developer proficient in HTML" title="HTML" src={htmllogo} width={100} height={100} />
      <img alt="Software developer proficient in Javascript" title="JavaScript" src={jslogo} width={100} height={100} />
      <img alt="Software developer proficient in React" title="React" src={reactlogo} width={100} height={100} />
      <img alt="Software developer proficient in Python" title="Python" src={pythonlogo} width={100} height={100} />
      <img alt="Software developer proficient in Next.JS" title="Next.js" src={nextjslogo} width={100} height={100} />
      <img alt="Software developer proficient in WooCommerce" title="WooCommerce" src={wclogo} width={100} height={100} />
      <img alt="Software developer proficient in WordPress" title="WordPress" src={wplogo} width={100} height={100} />
      <img alt="Software developer experienced in Elementor Plugin for Wordpress" title="Elementor" src={elementor} width={100} height={100}/> 
      <img alt="Software developer experienced in Avada Theme for Wordpress" title="Avada" src={avada} width={100} height={100}/> 
      <img alt="Software developer proficient in Microsoft 365" title="Microsoft 365" src={m365logo} width={100} height={100}/>  
      <img alt="Software developer proficient with Github" title="Github" src={github} width={100} height={100}/>  
    </Carousel>
</div>
  )
}

export default Logos;