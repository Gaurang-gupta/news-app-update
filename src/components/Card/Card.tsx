import { Link } from 'react-router-dom';

const Card = ({ image, title, desc, author, source, published_at }: {
  image: string,
  title: string,
  source: string,
  desc: string,
  author: string,
  published_at: string,
}) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const obj = { 
    image: image,
    title: title,
    desc: desc,
    author: author || "unknown",
    source: source || "unknown",
    published_at: published_at,
  }
  const location = {
    pathname: "/read_more",
    search: new URLSearchParams(obj).toString(),
  }


  const modifyDesc = (desc: string, length: number) => {
    const start = String(desc)
    let output = ""
    for(let i=0;i<Math.min(length, start.length);i++){
      output += start[i];
    }
    return output
  }
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mx-auto relative hover:scale-105 transition-all">
      <div className="h-48">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex flex-col justify-between mb-12">
        <div>
          <h2 className="text-xl font-bold mb-2">{modifyDesc(title, 50)}...</h2>
          <p className="text-gray-700 mb-4">{modifyDesc(desc, 50)}...</p>
        </div>
        <div className="text-sm text-gray-500 ">
        <h2 className="font-bold">By: {author || "unknown"}</h2>
        <h2 className="font-bold pt-1">Source: {source || "unknown"}</h2>
          <span className="italic">{modifyDesc(published_at, 10)}</span>
        </div>
      </div>

      <Link to={location} className="text-center cursor-pointer text-lg py-2 bg-orange-400 absolute w-full bottom-0">
        Read More
      </Link>
    </div>
  );
};

export default Card;
