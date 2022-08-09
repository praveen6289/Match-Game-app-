import './index.css'

const NavBar = () => (
  <nav className="nav-bar-container">
    <div className="logo-with-score-container">
      <div className="logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div className="scores-container">
        <p className="score">
          Score: <span className="score-count">20</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="time">20 sec</p>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
