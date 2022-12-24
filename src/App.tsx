import MainCarrousel from "./components/Carrousels/MainCarrousel/MainCarrousel";
import ShowcaseCarrousel from "./components/Carrousels/ShowcaseCarrousel/ShowcaseCarrousel";
import CategorySection from "./components/CategorySection/CategorySection";
import Header from "./components/Header/header";
import InfoSection from "./components/InfoSection/InfoSection";

function App() {
	return (
		<>
			<Header />
			<MainCarrousel />
			<InfoSection /> 
			<ShowcaseCarrousel title="MAIS VENDIDOS" />
			<CategorySection/>
		</>
	);
}

export default App;
