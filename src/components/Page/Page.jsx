import { useEffect, useState } from "react"
import data from "../../testData.json"
import Card from "../Card/Card"
function Page() {
    const [search, setSearch] = useState("")
    const [test, setTest] = useState({})
    useEffect(() => {
        const getData = async () => {7
            const dataFromApi = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`).then(res => res.json()).then(data => setTest(data))
        }
        getData()
        console.log(test)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        setSearch(formdata.get('search'))
    }
  return (
    <main className="p-0">
        <form onSubmit={(e) => handleSubmit(e)} className='flex justify-between align-middle p-4 mb-4 w-[90%] mx-auto'>
            <input name="search" className='bg-gray-100 flex-1 outline-none' type="text" placeholder='Search Keywords...'/>
            <button type="submit" className='text-gray-400'>Search</button>
        </form>

        {search !== null && search !== "" && <h1 className="w-[90%] mx-auto pb-3 text-3xl mb-4">Search results for <span className="font-bold uppercase underline underline-offset-4 decoration-6 decoration-orange-400">{search}</span></h1>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto pb-5">
            {test?.articles?.map((dat, index) => (
                <Card 
                key={index} 
                image={dat?.urlToImage}
                title={dat?.title}
                desc={dat?.description}
                author={dat?.author}
                source={dat?.source?.name}
                published_at={dat?.publishedAt}
                />
            ))}
        </div>
    </main>
  )
}

export default Page