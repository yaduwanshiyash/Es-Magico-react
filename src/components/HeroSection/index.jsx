
const HeroSection = () => {
    return (
        <div  className="w-[70%] md:h-[480px] h-auto flex flex-col justify-center items-center md:mx-[247px] md:mt-[191px] mt-auto mx-auto">
            <div className='px-[52px]'>
                <p className='text-[Outfit] box md:text-[90px] text-4xl font-light text-[#0F0F0F] md:leading-[102px] leading-10 text-center'>
                    <span className="font-bold">Don&apos;t let</span> tech become a barrier!
                </p>
            </div>

            <div className='md:mt-[60px] mt-auto'>
                <p className='text-[Outfit] font-normal text-lg md:text-[30px] md:leading-[44px] leading-7 text-center'>
                    We leverage AI as an enabler, building advanced tech that brings your ideas to life.
                </p>
            </div>
            <div className='text-[#538CFF] mt-10 md:mt-[191px] md:mb-0 mb-10 flex flex-col items-center space-y-0'>
                <span className="h-10 w-10 text-4xl rotate-90">&#10509;</span>
                <span className="text-[Outfit] font-semibold text-[32px] leading-[39px] text-center">let’s go</span>
            </div>
        </div>
    );
}

export default HeroSection;
