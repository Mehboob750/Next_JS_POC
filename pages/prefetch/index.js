import Link from "next/link";

const PrefetchComponent = () => {
    return ( 
        <div>
            <Link href='/prefetch/ex1'>Prefetch True</Link>
            <br/>
            <Link href='/prefetch/ex2' prefetch={false}>Prefetch False</Link>
        </div>
    );
}
 
export default PrefetchComponent;