import first from "../../assets/images/company/1.png";
import sec from "../../assets/images/company/2.png";
import third from "../../assets/images/company/3.png";
import fourth from "../../assets/images/company/4.png";
import fifth from "../../assets/images/company/5.png";
import sixth from "../../assets/images/company/6.png";
import seventh from "../../assets/images/company/7.png";
import eight from "../../assets/images/company/8.png";
import nine from "../../assets/images/company/9.png";
import ten from "../../assets/images/company/10.png";
import eleven from "../../assets/images/company/11.png";

const index = () => {
    return (
        <div className="py-10 flex flex-col justify-center items-center">
            <span className="text-[Outfit] font-bold md:text-[50px] text-3xl mt-7 md:leading-[63px] text-[#0F0F0F]">
                We have <span className="text-[#538CFF]"> built</span> for
            </span>
            <div className="mt-10 md:mx-[120px] mx-0 gap-4 grid md:grid-flow-col grid-flow-row grid-cols-2 md:grid-cols-6 gap-x-[30px] md:gap-x-[60px]">
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={sec} alt="" />
                </div>
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={first} alt="" />
                </div>
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={sixth} alt="" />
                </div>
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={fifth} alt="" />
                </div>
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={fourth} alt="" />
                </div>
                <div className="rounded-[10px] w-[150px] h-[100px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={third} alt="" />
                </div>
            </div>

            <div className="mt-10 mx-auto grid gap-4 md:grid-flow-col grid-flow-row grid-cols-3 md:grid-cols-6 gap-x-[30px]">
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={ten} alt="" />
                </div>
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={eleven} alt="" />
                </div>
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={eight} alt="" />
                </div>
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={nine} alt="" />
                </div>
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={seventh} alt="" />
                </div>
                <div className="rounded-[10px] w-[90px] h-[60px] flex justify-center items-center bg-[#f7f7f7]">
                    <img className="object-contain grayscale" src={eleven} alt="" />
                </div>
            </div>

        </div>
    )
}

export default index
