import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './import-account.scss'

function ImportAccount() {
  return (
    <div className="import-account">
      <Form>
        <h1>
          <FontAwesomeIcon icon={faFileImport} />
          <span>Import Account</span>
        </h1>

        <Form.Group className="seed-container" controlId="formImportSeed">
          <Form.Label>Family Seed</Form.Label>
          <Form.Control type="text" required></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Import
        </Button>
      </Form>
    </div>
  )
}

export default ImportAccount
