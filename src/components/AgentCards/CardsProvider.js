import { createContext, useState } from "react"
export const CardContext = createContext(); 

const CardsProvider = ({children}) => {
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);
  const [clientID, setClientID] = useState("");
  const [questions, setQuestions] = useState([]);
  const [product, setProduct] = useState(false);

  return (
    <CardContext.Provider
      value={[
        problem,
        setProblem,
        client,
        setClient,
        clientID,
        setClientID,
        questions,
        setQuestions,
        product,
        setProduct
      ]}>
      {children}
    </CardContext.Provider>
  )
}

export default CardsProvider