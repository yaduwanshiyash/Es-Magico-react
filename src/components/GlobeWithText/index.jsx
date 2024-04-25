import globe from '../../assets/images/Globe.png';
import location from '../../assets/images/location.png';

const Index = () => {
    return (
        <div className="md:h-[600px]">
            <div className="md:rounded-[30px] rounded-xl mx-0 md:mx-[80px] w-full md:w-[88%] bg-[#f7f7f7]">
                <div className='text-[Outfit] font-bold text-[24px] md:text-[50px] leading-7 md:leading-[63px] text-center ml-auto mr-auto w-[90%] md:w-[803px] pt-8 md:pt-[75px]'>
                    We have launched <span className="text-[#538CFF]">10+ products </span> in <span className="text-[#538CFF]">10+ countries</span>
                </div>
                <div className='flex justify-center'>
                    <img className="object-contain relative max-w-full h-auto" src={globe} alt="globe" />
                    <div className='absolute md:block hidden'>
                        <img className="relative object-contain h-[28px] w-[28px] top-7 -left-[90px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[22px] h-[22px] top-1 left-1" src={location} alt="location" />
                        <img className=" relative object-contain w-[19px] h-[19px] top-[30px] left-[180px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[28px] h-[28px] top-[25px] left-[125px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[19px] h-[19px] top-[78px] left-[215px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[19px] h-[19px] top-[40px] left-[68px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[28px] h-[28px] top-[12px] -left-[138px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[23px] h-[22px] top-[18px] -left-[220px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[22px] h-[22px] -top-[72px] -left-[180px]" src={location} alt="location" />
                        <img className=" relative object-contain w-[16px] h-[15px] -top-[115px] -left-[205px]" src={location} alt="location" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Index;
