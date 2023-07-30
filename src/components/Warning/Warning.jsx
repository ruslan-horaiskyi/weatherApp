import { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './Warning.module.css';

const Warning = ({ errorMessage }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {

        setTooltipVisible(true);
        const timeout = setTimeout(() => {
            setTooltipVisible(false);
        }, 2500);

        return () => { clearTimeout(timeout); }

    }, []);

    return (
        <div
            className={classNames(styles.showErrorTooltip, { [styles.errorTooltip]: !tooltipVisible })}
            data-tooltip={errorMessage}
        />
    );
};

export default Warning;
