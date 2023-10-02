import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice"

const PostView = () => {
  const { isLoading, post, error } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      {isLoading && <h1>Loading Data......</h1>}
      {error && <p>error happen {error}</p>}
      {post.map((item, index) => {
        return (
          <div className="border-2 border-blue-300" key={item.id}>
            <h1>
              {index + 1}:Title:{item.title}
            </h1>
            <p>Body:{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PostView
