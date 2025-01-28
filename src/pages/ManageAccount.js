import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faTrash,
  faList,
  faT,
} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'

import './manage-account.scss'

function ManageAccount() {
  return (
    <div className="manage-account">
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
    </div>
  )
}

export default ManageAccount
