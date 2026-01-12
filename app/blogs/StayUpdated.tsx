const StayUpdated = () => {
    return (
        <section className="bg-[#101828] py-20">
            <div>
                <h1 className="text-4xl pt-4 px-2 text-white font-bold text-center">
                    Stay Updated
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto mt-7 text-[20px] text-center">
                    Subscribe to our newsletter for the latest rental tips, market insights, and exclusive offers.
                </p>
                <div className="flex gap-5 items-center justify-center mt-15">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[320px] rounded-full border border-white/60 bg-transparent px-6 py-3 text-white placeholder-white/60 outline-none focus:border-white"
                    />

                    <button className="rounded-full bg-white px-6 py-3 font-medium text-blue-600 hover:bg-gray-100 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StayUpdated