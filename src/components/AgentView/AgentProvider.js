import { createContext, useState } from "react"
export const AgentContext = createContext(); 

const AgentProvider = ({children}) => {
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const [product, setProduct] = useState(false);
  const [recording, setRecording] = useState(false);
  const [keyStroke, setKeyStroke] = useState(false);
  const [AC, setAC] = useState(false);
  const [qna, setQnA] = useState(false);
  const [solutionCard, setSolutionCard] = useState(false);
  const [clientID, setClientID] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [questions, setQuestions] = useState([]);
  const [solutions, setSolutions] = useState([]);

  return (
    <AgentContext.Provider
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
        setProduct,
        clientPhone,
        setClientPhone,
        showClient,
        setShowClient,
        recording,
        setRecording,
        keyStroke,
        setKeyStroke,
        AC,
        setAC,
        solutions,
        setSolutions,
        clientEmail,
        setClientEmail,
        qna,
        setQnA,
        solutionCard,
        setSolutionCard
      ]}>
      {children}
    </AgentContext.Provider>
  )
}

export default AgentProvider