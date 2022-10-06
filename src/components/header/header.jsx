import logo from "../../assets/logo.png";
import phone from "../../assets/phone-solid.svg";
import envelope from "../../assets/envelope.svg";
import "./header.css";

function Header() {
	return (
		<div className="header-container">
			<img src={logo} alt="Girl in a jacket" className="logo" />
			<div className="right-header">
				<div className="item">
					<img src={phone} alt="Phone" className="phone" />
					<p>+7695864558</p>
				</div>
				<div className="item">
					<img src={envelope} alt="Phone" className="phone" />
					<p>+service@openauto.ca</p>
				</div>
				<div className="item">
					<button className="button">Download the mobile app</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
