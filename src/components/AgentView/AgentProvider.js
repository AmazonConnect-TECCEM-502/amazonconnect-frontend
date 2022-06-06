/*
  Author: Diego Armando Ulibarri Hernández
  
  Description: AgentProvider allows other components to access the 
  variables we set

  Usage: 
  <AgentProvider >
    {children}
  </ AgentProvider>
  
  const [
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
    setSolutionCard,
    categoryProblem,
    setCategoryProblem
  ] = useContext(AgentContext);
*/
import { createContext, useState } from "react";
export const AgentContext = createContext();

const AgentProvider = ({ children }) => {
  // Set the state of the respective cards problem, client, product, etc...
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);
  const [product, setProduct] = useState(false);
  const [recording, setRecording] = useState(false);
  const [keyStroke, setKeyStroke] = useState(false);
  const [AC, setAC] = useState(false);
  const [qna, setQnA] = useState(false);
  const [solutionCard, setSolutionCard] = useState(false);
  // List of questions and it's solutions
  const [questions, setQuestions] = useState([]);
  const [solutions, setSolutions] = useState([]);
  // Problem Category
  //const [categoryProblem, setCategoryProblem] = useState("");
  const [categoryProblem, setCategoryProblem] = useState([]);

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
        setSolutionCard,
        categoryProblem,
        setCategoryProblem
      ]}
    >
      {children}
    </AgentContext.Provider>
  );
};

export default AgentProvider;
