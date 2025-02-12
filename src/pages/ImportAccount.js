import { useState } from 'react'
import { Wallet } from 'xrpl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './import-account.scss'

function ImportAccount() {
  const [seed, setSeed] = useState('')

  const handleSeedChange = (event) => {
    setSeed(event.target.value)
  }

  const handleImportAccount = (event) => {
    event.preventDefault()

    // Derive the address from the imported family seed
    const newAccount = Wallet.deriveWallet(seed)

    // Create the new account object

    // Update the application state

    // Update the local storage

    // Navigate back to the manage accounts page
  }

  return (
    <div className="import-account">
      <Form onSubmit={handleImportAccount}>
        <h1>
          <FontAwesomeIcon icon={faFileImport} />
          <span>Import Account</span>
        </h1>

        <Form.Group className="seed-container" controlId="formImportSeed">
          <Form.Label>Family Seed</Form.Label>
          <Form.Control
            type="text"
            onChange={handleSeedChange}
            value={seed}
            required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Import
        </Button>
      </Form>
    </div>
  )
}

export default ImportAccount
