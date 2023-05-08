export default function NavBar() {
    return(
        <nav className="bg-floral-gray font-sans text-4xl">
            <section className="flex items-center justify-between px-12 py-4">
                <div className="text-white logo">
                    <p>Floral Shop News</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-floral-purple flex justify-center items-center">
                    <span className="text-white text-3xl">F</span>
                </div>
            </section>
        </nav>
    );
}