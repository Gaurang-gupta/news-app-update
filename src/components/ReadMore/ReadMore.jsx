import { useLocation } from "react-router-dom"

function ReadMore() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryObject = Object.fromEntries(queryParams.entries());

  const modifyDesc = (desc, length) => {
    const start = String(desc)
    let output = ""
    for(let i=0;i<Math.min(length, start.length);i++){
      output += start[i];
    }
    return output
  }

  return (
    <main className="min-w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold py-3 text-center">{queryObject?.title}</h1>
        <div className="flex items-center justify-center">
          <img
            src={queryObject?.image}
            alt="Image for news"
            className="object-cover xs:w-full xs:h-full md:w-3/4 md:h-3/4"
          />
        </div>
        <div className="py-3 text-justify text-lg">
          <p>{queryObject?.desc}</p>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto italic font-bold text-gray-600 flex items-center justify-between pt-3 pb-6">
        {/* published_at */}
        <div>
          Published At: {modifyDesc(queryObject?.published_at, 10)}
        </div>
        <div>
          <div>
            By: {queryObject?.author}
          </div>
          <div>
            Source: {queryObject?.source}
          </div>
        </div>
        
        
      </footer>
    </main>
  )
}

export default ReadMore