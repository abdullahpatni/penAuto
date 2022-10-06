import mobileFemale from "../../assets/picku service.png";
import "./lowerContent.css";

function LowerContent() {
	return (
		<div className="low-container">
			<img src={mobileFemale} className="mobileFemale" />
			<div className="info">
				<div>
					<h2 className="vehicle-heading">
						Vehicle Maintenance
						<br />
						From the Comfort of
						<br />
						Your Home
					</h2>

					<p className="paras">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.{" "}
					</p>

					<form>
						<input className="details" type="button" value="Download the mobile app" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default LowerContent;
