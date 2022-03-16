import React from 'react';
import internal from 'stream';
import styles from '../../styles/Home.module.css';
import stylesvilla from './villa.module.css';




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
            <img className={styles.img} src={props.photo}></img>
            <div id={stylesvilla.divVilla}>
              <h2 id={stylesvilla.Name}> {props.name}</h2>
              <h2 id={stylesvilla.Prix}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(props.prix)}</h2>
            </div>
            <h2 id={stylesvilla.Adresse}>{props.adresse}</h2>            
          </a>
        </div>
      );
}

export default Villa