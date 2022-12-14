// * react/next
import React, { forwardRef } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { SliderButtonProps } from './types';

// * icons

// * styles
import styles from './SliderButton.module.scss';

const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
    (props, ref) => {
        return (
            <button
                onClick={props.fn}
                className={styles.btn}
                ref={ref}
                disabled={props.disable}
            >
                {props.dir === 'prev' ? (
                    <MdNavigateBefore className={styles.iconPrev} />
                ) : (
                    <MdNavigateNext className={styles.iconNext} />
                )}
            </button>
        );
    },
);

SliderButton.displayName = 'SliderButton';

export default SliderButton;
