import { EmailBox } from "../Components/TextBoxes/EmailBox"

export const Splash: React.FC = () => {
    return (
        <div className="h-screen bg-[url('assets/splash.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center">
            <div className="backdrop-blur-sm px-64 py-64">
                <span className="text-7xl text-white font-serif tracking-widest">COMING SOON</span>
                <EmailBox/>
            </div>
        </div>
    )
}