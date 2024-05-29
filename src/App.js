import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



export default function App() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  // const step = 1

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1)
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1)
      // setStep((s) => s + 1)
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>

          {/* utilistaion du props children */}
          <StepMessage Steps={step}>
            {messages[step - 1]}
          </StepMessage>

          <div className="buttons">
            <Button bgcolor='#7950f2' colorText='#fff'
              onclick={handlePrevious}><span>👈</span>Previous</Button>

            <Button bgcolor='#7950f2' colorText='#fff'
              onclick={handleNext}>Next <span>👉</span></Button>
          </div>
        </div >)}


    </>
  )
}

//la fonction qui gere le props children

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Steps{step}</h3>
      {children}
    </div>
  )
}


//la founctionqui gere le props children

function Button({ bgcolor, colorText, onclick, children }) {
  return (
    <button
      style={{
        backgroundColor: bgcolor, color: colorText
      }}
      onClick={onclick}
    >
      {children}
    </button>)
}