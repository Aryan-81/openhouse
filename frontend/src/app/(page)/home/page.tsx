import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const eventTypes = [
    { type_id: 1, type_title: 'Art Exhibition' },
    { type_id: 2, type_title: 'Tech Conference' },
    { type_id: 3, type_title: 'Art Exhibition' },
  ];
  

export default function Home() {
    return (
        <>
            <Header/>
            <HeroSection eventTypes={eventTypes}/>
            <Footer/>
        </>
    );
}
