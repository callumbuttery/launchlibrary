import { EmailBox } from "../Components/Forms/EmailBox"

export const Splash: React.FC = () => {
    return (
        <div className="h-screen bg-[url('assets/annie-spratt-F2M5Uynt62U-unsplash.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center">
            <div>
                <span className="flex justify-center text-7xl text-gray-500 font-serif tracking-widest">Ark Insight</span>
                <span className="mt-5 flex justify-center text-3xl text-gray-400 font-serif tracking-widest">COMING SOON</span>
                <EmailBox/>
            </div>
        </div>
    )
}