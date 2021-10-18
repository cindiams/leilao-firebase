import React, { useState, useEffect } from "react";
// import {collection, getDocs} from "firebase/firestore/lite"

import { db } from "../conectafb";
import ItemLista from "./ItemLista";

const ListaObras = () => {
 
  const [obras, setObras] = useState([]);

  const getObras = async () => {
    
    db.collection("obras")
      .orderBy("titulo")
      .onSnapshot((dados) => {
        const docs = [];
        dados.forEach((obra) => {
        
          docs.push({ ...obra.data(), id: obra.id });
        });
       
        setObras(docs);
      });
  };

  // define o que será executado logo após o componente ser renderizado
  useEffect(() => {
    getObras();
  }, []);

  return (
    <div className="container mt-2">
      <div className="card-columns">
        {obras.map((obra) => (
            <ItemLista 
                id={obra.id}
                titulo={obra.titulo}
                foto={obra.foto}
                autor={obra.autor}
                minimo={obra.minimo} />
        ))}
      </div>
    </div>
  );
};

export default ListaObras;
