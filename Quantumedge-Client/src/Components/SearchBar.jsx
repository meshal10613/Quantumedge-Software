import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import star from '../assets/star.png'
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Web Developer");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)
        console.log(category)
    };

    return (
    <div className="bg-secondary py-10 relative">
        <div className="flex items-center gap-3 p-4 max-w-7xl mx-auto">
            {/* Search Input */}
            <div className="relative w-[500px] rounded-lg p-[1px] bg-gradient-to-r from-orange-400 via-primary to-[#1a1a1a]">
            <form onClick={handleSearch} className="flex items-center w-full max-w-lg bg-[#1a1a1a] rounded-lg px-3 py-1 z-10">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your needs"
                    className="input input-ghost text-accent flex-grow rounded-full focus:outline-none bg-transparent focus:bg-transparent focus:text-accent"
                />
                
                {/* Dropdown */}
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-ghost text-accent bg-transparent focus:outline-none focus:bg-transparent focus:text-accent active:bg-secondary cursor-pointer"
                >
                    <option className="bg-secondary">Web Developer</option>
                    <option className="bg-secondary">Designer</option>
                    <option className="bg-secondary">App Developer</option>
                    <option className="bg-secondary">Writer</option>
                </select>

                {/* Search Button */}
                <button type="submit" className="btn btn-circle text-accent bg-primary border-none outline-none hover:bg-green-700">
                    <FiSearch />
                </button>
            </form>
            </div>

            {/* Advanced Search Button */}
            <button className="btn bg-green-600 text-white rounded-full border-none px-5 hover:bg-green-700 cursor-pointer z-10">
                Advanced search
            </button>
        </div>
        <img src={star} alt="" className="absolute bottom-0 left-3/5 z-0" />
    </div>
    );
}