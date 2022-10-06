import logo from "../../assets/logo.png";
import phone from "../../assets/phone-solid.svg";
import envelope from "../../assets/envelope.svg";
import "./footer.css";
import Socials from "../socials/socials";

function Footer() {
	return (
		<div className="footer-container">
			<div>
				<img src={logo} alt="Girl in a jacket" className="logo" />
				<p className="rights">Open Auto @ all rights reserved</p>
			</div>
			<div className="right-header-footer">
				<div className="contact-footer">
					<div className="item">
						<img src={phone} alt="Phone" className="phone" />
						<p>+7695864558</p>
					</div>
					<div className="item">
						<img src={envelope} alt="Phone" className="phone" />
						<p>+service@openauto.ca</p>
					</div>
				</div>
				<Socials />
			</div>
		</div>
	);
}

export default Footer;
