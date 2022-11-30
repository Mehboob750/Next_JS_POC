import Link from 'next/link'
import styles from '../../styles/Demo.module.css'

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

   return {
    props: {
        dummyData: data
    }
   }
}

const Demo = ({dummyData}) => {
    return ( 
        <>
        <h1 className={styles.text}>
            Dummy data list
        </h1>
        <div style={{display:'flex', flexDirection: 'column'}}>
        {dummyData.map((data)=>(
            <Link href={'/demo/' + data.id} key={data.id}>
                {data.id} - {data.name}
            </Link>
        ))}
        </div>
        </>
     );
}
 
export default Demo;