import { certifications } from "../../api/certification";
import "./certifications.css"
import Carousel from "react-multi-carousel";


const Certs = ({title, responsive}) => {
  return(
<>
    <h2>{title}</h2>
    <Carousel responsive={responsive}>
        {certifications.map(cert => (
            <div key={cert.id} className="certCard">
                <div className="certCard-inner">
                    <div className="certCard-front brdrlft">
                        <div>
                            <h3 className="brdrbtm h3title"><span>{cert.name}</span></h3>
                            <p className="brdrbtm brdrbtm-height"><span>{cert.distributor}</span></p>
                            {cert?.issued ? <p className="brdrbtm brdrbtm-height"><span>Issued: {cert.issued}</span></p> : <p className="brdrbtm"><span>''</span></p>}
                            {cert?.expiration ? <p className="brdrbtm brdrbtm-height"><span>Expires: {cert.expiration}</span></p> : <p className="brdrbtm"><span>Expires: Does not expire.</span></p>}
                            <p className="brdrbtm brdrbtm-height"></p>
                            <p className="brdrbtm brdrbtm-height"></p>
                            <p className="brdrbtm brdrbtm-height"></p>
                            <p className="brdrbtm brdrbtm-height"></p>
                        </div>
                    </div>
                    <div className="certCard-back"><div id={cert.id}></div>
                    </div>
                </div>
            </div>
        )
        )}
    </Carousel>
</>
  )
}
export default Certs