import trayIcon from '@assets/tray.png';
import minimizeIcon from '@assets/minimize.png';
import closeIcon from '@assets/close.png';
import logoImg from '@assets/logo.png';
import slogoImg from '@assets/slogo.png';
import plusImg from '@assets/plus.png';
import '@styles/App.css';

const Index = () => {
  return (
    <div className="App">
      <div className="menu">
        <button type="button" className="menu-button" id="tray-button">
          <img src={trayIcon} alt="Tray" />
        </button>
        <button type="button" className="menu-button" id="minimize-button">
          <img src={minimizeIcon} alt="Minimize" />
        </button>
        <button type="button" className="menu-button" id="close-button">
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
      <div className="header">
        <div className="logo">
          <img src={logoImg} className="logo-img" alt="Ampps+ FE" />
          <img src={plusImg} className="plus-img" alt="Ampps+ FE" />
        </div>
        <div className="navbar">
          <div className="row">
            <div className="col-2">
              <button type="button">
                <img src={slogoImg} alt="Ampps" />
              </button>
            </div>
            <div className="col-2">
              <button type="button">
                <i className="fas fa-globe" />
              </button>
            </div>
            <div className="col-2">
              <button type="button">
                <i className="fas fa-home" />
              </button>
            </div>
            <div className="col-2">
              <button type="button">
                <i className="fas fa-user" />
              </button>
            </div>
            <div className="col-2">
              <button type="button">
                <i className="fas fa-folder" />
              </button>
            </div>
            <div className="col-2">
              <button type="button">
                <i className="fas fa-list" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content">content</div>
      <div className="log">log</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default Index;
