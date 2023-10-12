

// eslint-disable-next-line react/prop-types
const SingleTag = ({title}) => {
    return (
      <li  className="bg-slate-800 hover:bg-slate-900 p-1 rounded">
        {title}
      </li>
    );
};

export default SingleTag;