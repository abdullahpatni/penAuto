import road from "../../assets/Pickup_Illustration.png";
import "./midContent.css";

function MidContent() {
	return (
		<div className="mid-container">
			<div className="info">
				<div>
					<h2 className="vehicle-heading">
						Vehicle Maintenance
						<br />
						From the Comfort of
						<br />
						Your Home
					</h2>

					<p className="paras">Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</p>

					<form>
						<input className="details" type="text" placeholder="Enter Your Name" name="name" />
						<input className="details" type="text" placeholder="Enter Your Email" name="name" />
						<input className="details" type="submit" value="Submit" />
					</form>
				</div>
			</div>
			<img src={road} alt="" srcset="" className="road" />
		</div>
	);
}

export default MidContent;
