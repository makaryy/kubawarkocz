import Paper from "@/components/Paper";

const About = () => {
    return (
        <article>
            <div className="flex flex-col justify-center items-center p-8">
                <Paper className="w-full">
                    <p className="text-center text-sm md:text-lg">
                        Z wykształcenia kryminolog, z zawodu iluzjonista. Wiedzę na temat ludzkiego umysłu wykorzystuje jednak podczas swoich pokazów
                        - co w połączeniu z magicznymi umiejętnościami daje nam jedyne w swoim rodzaju show ! Od ponad 5 lat występuje zarówno dla
                        dzieci i dorosłych, z talią kart zjeździł całą Polskę, występował w największych miastach w kraju. Na najbliższej imprezie
                        chętnie dostarczy rozrywki Tobie i Twoim gościa !
                    </p>
                </Paper>
                {/* <Carousel showThumbs={false} showStatus={false} swipeable infiniteLoop showArrows={matches ? true : false}>
                        <Box>
                            <img
                                src="/assets/kuba2.JPG"
                                alt="Kuba Warkocz 2"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "cover" : "contain",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/assets/kuba3.JPG"
                                alt="Kuba Warkocz 3"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "contain" : "cover",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/assets/kuba4.JPG"
                                alt="Kuba Warkocz 4"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "cover" : "contain",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                    </Carousel> */}
            </div>
        </article>
    );
};

export default About;
