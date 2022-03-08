import React from 'react';
import internal from 'stream';
import styles from '../../styles/Home.module.css'




export interface Props {
    name: string;
    prix: number;
    adresse : string;
    photo: string
  }

  function Villa(props: Props) {
            
      
      return (    
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{props.name}</h2>
            <h2>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(props.prix)}</h2>
            <h2>{props.adresse}</h2>
            <img className={styles.img} src={props.photo}></img>
          </a>
        </div>
      );
}

export default Villa