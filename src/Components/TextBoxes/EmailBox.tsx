import { NotifyMe } from "../Buttons/NotifyMe"

export const EmailBox: React.FC = () => {
    return (
        <div>
            <form className="max-w-md flex justify-center">
                <div className="flex items-center justify-center h-24 mt-24">
                    <input className="border bg-transparent w-full text-gray-700 px-2 ml-24 h-10 w-96 leading-tight focus:outline-none mr-4" type="email" placeholder="Email" aria-label="Full name" />
                    <NotifyMe />
                </div>
            </form>
        </div>
    )
}