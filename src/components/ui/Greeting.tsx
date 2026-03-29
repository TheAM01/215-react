import type { LoggedInUser } from "../../types/user";
interface GreetingProps {
    user: LoggedInUser;
    videosType: "suggested" | "recommended" | "saved"
}


export default function Greeting({ user, videosType }: GreetingProps) {
    const date = new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return (
        <div className="max-w-2xl mx-auto">
            {/* Card */}
            <div className="relative bg-neutral-950 border border-neutral-800 overflow-hidden p-8">

                {/* Top white rule */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-white" />

                {/* Date stamp */}
                <span className="absolute top-4.5 right-6 text-[9px] tracking-[0.2em] text-neutral-700 font-medium uppercase">
                    {date}
                </span>

                {/* Tag line */}
                <p className="text-[9px] tracking-[0.25em] text-neutral-600 uppercase font-semibold mb-7">
                    — Dashboard
                </p>

                {/* Heading */}
                <h1 className="text-4xl font-extrabold text-neutral-200 leading-none tracking-tighter uppercase">
                    Welcome back,
                </h1>
                <h1 className="text-4xl font-extrabold text-white leading-none tracking-tighter uppercase border-b border-neutral-800 pb-6 mb-6">
                    {user.name}<span className="text-neutral-700">.</span>
                </h1>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                    <p className="text-[11px] text-neutral-500 tracking-widest uppercase font-medium">
                        Curated{" "}
                        <span className="text-neutral-400">{videosType}</span>{" "}
                        videos for you
                    </p>

                    {/* Bar ornament */}
                    <div className="flex items-center gap-[3px]">
                        <div className="w-[3px] h-2 bg-neutral-800" />
                        <div className="w-[3px] h-4 bg-white" />
                        <div className="w-[3px] h-2 bg-neutral-800" />
                    </div>
                </div>
            </div>

            {/* Shadow line */}
            <div className="h-px bg-gradient-to-r from-white to-transparent opacity-[0.08] mt-px" />
        </div>
    );
}
