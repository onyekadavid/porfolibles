    import { FcGoogle } from "react-icons/fc";
    import { FaGithub } from "react-icons/fa";
    import { BsTwitterX } from "react-icons/bs";

    export default  function () {
        return(
            <main>
                <section className="min-h-[720px] flex justify-center items-center">
                    <blockquote className="w-[310px] h-[340px] border border-slate-300  border-solid border-2 px-3 py-4 rounded-md ">
                        <p className="text-blue-900 font-bold">Wether you are a new or an existing <br/> user, sigin in to continue to your<br/> account</p><br />
                        
                        <div className="gap-6 flex flex-col ">
                            <div className="border border-slate-300  border-solid border-2 p-8 rounded-md h-[54px] py-4 flex flex-rows gap-6 justify-center w-[280px]">
                                <FcGoogle className="text-2xl"/>
                                <p className="text-blue-900 font-bold">Google</p>
                            </div>
                            <div className="border border-slate-300  border-solid border-2 p-8 rounded-md h-[54px] py-4 flex flex-rows gap-6 justify-center w-[280px]">
                                <FaGithub className="text-2xl"/> 
                                <p className="text-blue-900 font-bold">GitHub</p>
                            </div>
                            <div className="border border-slate-300  border-solid border-2 p-8 rounded-md h-[54px] py-4 flex flex-rows gap-6 justify-center w-[280px]">
                                <BsTwitterX className="text-2xl"/>
                                <p className="text-blue-900 font-bold">Twitter</p> 
                            </div>
                        </div>
                    </blockquote>
                </section>
            </main>
        )
    }