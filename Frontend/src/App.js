import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import LowerContent from "./components/lower/lowerContent";
import MidContent from "./components/midContent/midContent";
import Socials from "./components/socials/socials";

function App() {
	return (
		<div className="App">
			<Header />
			<MidContent />
			<Socials showLogo={true}  />
			<LowerContent />
			<Footer />
		</div>
	);
}

export default App;
