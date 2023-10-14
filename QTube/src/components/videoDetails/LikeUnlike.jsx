import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { likeIncrement } from "../../features/like/likeSlice";


// eslint-disable-next-line react/prop-types
export default function LikeUnlike({likes,unlikes,id}) {
    const dispatch = useDispatch()

    const updateLike = (idd)=>{
         dispatch(likeIncrement())
    }
    const updateUnlike = (idd)=>{

    }
    
    return (
      <div className="flex gap-10 w-48">
        <div onClick={() => updateLike(id)} className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={likeImage} alt="Like" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {likes}
          </div>
        </div>
        <div onClick={() => updateUnlike(id)} className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src={unlikeImage} alt="Unlike" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {unlikes}
          </div>
        </div>
      </div>
    );
}
