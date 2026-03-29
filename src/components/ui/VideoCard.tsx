import type { Video } from "../../types/video";

export default function VideoCard({ video }: { video: Video }) {
    return (
        <article className="max-w-2xl bg-gray-800 border border-gray-700 p-4 flex gap-4 rounded-md">
            <img src={video.thumbnail} alt="thumbnial" />
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">{video.title}</h2>
                <p className="text-sm italic text-gray-500">{video.description}</p>
            </div>
        </article>
    )
}

