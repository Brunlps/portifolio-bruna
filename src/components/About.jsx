import { FiArrowUpRight } from "react-icons/fi";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

const Sobre = () => {
    return (
        <>
            <div className="flex w-full flex-col h-screen bg-blue-900 dark:bg-zinc-900 mt-20 px-4">
                <h1 className="text-2xl font-bold text-white">OI, EU SOU A BRUNA.</h1>
                <p className="text-zinc-300">Desenvolvedora frontend com experiência em React e TypeScript.</p>

                <div className="mt-4 w-1/2 justify-between flex">
                    <div className="w-50 h-20 flex justify-center items-center">
                        <p className="text-zinc-300 ml-10
                        rounded-2xl border border-zinc-500 p-2 mb-3 flex w-42.5 md:justify-center md:items-center">Contato
                            <div className="ml-10 border border-zinc-500 p-1 w-8 h-8 flex rounded-[50%] items-center justify-center">
                                <FiArrowUpRight />
                            </div>
                        </p>
                        <div className="m-10 border rounded-2xl w-[5px] border-[#222222]">
                            <a href=""><RxGithubLogo /></a>

                        </div>
                        <div>

                            <a href=""><FaLinkedin /></a>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Sobre;