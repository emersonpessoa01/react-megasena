import React, { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import SixNumbers from "./SixNumbers";

//construindo array de 60 numeros
const getEmptyArray = () => {
  const array = Array.from({
    length: 60,
  }).map((_, index) => {
    const id = index + 1;
    const description = id.toString().padStart(2, "0"); //posicionado o zero a esquerda

    return {
      id,
      description,
      value: id,
      count: 0,
    };
  });

  return array;
};

//funcao que vai gera numero aleatorio entre 1 a 60
const generateNumber = (from = 1, to = 60) => {
  return Math.max(from, Math.ceil(Math.random() * to)); // pega num de 0 a 1 e multiplica por 60 e arredonda pra cima
};

//numbers: vetor de numeros de 1 a 60
//pickedNumbers: 6 numeros sorteados;
//isCalculating: booleano
//limit: quantidade de sorteios p/ ser definido;
export default function App() {
  //numbers,sixNumberSort,sixNumbersSort, isCalculating
  const [numbers, setNumbers] = useState(getEmptyArray());
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [limit, setLimit] = useState(1);

  const canRun = useRef(false)

  useEffect(() => {
    if(!canRun.current){
      return;
    }

    const interval = setInterval(() => {
      if (pickedNumbers.length === 6) {
        setIsCalculating(false);
        return;
      }
      //gerar um num aleatorio de 1 a 60
      const newNumber = generateNumber();
      const newNumbers = [...numbers];
      const newPickedNumbers = [...pickedNumbers];

      const foundNumber = newNumbers.find((item) => item.value === newNumber);
      foundNumber.count++;

      if (foundNumber.count === limit) {
        newPickedNumbers.push(foundNumber.value);
      }

      setNumbers(newNumbers);
      setPickedNumbers(newPickedNumbers)


    }, 10);
    return () => clearInterval(interval);
  }, [isCalculating, limit, numbers, pickedNumbers]);

  //executando event precisar receber parametros do filho
  const handleLimitChange = (event) => {
    const number = Number(event.target.value);
    setLimit(number);
  };

  // console.log(numbers)
  // funcao executando parametros recebidos do props filho
  // const handleLimitChange = (newLimit) =>{
  //   setLimit(newLimit )
  // }
  //

  const handleInitSort = () => {
    setNumbers(getEmptyArray());
    setPickedNumbers([]);
    canRun.current =true;
    setIsCalculating(true);
  };

  const {fontReact} = styles;
  return (

    <div className="container">
      <h1 style={fontReact} className="center">React Megasena</h1>
      <Form
        data={{ limit, isCalculating }}
        onLimitChange={handleLimitChange}
        onButtonClick={handleInitSort}
      />
      <Numbers numbers={numbers} pickedNumbers={pickedNumbers} />
      <SixNumbers numbers={pickedNumbers} />
    </div>
  );
}

const styles = {
  fontReact: {
    fontFamily: "Poppins",
    color:"#008080"
  }
}