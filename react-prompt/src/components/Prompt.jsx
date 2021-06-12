import ReactDOM from 'react-dom';
import React from 'react';
import styles from './style.module.css';
const Prompt = ({
    message,
    onOk = () => { },
    onCancel = () => { },
}) => {
    return (
        <div className={styles.container}>
            <h3>{message}</h3>
            <button onClick={onOk}>OK</button>
            <button onClick={onCancel}>CANCEL</button>
        </div>
    )
};

export const prompt = (message, { onOk, onCancel }) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const destroy = () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        unmountResult && div && div.remove();
    };
    const props = {
        message,
        onOk: () => {
            onOk();
            destroy();
        },
        onCancel: () => {
            onCancel();
            destroy();
        },
    };
    ReactDOM.render(
        <Prompt {...props} />,
        div,
    )

}

export default Prompt;