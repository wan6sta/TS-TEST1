import React, {useRef, useState} from 'react';

const EventsExample = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);

        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return <div>
        <input placeholder='Управляемый' value={value} onChange={changeHandler} type="text"/>
        <input placeholder='Неуправляемый' ref={inputRef} type="text"/>
        <button onClick={clickHandler}>Log</button>

        <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
        <div
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
            style={{width: 200, height: 200, background: isDrag ? 'transparent' : 'red', marginTop: 15}}></div>





    </div>
};

export default EventsExample;