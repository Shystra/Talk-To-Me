'use client'
import { Camera, Computer, Mic, MuteComputer, MuteMic, MuteVideo, Phone } from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
    const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0') + ':';
            const minutes = date.getHours().toString().padStart(2, '0');
                const [isMuted, setIsMuted] = useState(false);
                    const [isCameraOff, setIsCameraOff] = useState(false);
                        const [isScreenSharing, setIsScreenSharing] = useState(false)
    return (
        <div className="fixed bottom-0 bg-black py-2 w-full">
            <Container>
            <div className="grid grid-cols-3">
                <div className="flex items-center">
                    <p className="text-xl">{hours}{minutes}</p>
                </div>
                <div className="flex space-x-6 justify-center">
                    {isMuted ? (<MuteMic className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md" onClick={() => setIsMuted(!isMuted)}/>) : (
                        <Mic className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950  rounded-md" onClick={() => setIsMuted(!isMuted)}/>
                    )}

                    {isCameraOff ? (<MuteVideo className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md" onClick={() => setIsCameraOff(!isCameraOff)}/>) : (
                        <Camera className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={() => setIsCameraOff(!isCameraOff)}/>
                    )}

                    {isScreenSharing ? (<MuteComputer className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md" onClick={() => setIsScreenSharing(!isScreenSharing)}/>) : (
                        <Computer className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={() => setIsScreenSharing(!isScreenSharing)}/>
                    )}
        
                    <Phone className="h-12 w-16 text-white hover:bg-red-500 p-2 cursor-pointer bg-primary rounded-md" />
                    
                </div>
            </div>
            </Container>
        </div>
    )
}