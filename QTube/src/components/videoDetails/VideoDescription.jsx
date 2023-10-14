/* eslint-disable react/prop-types */
import LikeUnlike from "./LikeUnlike";

export default function VideoDescription({ videoDetails }) {
  const { video ,isLoading } = videoDetails;
  console.log(video);
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {!isLoading && video.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>

        <LikeUnlike likes={video.likes} id={video.id} unlikes={video.unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
}
