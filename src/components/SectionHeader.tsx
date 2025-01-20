export  const SectionHeader = ({title, eyebrow, description}:{
    title:string;eyebrow:string; description:string;
}) => {
    return (
        <>
            <div className={`flex flex-col justify-center`}>
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-yellow  bg-clip-text text-transparent text-center ">
                    {eyebrow}
                </p>
            </div>
            <h2 className={`text-3xl md:text-5xl font-serif text-center mt-6`}>
                {title}
            </h2>
            <p className={`text-center text-text/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto`}>
                {description}
            </p>
        </>
    )
}