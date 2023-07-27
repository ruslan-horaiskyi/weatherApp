import { useEffect, useState } from 'react';
import styles from './Warning.module.css';

import classNames from 'classnames';

// Винести цю логіку в кстомний хук Ворнінга
const Warning = ({ errorMessage }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {

        setTooltipVisible(true);
        const timeout = setTimeout(() => {
            setTooltipVisible(false);
        }, 4000);

        return () => { clearTimeout(timeout); }

    }, []);

    // if (!tooltipVisible) {
    //     return
    // }

    // TODO: CLASSNAMES

    return (
        <div
            className={classNames(styles.showErrorTooltip, { [styles.errorTooltip]: !tooltipVisible })}
            data-tooltip={errorMessage}
        />
    );
};

export default Warning;
