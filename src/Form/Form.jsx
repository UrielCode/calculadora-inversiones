import React from 'react'
import styles from './Form..module.css'
import { useState } from 'react'

const initailUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 120,
  'expected-return': 7,
  'duration': 10
};

const Form = ({onCalculate}) => {

  const [userInput, setUserInput] = useState(initailUserInput)

  const submitHandler = (e) => {
    e.preventDefault();
    onCalculate(userInput)
  }

  const buttonRestHandler = (e) => {
    setUserInput(initailUserInput)
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      }
    })

  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor={styles['current-savings']}>AHORROS ACTUALE ($)</label>
          <input
            onChange={(e) => { inputChangeHandler('current-savings', e.target.value) }}
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor={styles['yearly-contribution']}>AHORROS ANUALES ($)</label>
          <input
            onChange={(e) => { inputChangeHandler('yearly-contribution', e.target.value) }}
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">INTERÉS ESPERADO (%, per year) </label>
          <input
            onChange={(e) => { inputChangeHandler('expected-return', e.target.value) }}
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor="duration">DURACIÓN DE LA INVERSIÓN (years)</label>
          <input
            onChange={(e) => { inputChangeHandler('duration', e.target.value) }}
            type="number"
            id="duration"
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={buttonRestHandler} className={styles.buttonAlt}>
          Restablecer
        </button>
        <button type="submit" onClick={submitHandler} className={styles.button}>
          Calcular
        </button>
      </p>
    </form>
  )
}

export default Form