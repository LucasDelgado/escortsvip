'use client'

import { useState } from "react"
import { Form } from "./form";

export const Search = () => {
    const [ isOpenSearch, setisOpenSearch ] = useState(false);

    const handleOpenModal = () => setisOpenSearch(!isOpenSearch)

    return(
        <>
            <button onClick={ ()=> handleOpenModal() } >Buscar</button>
            {
                isOpenSearch && <div>
                    <Form />
                </div>
            }
        </>
    )       
}