import MainCarrousel from "./components/Carrousels/MainCarrousel/MainCarrousel";
import ShowcaseCarrousel from "./components/Carrousels/ShowcaseCarrousel/ShowcaseCarrousel";
import Header from "./components/Header/header";
import InfoSection from "./components/InfoSection/InfoSection";

function App() {
	return (
		<>
			<Header />
			<MainCarrousel />
			<InfoSection /> 
			<ShowcaseCarrousel title="MAIS VENDIDOS"/>
		</>
	);
}

export default App;
