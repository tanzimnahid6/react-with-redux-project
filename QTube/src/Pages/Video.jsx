import { useParams } from "react-router-dom";
import Player from "../components/videoDetails/Player";
import VideoDescription from "../components/videoDetails/VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleVideo } from "../features/loadSingleVideo/singleVideoSlice";

export default function Video() {
  const singleVideo = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleVideo(id));
  }, [dispatch, id]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <Player videoDetails={singleVideo} />

            <VideoDescription videoDetails={singleVideo} />
          </div>
        </div>
      </div>
    </section>
  );
}
