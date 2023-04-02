import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home:React.FC = () => {

  //const [truc, setTruc] = useState<string>("Hello");

  const count: number = 10;
  const name: string = "Gertrude";

  console.log(name, " ---> name");
  console.log(typeof(name), " ---> typeof name");

  const lightEqualNum = (count: number) => {
    return count;
  }
  lightEqualNum(count);

  const deepEqual = (name: string) => {
    return name;
  } 
  deepEqual(name);
  /*
  const handleTruc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTruc(e.target.value);
    console.log(truc, "ok input works");
    e.preventDefault();
  }
  */

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {name}
        </div>
      </main>
    </>
  )
}
export default Home

/*
        <div>
          <input id="trucid" name="input" value={truc} onChange={(e) => handleTruc(e)}/>
          <p>{truc}</p>
        </div>
*/