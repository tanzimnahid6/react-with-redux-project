const Tag = () => {
  return (
    <div className="bg-[#0F0F0F] text-white pb-2 cursor-pointer font-bold">
      <ul className="flex gap-4 justify-start mx-4 ">
        <li className="bg-slate-800 hover:bg-slate-900 p-1 rounded">
          Football
        </li>
        <li className="bg-slate-800 text-blue-600 hover:bg-slate-900 p-1 rounded">
          Cricket
        </li>

        <li className="bg-slate-800 hover:bg-slate-900 p-1 rounded">
          Volleyball
        </li>
        <li className="bg-slate-800 hover:bg-slate-900 p-1 rounded">
          Baseball
        </li>
      </ul>
    </div>
  )
}

export default Tag
