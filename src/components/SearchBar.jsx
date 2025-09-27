import { Input } from "@/components/ui/input"
const SearchBar = () => {
  return (
    <div className="w-100 flex items-center">
        <Input className={'rounded-xl'} placeholder="Search Product"/>
    </div>
  )
}

export default SearchBar