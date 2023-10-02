import CounterView from "./features/counter/CounterView"
import PostView from "./features/posts/PostView"

const App = () => {
  return (
    <div className="w-full ">
      <CounterView></CounterView>
      <div className="w-full border-2 border-blue-500 mt-4">
        <PostView></PostView>
      </div>
    </div>
  )
}

export default App
