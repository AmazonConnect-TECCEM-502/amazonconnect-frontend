import { createContext, useState } from "react"
export const CardContext = createContext(); 

const CardsProvider = ({children}) => {
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);
  const [clientID, setClientID] = useState("");
  const [questions, setQuestions] = useState([])

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
        setQuestions
      ]}>
      {children}
    </CardContext.Provider>
  )
}

export default CardsProvider