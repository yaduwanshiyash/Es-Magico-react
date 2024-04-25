import { useEffect, useState } from 'react';

const TextContent = () => {
    const [currentWord, setCurrentWord] = useState('');
    const words = ['Tech', 'Product', 'Design'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentWord(words[currentIndex]);
            setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (
        <div>
            <div className="text-[Outfit] font-bold text-xl md:text-[42px] leading-7 md:leading-[53px] mt-10 md:mt-0 text-center md:text-justify md:ml-[224px] md:mr-[175px]">
                <span className='text-center'>We are a one-stop shop for all things </span>
                <span className='w-[152px] text-start text-[#538CFF] ml-2'>{currentWord}</span>
            </div>
        </div>
    );
}

export default TextContent;
