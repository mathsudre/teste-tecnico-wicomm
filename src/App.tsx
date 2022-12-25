import DoubleItemCarrousel from "./components/Carrousels/DoubleItemCarrousel/DoubleItemCarrousel";
import MainCarrousel from "./components/Carrousels/MainCarrousel/MainCarrousel";
import ShowcaseCarrousel from "./components/Carrousels/ShowcaseCarrousel/ShowcaseCarrousel";
import CategorySection from "./components/CategorySection/CategorySection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import InfoSection from "./components/InfoSection/InfoSection";
import LayoutModelOne from "./components/LayoutsComponents/LayoutModelOne/LayoutModelOne";
import LayoutModelTwo from "./components/LayoutsComponents/LayoutModelTwo/LayoutModelTwo";
import { dataShowcaseCarousel, dataShowcaseCarouselCreme, dataShowcaseCarouselHealth, dataShowcaseCarouselNewProducts, dataShowcaseCarouselSkin } from "./database/database";


function App() {
	return (
		<>
			<Header />
			<MainCarrousel />
			<InfoSection /> 
			<ShowcaseCarrousel title="mais vendidos" data={dataShowcaseCarousel}/>
			<CategorySection />
			<DoubleItemCarrousel />
			<ShowcaseCarrousel title="os mais desejados" data={dataShowcaseCarouselCreme}/>
			<ShowcaseCarrousel title="vida saudável"  data={dataShowcaseCarouselHealth}/>
			<LayoutModelOne />
			<ShowcaseCarrousel title="corpo e banho"  data={dataShowcaseCarouselSkin}/>
			<ShowcaseCarrousel data={dataShowcaseCarouselSkin}/>			
			<LayoutModelTwo />
			<ShowcaseCarrousel title="fragrâncias"  data={dataShowcaseCarousel}/>
			<ShowcaseCarrousel data={dataShowcaseCarousel}/>
			<ShowcaseCarrousel title="acabaram de chegar" data={dataShowcaseCarouselNewProducts} bgColor/>
			<Footer/>
		</>
	);
}

export default App;
