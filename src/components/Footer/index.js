import ForkButton from '../ForkButton'

import './index.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>Recoded</p>
        <img src="/app_logo.svg" alt="App Logo" className="logo" />
      </div>
      <div className="footer-section">
        <a href="https://AbhishekGusain.vercel.app/" target="_blank" rel="noreferrer">Made by Abhishek Gusain</a>
      </div>
      <div className="footer-section">
        <a href="https://github.com/Abhishekgusain07" target="_blank" rel="noreferrer">Submit an Issue</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </svg>
      </div>
      <div className="footer-section">
        <ForkButton />
      </div>
    </footer>
  );
}
