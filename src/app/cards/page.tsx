import { FirstProductCard } from "@/components/UI/Cards/FirstProductCard";
import { SecondProductCard } from "@/components/UI/Cards/SecondProductCard";
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

                </div>

            </div>
        </main>
    )
}