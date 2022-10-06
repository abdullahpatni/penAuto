import { useState } from "react";
import axios from "axios";
import road from "../../assets/Pickup_Illustration.png";
import "./midContent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MidContent() {
	const [form, setForm] = useState({ name: "", email: "" });

	const onSubmitForm = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:4000/save", form)
			.then((response) => {
				toast("Thank You for Registering");
			})
			.catch(err => {
				toast.error(err.response.data.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	const onUpdateField = (e) => {
		const nextFormState = { ...form, [e.target.name]: e.target.value };
		setForm(nextFormState);
	};

	return (
		<div className="mid-container">
			<ToastContainer />
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

					<form onSubmit={onSubmitForm}>
						<input className="details" type="text" placeholder="Enter Your Name" name="name" value={form.name} onChange={onUpdateField} />
						<input className="details" type="email" placeholder="Enter Your Email" name="email" value={form.email} onChange={onUpdateField} />
						<input className="details" type="submit" value="Submit" />
					</form>
				</div>
			</div>
			<img src={road} className="road" />
		</div>
	);
}

export default MidContent;
