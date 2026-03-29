import type { LoggedInUser } from "../../types/user";
interface GreetingProps {
    user: LoggedInUser;
    videosType: "suggested" | "recommended" | "saved"
}


export default function Greeting({ user, videosType }: GreetingProps) {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl text-gray-200 font-bold">
                Welcome back, {user.name}!
            </h1>
            <p className="text-sm text-gray-500">
                Here are some {videosType} videos for you!
            </p>
        </div>
    )
}
