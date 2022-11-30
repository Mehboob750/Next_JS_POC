import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
    const [count, setCount] = useState(5)
    const router = useRouter();

    // useEffect(()=>{
    //     count !== 1 ? (setTimeout(()=>{
    //     // console.log('count',count)
    //      setCount(count-1) 
    //    },1000)) : router.push('/')
    // },[count])

    useEffect(()=>{
        console.log('Router-404',router)
    },[])

    return ( 
        <>
            <div className='not-found'>
                <h1>
                    Oops Page not found !!
                </h1>
                {/* <p>Click here to go on</p><Link href='/'>Home Page</Link> */}
                {/* <h3> Redirecting to Home page in {count} sec</h3> */}
                <button onClick={()=>router.push('/')}>Push</button>
                <button onClick={()=>router.replace('/')}>Replace</button>
            </div>
        </>
     );
}
 
export default NotFound;