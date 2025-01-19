import './header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faGear } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const handleSwitchToHome = () => {}
  const handleSwitchToSettings = () => {}

  return (
    <header>
      <div className="header" onClick={handleSwitchToHome}>
        <FontAwesomeIcon icon={faWallet} />
        <span className="project-name">XRPL Wallet 1.0</span>
      </div>
      <div className="header-settings" onClick={handleSwitchToSettings}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </header>
  )
}

export default Header

// icons brought in from fontAwesome with: npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
