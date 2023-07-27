import { useEffect, useState } from 'react';
import styles from './Warning.module.css';

const Warning = ({ errorMessage }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            setTooltipVisible(true);

            return () => {
                setTooltipVisible(false);
            };
        }

        return () => { };
    }, [errorMessage]);

    return (
        <div
            className={tooltipVisible ? styles.showErrorTooltip : styles.errorTooltip}
            data-tooltip={errorMessage}
        />
    );
};

export default Warning;
