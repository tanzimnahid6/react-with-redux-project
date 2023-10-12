import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import  { fetchTags } from "../../features/tags/fetchAllTagSlice"

import SingleTag from "./singleTag"


const Tag = () => {
  const {tags} = useSelector((state)=>state.tags)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTags());
  },[dispatch])


  return (
    <div className="bg-[#0F0F0F] text-white pb-2 cursor-pointer font-bold">
      <ul className="flex gap-4 justify-start mx-4 ">
        {tags.length > 0 ? (
          tags.map((item) => (
            <SingleTag key={item.id} title={item.title}></SingleTag>
          ))
        ) : (
          <h1>No tag found</h1>
        )}
      </ul>
    </div>
  );
}

export default Tag
