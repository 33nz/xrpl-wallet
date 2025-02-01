import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faTrash,
  faList,
  faT,
} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom'

import './manage-account.scss'

function ManageAccount() {
  return (
    <div className="manage-accounts">
      <h1>
        <FontAwesomeIcon icon={faList} />
        <span>My Accounts</span>
      </h1>

      <ul>
        <li>
          <div className="address">
            this is where the addresses will get listed
          </div>
          <div className="buttons-container"></div>
          <Button variant="primary">
            <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </li>
      </ul>
      <div className="action-buttons">
        <Link to="/import-account">
          <Button variant="primary">Import</Button>
        </Link>
        <Link to="/generate-account">
          <Button variant="success">Generate New</Button>
        </Link>
      </div>
    </div>
  )
}

export default ManageAccount
Í
