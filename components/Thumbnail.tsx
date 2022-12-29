import Image from "next/image";
import docker from "../assets/images/docker.jpg";
import { GoCalendar } from 'react-icons/go';

export default function Thumbnail(){
    return (
        <div className="w-full h-fit p-6 md:p-8 drop-shadow-xl border-2 rounded-2xl border-neutral-400">
            <Image className="w-full rounded-lg" src={docker} alt="img"/>
            <h1 className="mt-6 text-xl md:text-2xl">Introduction Docker containerisation and managing it with kubernetes cluster</h1>
            <div className="mt-6 w-full flex items-center justify-start">
                <div className="flex w-fit items-center justify-start gap-2">
                    <GoCalendar/>
                    <p className="mt-1 text-neutral-400">11-12-2022</p>
                </div>
            </div>
        </div>
    )
}