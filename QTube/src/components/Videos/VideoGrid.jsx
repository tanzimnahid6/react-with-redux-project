import { useEffect } from "react"
import VideoGridItem from "./VideoGridItem"
import { fetchVideos } from "../../features/Videos/VideoSlice"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../UI/Loading"

export default function VideoGrid() {
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  )
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchVideos())
  }, [dispatch])
  let content

  if (isLoading) content = <Loading />
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ))
  }

  return (
    <section className="py-8">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-2 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  )
}
