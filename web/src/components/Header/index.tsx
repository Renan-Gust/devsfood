import { Dispatch, SetStateAction, useState } from 'react'

import { Container, Logo, SearchInput } from './styled'

import logo from '/assets/logo.png'

interface HeaderSearchProps {
    search: string;
    onSearch: Dispatch<SetStateAction<string>>;
}

export function Header({ search, onSearch }: HeaderSearchProps) {
    const [inputActive, setInputActive] = useState<boolean>(search ? true : false)

    function handleInputFocus() {
        setInputActive(true)
    }

    function handleInputBlur() {
        if(!search){
            setInputActive(false)
        }
    }

    function handleChange(e: any){
        onSearch(e.target.value)
    }

    return(
        <Container>
            <Logo src={logo} />
            <SearchInput 
                type="text" 
                placeholder="Digite um produto..."
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={search}
                onChange={handleChange}
                active={inputActive}
            />
        </Container>
    )
}