import { FifthProductCard } from "@/components/UI/Cards/FifthProductCard";
import { FirstProductCard } from "@/components/UI/Cards/FirstProductCard";
import { FourthProductCard } from "@/components/UI/Cards/FourthProductCard";
import { SecondProductCard } from "@/components/UI/Cards/SecondProductCard";
import { SixthProductCard } from "@/components/UI/Cards/SixthProductCard";
import { ThirdProductCard } from "@/components/UI/Cards/ThirdProductCard";

export default function Cards (){
    return(
        <main>
            <div className="px-1 m-2">
                <h1 className="font-extrabold text-4xl">Cards</h1>
                <div className="flex flex-col gap-2 rounded-4xl justify-center">
                    <div className="w-full bg-emerald-200">
                        <h2 className="text-center text-shadow-gray-950" >Display</h2>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <FirstProductCard/>
                        <SecondProductCard/>
                    </div>
                    {/* <div className="w-full bg-emerald-200 flex justify-center">
                        <h2 className="text-center text-shadow-gray-950" >Second Example</h2>
                    </div>
                    <div className="flex justify-center">
                        <SecondProductCard/>
                    </div> */}
                    <div className="w-full bg-emerald-200 flex justify-center">
                        <h2 className="text-center text-shadow-gray-950" >Third Example</h2>
                    </div>
                    <div className="flex justify-center">
                        <ThirdProductCard/>
                    </div>
                    <div className="w-full bg-emerald-200 flex justify-center">
                        <h2 className="text-center text-shadow-gray-950" >Fourth Example</h2>
                    </div>
                    <div className="flex justify-center">
                        <FourthProductCard/>
                    </div>
                    <div className="w-full bg-emerald-200 flex justify-center">
                        <h2 className="text-center text-shadow-gray-950" >Fifth Example</h2>
                    </div>
                    <div className="flex justify-center">
                        <FifthProductCard/>
                    </div>
                    <div className="w-full bg-emerald-200 flex justify-center">
                        <h2 className="text-center text-shadow-gray-950" >Sixth Example</h2>
                    </div>
                    <div className="flex justify-center">
                        <SixthProductCard/>
                    </div>

                </div>

            </div>
        </main>
    )
}