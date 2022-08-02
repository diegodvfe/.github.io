import { useState } from 'react';
import copy from 'copy-to-clipboard';

const EmailOptions = props => {
    const [successMessage, setSuccessMessage] = useState('');

    const clickHandler = e => {
        copy('alv.diego19@gmail.com');
        setSuccessMessage('tooltip tooltip-open tooltip-accent');
        setTimeout(() => {
            setSuccessMessage('');
        }, 2000);
    };

    return (
        <ul class="p-2 shadow dropdown-content bg-base-100 rounded-box ">
            <li>
                <a class='btn btn-ghost btn-sm text-xs lg:btn-md' href='mailto:alv.diego19@gmail.com' target='_blank' rel="noreferrer">Open in email client</a>
            </li>
            <li>
                <button class='btn btn-ghost btn-sm text-xs lg:btn-md' onClick={clickHandler}>
                    <span data-tip="Copied to clipboard!" class={successMessage}>
                        Copy email address
                    </span>
                </button>
            </li>
        </ul>
    );
};

export default EmailOptions;