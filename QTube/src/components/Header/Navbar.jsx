const Navbar = () => {
  return (
    <div className="flex w-full bg-[#0F0F0F] text-white p-2">
      <div className="w-1/2">
        <a className="btn btn-ghost normal-case text-xl font-bold ">QTube</a>
      </div>
      <div className="flex gap-8  w-2/3 justify-between">
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 bg-slate-800 md:w-auto"
          />
        </div>
        {/* avatar */}
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://picsum.photos/200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
