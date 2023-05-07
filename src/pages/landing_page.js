import NavBar from "@/components/navbar";
import MainDisplay from "@/components/mainDisplay";
import Footer from "@/components/footer";

export default function LandingPage() {
    return(
        <>
            <NavBar />
            <h1 className="text-3xl font-bold underline">Let's test tailwindcss</h1>
            <MainDisplay />
            <Footer />
        </>
    );
}