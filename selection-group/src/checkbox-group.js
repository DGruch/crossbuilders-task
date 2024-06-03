import './checkbox-group.css';
import { useState } from "react";

export default function CheckboxGroup(props){

    const [options, setOptions] = useState(props.options)
    const [selected, setSelected] = useState([])
    const [allSelected, setAllSelected] = useState(false)

    let id = 0

    return(
        <div className={props.className}>
            <div>
                <input type="checkbox" id={0} checked={allSelected ? true : false} onChange={e => {
                        setAllSelected(!allSelected)
                        toggleSelectAll(allSelected, options.length, setSelected)
                    }} />
                <label className='margin-05' htmlFor={0}>Select all</label>

                { options?.map(o => {
                    id++
                    return(
                        <div key={id}>
                            <input type="checkbox" id={id} value={o} checked={allSelected ? true : selected.includes(id - 1) ? true : false} 
                                onChange={e => {
                                    toggleSelect(e.target.id, selected, setSelected)
                                    
                                    if(allSelected){
                                        setAllSelected(false)
                                    }
                                }} />
                            <label className='margin-05' htmlFor={id}>{o}</label>
                        </div>
                    )
                })}

            </div>
            <div>
                { selected?.map(s => {
                    return(
                        <p key={s}>{options[s]}</p>
                    )
                })}
            </div>
        </div>
    )

}

function toggleSelectAll(allSelected, length, setSelected){

    if(!allSelected){
        let select = []
        for(let i = 0; i < length; i++){
            select.push(i)
        }

        setSelected(select)
    }else{
        setSelected([])
    }

}

function toggleSelect(id, selected, setSelected){

    let index = id - 1

    if(selected.includes(index)){
        selected.splice(selected.indexOf(index), 1)
        setSelected([...selected])
    } else{
        selected.push(index)
        selected.sort()
        setSelected([...selected])
    }

}