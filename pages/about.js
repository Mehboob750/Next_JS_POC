import { useRouter } from "next/router";

const About = () => {
    const router = useRouter();
    console.log('router===>',router)
    return ( 
        <>
        <div>Route query data</div>
        <div>{`Name => ${router.query.name} Id => ${router.query.id}`}</div>
        <h1>router.push vs router.replace</h1>
        <button onClick={()=>router.push('/')}>home</button>
        <p>router.push = home--about--demo/d1 = back click = home--about</p>
        <button onClick={()=>router.push('/demo/d1')}>push - d1</button>
        <p>router.replace = home--about--demo/d1 = back click = home</p>
        <button onClick={()=>router.replace('/demo/d1')}>replace - d1</button>
        </>
     );
}
 
export default About;