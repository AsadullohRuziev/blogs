import Link from "next/link"
import style from "../styles/Navbar.module.css"

function Navbar() {
    return (
        <div className={style.navbar}>
            <Link href={"/"}><img className={style.img} src="https://cdn.vectorstock.com/i/1000x1000/49/23/ar-letter-logo-design-vector-28344923.webp" /></Link>
            <h1 className={style.name}>
                Asadulloh Ruziev
            </h1>

        </div>
    )
}
export default Navbar