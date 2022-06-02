import { createContext, useState } from "react"
export const AgentContext = createContext(); 

const AgentProvider = ({children}) => {
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);
  const [product, setProduct] = useState(false);
  const [recording, setRecording] = useState(false);
  const [keyStroke, setKeyStroke] = useState(false);
  const [AC, setAC] = useState(false);
  const [qna, setQnA] = useState(false);
  const [solutionCard, setSolutionCard] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [solutions, setSolutions] = useState([]);

  return (
    <AgentContext.Provider
      value={[
        problem,
        setProblem,
        client,
        setClient,
        questions,
        setQuestions,
        product,
        setProduct,
        recording,
        setRecording,
        keyStroke,
        setKeyStroke,
        AC,
        setAC,
        solutions,
        setSolutions,
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