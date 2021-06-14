import './Popup.css';
import ButtonReset from '../ButtonReset/ButtonReset';

function Popup({ isOpen, title, reset }) {
  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <ButtonReset onClick={reset} />
      </div>
    </div>
  );
}
export default Popup;
