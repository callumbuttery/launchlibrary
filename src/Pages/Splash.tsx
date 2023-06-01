import { EmailBox } from "../Components/Forms/EmailBox"

export const Splash: React.FC = () => {
    return (
        <div className="h-screen bg-[url('assets/spacex-tKs_2sBoqAg-unsplash.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center">
            <div>
                <span className="flex justify-center text-7xl text-white font-serif tracking-widest mt-24">Launch Library</span>
                <span className="mt-5 flex justify-center text-3xl text-gray-400 font-serif tracking-widest">COMING SOON</span>
                <EmailBox/>
            </div>
        </div>
    )
}