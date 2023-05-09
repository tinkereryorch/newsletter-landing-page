export default function MainDisplay() {
    return(
        <article className="main-display flex justify-center items-start px-20 bg-floral-fill text-info-text h-screen">
            <section className="action-section pt-60">
                <section className="copy-section px-10">
                    <p className="text-7xl leading-snug">Imagine setting up your own floral shop.</p>
                    <p className="text-4xl px-2 py-2">Join our newsletter</p>
                </section>
                <section className="flex form-section px-10">
                    <section className="bg-floral-purple p-2 rounded-md w-4/12">
                        <input className="rounded-md p-1 w-full"placeholder="your email" />
                    </section>
                    <button className="ml-4 rounded-md p-1 w-32 text-white text-xl bg-floral-olive">Join</button>
                </section>
            </section>
            <figure className="figure-section py-20 pr-20">
                <img className="scale-100" src="/bucket.png" alt="Hand holding a bucket of flowers"/>
            </figure>
        </article>
    );
}