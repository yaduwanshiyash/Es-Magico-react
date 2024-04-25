import frame1 from '../../assets/images/frame1.png'
import frame2 from '../../assets/images/frame2.png'
import frame3 from '../../assets/images/frame3.png'

const Sas = () => {
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="bg-[#f7f7f7] md:rounded-[30px] rounded-xl mx-[13px] md:mx-[120px] mt-[60px] p-10 md:p-[50px]">
      <div className="">
        <h1 className="text-[Outfit] text-[32px] leading-10 font-bold text-[#272727]">Software as a Service</h1>
        <h4 className="text-[Outfit] text-lg md:text-[24px] leading-7 md:leading-[34px] font-normal text-[#7A7A7A] mt-[18px]">Our plug-and-play products enhance your existing product suite</h4>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-10 md:gap-[100px] mt-[31px]">
        <div>
          <div><img className='rounded-[10px]' src={frame1} alt='' /></div>
          <div className='text-[Outfit] text-[#0F0F0F] mt-[10px]'>
            <h2 className='font-semibold text-[28px] leading-[32px]'>Gratify</h2>
            <h5 className='font-normal text-[18px] leading-[22px] mt-4'>Rewards & Gamification SaaS</h5>
          </div>
        </div>
        <div>
          <div><img className='rounded-[10px]' src={frame2} alt='' /></div>
          <div className='text-[Outfit] text-[#0F0F0F] mt-[10px]'>
            <h2 className='font-semibold text-[28px] leading-[32px]'>Esto</h2>
            <h5 className='font-normal text-[18px] leading-[22px] mt-4'>Smart Marketing & Sales SaaS</h5>
          </div>
        </div>
        <div>
          <div><img className='rounded-[10px]' src={frame3} alt='' /></div>
          <div className='text-[Outfit] text-[#0F0F0F] mt-[10px]'>
            <h2 className='font-semibold text-[28px] leading-[32px]'>Pyzo</h2>
            <h5 className='font-normal text-[18px] leading-[22px] mt-4'>Conversational AI SaaS</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sas
