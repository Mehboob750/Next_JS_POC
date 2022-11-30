import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Container from '../components/Container'

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    console.log('Router-Home',router)
},[router.isReady])

  return (
    <>
    <Head>
      <title>Dummy</title>
    </Head>
      <h1 className={styles.title}>
        Home Page
      </h1>
      <Container>
      <Link href='/ex1' prefetch={true}>Prefetch True</Link>
      <br/>
      <Link href='/ex2' prefetch={false}>Prefetch False</Link>
      </Container>
    </>
  )
}
