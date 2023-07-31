import { useEffect } from 'react';

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

const Warning = ({ errorMessage }) => {

  useEffect(() => {
    Toastify({
      text: errorMessage,
      selector: 'warning',
      style: {
        maxWidth: '100%',
        position: 'unset',
        color: 'var(--color-primary)',
        background: 'var(--color-error)',
        marginTop: 'var(--spacing-medium)',
        borderRadius: '16px',
      },
    }).showToast();

  }, []);

  return <div id='warning' style={
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 'var(--spacing-medium)',
    }
  }></div>;
};

export default Warning;
