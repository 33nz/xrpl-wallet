import { createContext, useState, useContext } from 'react'

// Create a context
const AccountContext = createContext()

// Provider component
export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])

  const addAccount = (account) => {
    // setAccounts((prevAccounts) => [...prevAccounts, account])
    setAccounts((prevAccounts) => {
      const updatedAccounts = [...prevAccounts, account]
      localStorage.setItem('accounts', JSON.stringify(updatedAccounts))
      return updatedAccounts
    })
  }

  return (
    <AccountContext.Provider value={{ accounts, addAccount }}>
      {children}
    </AccountContext.Provider>
  )
}

// Custom Hook
export const useAccounts = () => useContext(AccountContext)
