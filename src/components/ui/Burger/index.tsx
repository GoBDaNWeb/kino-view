// * redux
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store/store';
import { hadleOpenBurger } from 'store/slices/burgerSlice';

// * styles
import styles from './Burger.module.scss';

const Burger = () => {
    const dispatch = useDispatch();
    const { burgerIsActive } = useTypedSelector((state) => state.burger);
    return (
        <div
            onClick={() => dispatch(hadleOpenBurger())}
            className={styles.burger}
        >
            <div className={burgerIsActive ? styles.active : styles.default} />
        </div>
    );
};

export default Burger;
