// import { FirstLoadAnimation } from 'Components';
import { Header } from 'Components/Header';
import { Footer } from 'sections/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<main className={'main_layout'}>{/*<FirstLoadAnimation />*/}</main>
			<Footer />
		</>
	);
}
