import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import styles from './style.module.css';
const Prompt = ({
    message,
    onOk = () => { },
    onCancel = () => { },
}) => {
    useEffect(() => {
        console.log('挂载');
        return () => {
            console.log('卸载')
        }
    }, []);
    return (
        <div className={styles.container}>
            <h3>{message}</h3>
            <button onClick={onOk}>OK</button>
            <button onClick={onCancel}>CANCEL</button>
        </div>
    )
};

export const prompt = (message, { onOk, onCancel }) => {
    console.warn('123')
    const div = document.createElement('div');
    div.className = 'vk-prompt';
    document.body.appendChild(div);
    const destroy = () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult) {
            div && div.remove();
        }
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