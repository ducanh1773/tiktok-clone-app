import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logoTikTok from '../../../assets/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faSpinner, faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logoTikTok}></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and video" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                    </button>
                    <button className={cx('search-btn')}>{/* Search */}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
