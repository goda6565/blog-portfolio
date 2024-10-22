import Profile from "@/components/profile/Profile";
import Timeline from "@/components/profile/Timeline";

export default function About() {
    return(
        <div className="flex flex-col w-full">
            <h1 className="text-center text-3xl font-bold my-3">About</h1>
            <div className="flex xl:flex-row flex-col items-center justify-center flex-1">
                <div className="flex-1 flex items-center justify-center w-full mb-5">
                    <Profile />
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}