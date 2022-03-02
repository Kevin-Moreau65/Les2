import React from 'react';
import styles from '../../styles/Home.module.css'




export interface Props {
    name: string;
  }

  function Villa({ name,}: Props) {
            
      
      return (    
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{name} &rarr;</h2>
            <img className={styles.img} src="https://i.pinimg.com/originals/f1/7a/09/f17a09db50bc69d3ae1708b1bf2ccb87.png"></img>
          </a>
        </div>
      );
}

export default Villa