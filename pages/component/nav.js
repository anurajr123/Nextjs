import Link from "next/Link";
const Nav = () => {
    return (
        <div className="navClass">
            <Link href={`/`}>
            <button>Home</button>
            </Link>
            <Link href={`/users`}>
            <button>Users</button>
            </Link>
            <Link href={`/posts`}>
            <button>Post</button>
            </Link> 
            
        </div>
    )
}
export default Nav;