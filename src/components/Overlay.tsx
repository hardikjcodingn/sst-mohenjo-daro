export const Overlay = () => {
    return (
        <div className="w-full">
            {/* Section 1: Intro */}
            <section className="h-screen w-full flex flex-col justify-center items-start p-10 max-w-2xl">
                <h1 className="text-8xl font-black text-gray-800 drop-shadow-md">
                    MOHENJO<br />DARO
                </h1>
                <p className="text-2xl mt-4 font-serif text-gray-700 bg-white/50 p-2 rounded">
                    "The Mound of the Dead" <br />
                    An interactive journey through the Indus Valley Civilization.
                </p>
            </section>

            {/* Section 2: Great Bath */}
            <section className="h-screen w-full flex flex-col justify-center items-end p-10">
                <div className="bg-white/80 p-8 rounded-lg shadow-xl max-w-xl backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-teal-800 mb-4">The Great Bath</h2>
                    <p className="text-lg text-gray-800">
                        The most impressive structure of Mohenjo-daro. A watertight tank built with fine baked bricks, gypsum mortar, and a layer of natural bitumen (tar).
                        <br /><br />
                        It was likely used for ritualistic bathing or religious ceremonies, highlighting the civilization's focus on cleanliness and purification.
                    </p>
                </div>
            </section>

            {/* Section 3: The Citadel */}
            <section className="h-screen w-full flex flex-col justify-center items-start p-10">
                <div className="bg-white/80 p-8 rounded-lg shadow-xl max-w-xl backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-orange-800 mb-4">The Citadel</h2>
                    <p className="text-lg text-gray-800">
                        The fortified part of the city, built on a raised mud-brick platform. It housed important administrative buildings, the Great Granary, and the Assembly Hall.
                        <br /><br />
                        The Citadel overlooked the Lower Town and was separated from the residential areas.
                    </p>
                </div>
            </section>

            {/* Section 4: Lower Town & Urban Planning */}
            <section className="h-screen w-full flex flex-col justify-center items-end p-10">
                <div className="bg-white/80 p-8 rounded-lg shadow-xl max-w-xl backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-stone-800 mb-4">Urban Planning</h2>
                    <p className="text-lg text-gray-800">
                        Mohenjo-daro is famous for its grid-like street system. Main streets ran North-South and East-West, intersecting at right angles.
                        <br /><br />
                        Houses were made of standardized baked bricks, had multiple rooms, and often featured their own wells and bathrooms.
                    </p>
                </div>
            </section>

            {/* Section 5: Drainage */}
            <section className="h-screen w-full flex flex-col justify-center items-center p-10">
                <div className="bg-white/80 p-8 rounded-lg shadow-xl max-w-xl backdrop-blur-sm text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Drainage System</h2>
                    <p className="text-lg text-gray-800">
                        The city had the world's first urban sanitation system. Covered drains ran along the streets, connected to house bathrooms via terracotta pipes.
                        <br /><br />
                        Soak pits and manholes were placed at intervals for cleaning, showing an advanced understanding of hygiene.
                    </p>
                </div>
            </section>

            {/* Section 6: End */}
            <section className="h-screen w-full flex flex-col justify-center items-center p-10">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Project Report</h1>
                <div className="bg-white/90 p-10 rounded-xl shadow-2xl text-center">
                    <p className="text-xl">Submitted by:</p>
                    <p className="text-3xl font-bold mt-2">Hardik Jain</p>
                    <p className="text-lg mt-4 text-gray-600">Vidya Global School</p>
                    <p className="text-sm mt-8 text-gray-500">Built with React Three Fiber</p>
                </div>
            </section>
        </div>
    )
}
