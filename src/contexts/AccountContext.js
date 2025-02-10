import { createContext, useState, useContext } from 'react'

// Create a context
const AccountContext = createContext()

// Provider component
export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])

  const addAccount = (account) => {
    setAccounts((prevAccounts) => [...prevAccounts, account])
  }

  return (
    <AccountContext.Provider value={{ accounts, addAccount }}>
      {children}
    </AccountContext.Provider>
  )
}

// Custom Hookß
export const useAccounts = () => useContext(AccountContext)
