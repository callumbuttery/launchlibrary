import { Link as RouterLink } from 'react-router-dom';

export const Nav: React.FC = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0">
            <nav className="bg-transparent h-24 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-transparent">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex mx-auto justify-center w-full">
                        <div className="pt-7 flex p-4 mt-4 drop-shadow-4xl  md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium">
                            <RouterLink className="text-lg block py-2 pl-3 pr-3 text-white drop-shadow-4xl hover:text-[#FF5733] hover:scale-110 hover:duration-300 tracking-[.15em] font-header md:hover:bg-transparent md:p-0" to='/'>Home</RouterLink>

                            <RouterLink className="text-lg block py-2 pl-3 pr-3 text-white drop-shadow-4xl hover:text-[#FF5733] hover:scale-110 hover:duration-300 tracking-[.15em] font-header md:hover:bg-transparent md:p-0" to='/launches'>SpaceX Launches</RouterLink>

                            <RouterLink className="text-lg block py-2 pl-3 pr-3 text-white drop-shadow-4xl hover:text-[#FF5733] hover:scale-110 hover:duration-300 tracking-[.15em] font-header md:hover:bg-transparent md:p-0" to='/upcoming'>Starlink</RouterLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}