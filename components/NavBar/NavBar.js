import Image from "next/image";
import Link from "next/link";
import Router,{useRouter} from "next/router";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const router = useRouter();
    const name = "Bunny";
    const id = 198;

    function sendProps(){
        Router.push({
            pathname:"/about",
            query:{
                name,
                id
            },
        });
    }
    return ( 
        <div className={styles.headerContainer}>
            {/* <Image src="/photo.png" width={150} height={150} alt='photo'/> */}
            <nav>
                {/* <Link href='/' className={styles.link}>Home</Link> */}
                {/* <Link href='/about' className={styles.link}>about</Link>
                <Link href='/demo' className={styles.link}>demo</Link> */}
                <a onClick={()=>sendProps()}>About</a>
                <button onClick={()=>router.push('/demo')}>routing - Demo</button>
                <button onClick={()=>router.push('/demo', undefined, { shallow: true })}>Shallow routing - Demo</button>
                <button onClick={()=>router.push('/form')}>Form</button>
            </nav>
        </div>
    );
}
 
export default NavBar;