import { Navbar } from "../../components/UI/Navbars/Navbar"


export default function Navbars(){
    return(
        <main>
            <div className="px-1 m-2">
                <h1 className="font-extrabold text-4xl " >Navbars</h1>
                <div className="flex flex-col gap-2 rounded-4xl" >
                    <div className="w-full bg-slate-400 flex justify-center shadow shadow-gray-200">
                        <h2 className="text-white font-bold" >First Example</h2>
                    </div>
                    <Navbar/>
                </div>
            </div>
        
        </main>
    )

}