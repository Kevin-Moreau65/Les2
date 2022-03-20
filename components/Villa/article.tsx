import React from 'react';
import internal from 'stream';
import styles from '../../styles/Home.module.css';
import stylesvilla from './villa.module.css';




export interface Props {
  name: string;
  prix: number;
  adresse: string;
  photo: string
}

function Article(props: Props) {


  return (
    
    <div>
      <div>
        <h2 id={stylesvilla.Name}> {props.name}</h2>
        <h2 id={stylesvilla.Adresse}>{props.adresse}</h2>
        <h2 id={stylesvilla.Prix}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(props.prix)}</h2>
      </div>
      <div>
        <img className={styles.img} src={props.photo}></img>
      </div>
    </div>
      
      
      
      
      // <a>
      //   <div className={stylesvilla.divImage}>
      //     <img className={styles.img} src={props.photo}></img>
      //   </div>
      //   <div id={stylesvilla.divVilla}>
      //     <h2 id={stylesvilla.Name}> {props.name}</h2>
      //     <h2 id={stylesvilla.Prix}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(props.prix)}</h2>
      //   </div>
      //   <h2 id={stylesvilla.Adresse}>{props.adresse}</h2>
      // </a>
    
  );
}

export default Article