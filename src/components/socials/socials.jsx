import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import penautoLogo1 from "../../assets/penautoLogo-1.png";
import "./socials.css";

function Socials(props) {
	return (
		<div className={props.showLogo ? "socials-container" : ''}>
			{props.showLogo && <img src={penautoLogo1} className="penautoLogo" />}
			<div className={(props.showLogo ? "" : "float-right ")  + "socials"}>
				<img src={facebook} alt="" className="socials-icon" srcset="" />
				<img src={twitter} alt="" className="socials-icon" srcset="" />
				<img src={youtube} alt="" className="socials-icon" srcset="" />
				<img src={linkedin} alt="" className="socials-icon" srcset="" />
				<img src={instagram} alt="" className="socials-icon" srcset="" />
			</div>
		</div>
	);
}

export default Socials;
