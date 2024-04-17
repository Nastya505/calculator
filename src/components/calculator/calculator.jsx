import React from 'react';
import clsx from 'clsx';
import styles from './calculator.module.css';
import Button from '../button/button';
import Input from '../input/input';

const Calculator = () => {
    const [value, setValue] = React.useState("");

    const clear = () => {
        setValue('');
    }

    const backspace = () => {
        setValue(value.slice(0, -1));
    }
    const result = () => {
        try {
            const result = eval(value);
            if (!isFinite(result)) {
                setValue('Делить на 0 нельзя');
            } else {
                setValue(result.toString());
            }
        } catch (err) {
            setValue('Error');
        }
    }

    const percent = () => {
        setValue((value/100).toString());
    }
    const handleClick = (e) => {
        const lastChar = value.charAt(value.length - 1);
        if ("+-*/".includes(lastChar) && "+-*/".includes(e.target.name)) {
            return;
        }
        setValue(value.concat(e.target.name));
    }

    return (
        <div className={styles.container}>
            <Input value={value} className={styles.screen}/>
            <div className={styles.keypad}>
                <Button name="DEL" onClick={clear} className={clsx(styles.clear, styles.btnFunction)}/>
                <Button name="C" onClick={backspace} className={clsx(styles.backspace, styles.btnFunction)}/>
                <Button name="/" onClick={handleClick} className={styles.btnFunction}>&divide;</Button>
                <Button name="7" onClick={handleClick}/>
                <Button name="8" onClick={handleClick}/>
                <Button name="9" onClick={handleClick}/>
                <Button name="*" onClick={handleClick} className={styles.btnFunction}>&times;</Button>
                <Button name="4" onClick={handleClick}/>
                <Button name="5" onClick={handleClick}/>
                <Button name="6" onClick={handleClick}/>
                <Button name="*" onClick={handleClick} className={styles.btnFunction}>&ndash;</Button>
                <Button name="1" onClick={handleClick}/>
                <Button name="2" onClick={handleClick}/>
                <Button name="3" onClick={handleClick}/>
                <Button name="+" onClick={handleClick} className={styles.btnFunction}/>
                <Button name="0" onClick={handleClick}/>
                <Button name="." onClick={handleClick}/>
                <Button name="%" onClick={percent}/>
                <Button name="=" onClick={result} className={styles.result}/>
            </div>
        </div>
    );
};

export default Calculator;