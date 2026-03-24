import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StatsBar from "@/app/components/StatsBar";
import Resume from "@/app/components/Resume";
import Projects from "@/app/components/Projects";
import Analytics from "@/app/components/Analytics";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className='page'>
				<Hero />
				<StatsBar />
				<Resume />
				<Projects />
				<Analytics />
				<Contact />
			</main>
			<ThemeSwitcher />
			<Footer />
		</>
	);
}
