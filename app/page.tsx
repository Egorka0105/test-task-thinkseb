// import { FirstLoadAnimation } from 'Components';
import { Header } from 'Components/Header';
import { ScrollProvider } from 'Components/ScrollProvider';
import { BusinessSection } from 'sections/BusinessSection';
import { Footer } from 'sections/Footer';
import { GetStartedSection } from 'sections/GetStartedSection';
import { IndividualsSection } from 'sections/IndividualsSection';
import { ReviewsSection } from 'sections/ReviewsSection';

export default function Home() {
	return (
		<>
			<Header />
			<main className={'main_layout'}>
				{/*<FirstLoadAnimation />*/}

				<ScrollProvider/>


			</main>
			<Footer />
		</>
	);
}
