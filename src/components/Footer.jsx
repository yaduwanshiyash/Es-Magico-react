import logo from '../assets/images/Es Magico-white-01 1.png'
import mail from '../assets/images/mail.svg'

const Footer = () => {
    return (
        <div className="mt-10 mb-[149px]">
            <div className="grid grid-cols-4 md:grid-cols-11 mt-[81px]">
                <div className='col-span-3 ml-8 md:ml-[80px]'>
                    <img className='h-[47px] md:w-[120px] -ml-3' src={logo} alt='logo' />
                    <h4 className='md:text-[18px] text-[#0F0F0F] leading-[28px] font-medium'>Launch your own Software As A Service Application with Flex Solutions.</h4>
                </div>
                <div className='md:mt-[7px] mt-8 col-span-2 ml-8 md:ml-[110px]'>
                    <h2 className='text-[Montserrat] text-[18px] leading-[21.94px] text-[#2A3342] font-bold mb-6 md:mb-[27px]'>Product</h2>
                    <ul className='md:space-y-4 space-y-3'>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Features</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Solutions</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Pricing</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Tutorials</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Updates</li>
                    </ul>
                </div>
                <div className='md:mt-[7px] mt-8 col-span-2 ml-1 md:ml-[32px]'>
                    <h2 className='text-[Montserrat] text-[18px] leading-[21.94px] text-[#2A3342] font-bold mb-6 md:mb-[27px]'>Product</h2>
                    <ul className='md:space-y-4 space-y-3'>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Blog</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Newsletter</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Help Centre</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Carrers</li>
                        <li className='text-[16px] leading-6 font-medium text-[#0F0F0F]'>Support</li>
                    </ul>
                </div>
                <div className='col-span-4 ml-8 mt-10 md:mt-0 md:ml-[96px]'>
                    <h1 className='text-[#3A66FF] font-bold text-[25px] leading-[30.48px]'>Ready to delight your users?</h1>
                    <button className='flex justify-center items-center gap-[14px] text-white w-[190px] h-[56px] rounded-[28px] py-[5px] px-[10px] bg-[#0F0F0F] mt-[30px]'>
                        <span className='font-semibold text-[16px] leading-[20.16px]'>Build</span>
                        <img className='w-[19px] h-[19px] bg-white' src={mail} alt='mail' />
                    </button>
                </div>
            </div>
            <div className='bg-[#EEF0F3] w-full h-[1px] mt-12'></div>
            <p className='text-[14px] leading-[20px font-normal] my-10 text-center'>© 2021 Flex. All rights reserved.</p>
        </div>
    )
}

export default Footer
