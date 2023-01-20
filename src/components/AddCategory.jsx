import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {    
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        const _inputValue = inputValue.trim()
        if(_inputValue.length<=1) return
        
        onNewCategory(_inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
