export default function MainDisplay() {
    return(
        <article className="main-display bg-floral-fill px-10 py-10">
            <section className="action-section px-10 py-10">
                <section className="copy-section px-10 py-10">
                    <p>Inside copy section</p>
                </section>
                <section className="form-section px-10 py-10">
                    <input placeholder="Here goes the input" />
                    <button>Join</button>
                </section>
            </section>
            <figure className="figure-section px-10 py-10">
                <p>Image</p>
            </figure>
        </article>
    );
}