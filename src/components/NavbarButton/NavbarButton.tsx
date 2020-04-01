import React from 'react'
import Styled from './styles'
import { useHistory } from 'react-router-dom'

type NavbarButtonProps = {
    children: any;
    image?: string;
    to: string
    marginLeft?: string
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children, image, to, marginLeft }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(to)
    }

    return (
        <Styled.NavbarButton marginLeft={marginLeft} onClick={handleClick}>
            {image && 
                <Styled.Image src={image} alt={image} />
            }
            <Styled.Text>
                {children}
            </Styled.Text>
        </Styled.NavbarButton>
    )
}

export default NavbarButton
