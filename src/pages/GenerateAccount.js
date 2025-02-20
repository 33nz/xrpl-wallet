import './generate-account.scss'
import { useState } from 'react'

function GenerateAccount() {
  const [seed, setSeed] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div className="generate-account">
      {seed ? (
        <>
          <h1></h1>
        </>
      ) : (
        <>
          <h1></h1>
        </>
      )}
    </div>
  )
}

export default GenerateAccount
