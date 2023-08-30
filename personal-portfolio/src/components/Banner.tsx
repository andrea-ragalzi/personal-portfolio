import draw from './../assets/draw.svg';
import resumePDF from './../assets/pdf/CV_RAGALZI_230821.pdf';

const Banner = () => {
    const handleResumeDownload = () => {
        const a = document.createElement('a');
        a.href = resumePDF;
        a.download = 'CV_RAGALZI_230821.pdf';
        a.click();
    };

    return (
        <div className="flex flex-col sm:justify-evenly items-center sm:flex-row mt-12 sm:mt-2">
            <div className="mb-10 sm:order-1 flex flex-col justify-center items-center">
                <h2 className="mb-2">Andrea Ragalzi</h2>
                <p className="mb-14">software & web developer</p>
                <div className='flex flex-col mb-14 gap-5'>
                    <button onClick={handleResumeDownload}>
                        CV
                    </button>
                </div>
            </div>
            <div className="mb-10 sm:order-2 sm:w-2/5 px-5">
                <img src={draw} alt="Hero SVG" />
            </div>
        </div>
    );
};

export default Banner;
