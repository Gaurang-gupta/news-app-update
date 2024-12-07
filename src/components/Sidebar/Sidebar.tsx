import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { RxHamburgerMenu } from "react-icons/rx";
  
function Sidebar() {
    const categories = ["general", "science", "sports", "business", "health", "entertainment", "tech" , "politics", "food", "travel"]
  return (
    <div className="">
        <Sheet>
            <SheetTrigger><RxHamburgerMenu className='text-3xl cursor-pointer'/></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="pb-2">
                    <SheetTitle className="text-2xl font-bold">The NEWS</SheetTitle>
                </SheetHeader>
                <h1 className="px-2 py-1 text-xl font-semibold cursor-pointer">Favourites</h1>
                <h1 className="px-2 py-1 text-xl font-semibold">Categories</h1>
                <ul className="capitalize pb-1">
                    {categories.map(cat => (
                        <li className="transition-all px-5 py-2 rounded-2xl hover:font-bold cursor-pointer hover:bg-slate-200" key={cat}>{cat}</li>
                    ))}
                </ul>
        <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">Subscribe Now</button>

            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Sidebar