import { useState } from 'react';

const StayConnected = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='mt-10 px-4 md:px-20 py-[55px]'>
            <div className="bg-[#F9F9F9] rounded-[30px]">
                <h2 className="text-[50px] text-[Outfit] font-bold text-center leading-[63px] pt-10">Let&apos;s stay <span className='text-[#538CFF]'>connected</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-[55px] mb-[44px] px-6   md:px-[50px]">
                        <div className="relative">
                            <select
                                value={selectedOption}
                                onChange={handleSelectChange}
                                className="border rounded-[8px] px-[14px] py-[10px] text-left h-14 w-full placeholder-black"
                            >
                                <option value="">I want to</option>
                                <option value="subscribe">Subscribe to newsletter</option>
                                <option value="contact">Contact support</option>
                                <option value="feedback">Send feedback</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Name"
                            className="border rounded-[8px] px-[14px] py-[10px] text-left h-14 w-full placeholder-black"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email Address"
                            className="border rounded-[8px] px-[14px] py-[10px] text-left h-14 w-full placeholder-black"
                        />
                        <input
                            type="mobile"
                            value={mobile}
                            onChange={handleMobileChange}
                            placeholder="+91 | 0000000000"
                            className="border rounded-[8px] px-[14px] py-[10px] text-left h-14 w-full placeholder-black"
                        />
                    </div>
                    <div className="flex justify-center pb-[35px]">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-12 py-4 text-[16px] font-semibold leading-[20.16px] bg-[#0F0F0F] text-white rounded-[28px] hover:bg-opacity-90"
                        >
                            Submit
                            <ArrowRightIcon className="ml-2 h-6 w-6" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StayConnected

function ArrowRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
