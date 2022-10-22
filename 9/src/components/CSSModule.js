import classNames from 'classnames/bind';
import styles from '../style/CSSModule.module.scss';

// classnames 쓰는 예시
const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정한다. 

const CSSModule = () => {
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        // 이런식으로 classnames를 쓰는 것. 
        <div className={cx('wrapper', 'inverted')}> 
            안녕하세요, 저는 <span className='something'>CSSModule</span>
        </div>
    );
};

export default CSSModule;