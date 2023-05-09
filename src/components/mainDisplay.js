export default function MainDisplay() {
    return(
        <article className="main-display flex justify-center items-start px-20 bg-floral-fill text-info-text h-screen">
            <section className="action-section pt-60">
                <section className="copy-section px-10">
                    <p className="text-7xl leading-snug">Imagine setting up your own floral shop.</p>
                </section>
                <section className="form-section px-10">
                    <input placeholder="Here goes the input" />
                    <button>Join</button>
                </section>
            </section>
            <figure className="figure-section py-20 pr-20">
                <img className="scale-100" src="/bucket.png" alt="Hand holding a bucket of flowers"/>
            </figure>
        </article>
    );
}