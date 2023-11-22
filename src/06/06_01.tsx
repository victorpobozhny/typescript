import {MouseEvent} from "react";


export function User() {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }
    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return (
        <div>
            Dimych
            <input onBlur={focusLostHandler}/>
            <textarea onChange={onNameChanged}/>
            <button name={'delete'} onClick={deleteUser}>delete</button>
            <button name={'save'} onClick={deleteUser}>save</button>
        </div>
    )
}