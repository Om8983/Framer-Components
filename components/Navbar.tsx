// this navbar defines how we can create a hover animation using framer motion which follows from one nav option to another linearly....
import AuthBtn from "./AuthBtn"
import Menu from "./Menu"
export default function Navbar() {
    return (
        <div className=" flex justify-around text-white">
            <div className="text-3xl font-bold ">
                Groove.
            </div>
            <Menu></Menu>
            <div className="flex  gap-8">
                {/* Login button  */}
                <AuthBtn></AuthBtn>
            </div>
        </div>
    )
}