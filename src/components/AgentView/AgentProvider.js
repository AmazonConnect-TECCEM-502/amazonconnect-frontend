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
  const [clientID, setClientID] = useState("");
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
        setSolutions
      ]}>
      {children}
    </AgentContext.Provider>
  )
}

export default AgentProvider