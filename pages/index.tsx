import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button';
import Container from '../components/Container';
import liftData from '../data/data';
import Lift from '../components/Lift';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elevator instance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex d-flex flex-row">
      <div className="main-space ">
      <h1 className="text-center" style={{color: "red", textalign: "center"}}>Elevator-Problem</h1>
        <div className="btn-holder p-2">
          {
            liftData.map((lift, idx) => (
              <Button key={idx} name={lift.name} value={lift.name} />
            ))
          }
        </div>
        <div className="ctn-holder ">
          {
            liftData.map((container, idx) => (
              <Container key={idx}  value={container.name}/>
            ))
          }
          <Lift  />
        </div>
      </div>
    </div>
    </div>
  )
}
