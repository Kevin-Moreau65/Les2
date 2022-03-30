import React from 'react';
import internal from 'stream';
//import styles from '../../styles/Home.module.css';
import stylesvilla from './article.module.css';




export interface Props {
  name: string;
  prix: number;
  adresse: string;
  photo: string
}

function Article(props: Props) {


  return (
    
    <main>      
        <div>
          <h2 id={stylesvilla.Name}> {props.name}</h2>
          <h2 id={stylesvilla.Adresse}>{props.adresse}</h2>
          <h2 id={stylesvilla.Prix}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(props.prix)}</h2>
        </div>

        <div>
          <img className={stylesvilla.img} src={props.photo} width="832" height="600"></img>
        </div>
      
    </main>    
  );
}

export default Article