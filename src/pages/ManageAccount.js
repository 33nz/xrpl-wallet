import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrash, faList } from '@fortawesome/free-solid-svg-icons'

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
          <div className="address">Fake rAddress</div>
          <div className="buttons-container"></div>
        </li>
      </ul>
    </div>
  )
}

export default ManageAccount
