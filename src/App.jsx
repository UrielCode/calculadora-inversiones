import { useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import Table from "./Table/Table";
import './index.css'


function App() {
  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {

    setUserInput(userInput)

  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];


    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }


  // do something with yearlyData ...

  return (
    <div>
      <Header />

      <Form onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      
      {!userInput && <p className="textDefault">Aún no se ha calculado ninguna inversión.</p> }
      {userInput &&  <Table data={yearlyData} initialInvestment = {userInput['current-savings']} />}

    </div>
  );
}

export default App;