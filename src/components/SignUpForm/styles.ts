import styled, { css } from 'styled-components'
import { Theme } from '../../styles/theme'

type SignUpFormProps = {
    theme: Theme;
    children?: any;
}
const SignUpForm = styled.div(({ theme }: SignUpFormProps) => css`
    width: 400px;
    min-width: 400px;
    max-width: 400px;

    h1 {
        font-size: 40px;
        line-height: 45px;
    }

    p {
        margin-bottom: 20px;
        font-size: 20px;
    }
`)

const Row = styled.div(({ theme, children }: SignUpFormProps) => css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    
        input {
            width: ${(100 / children.length) - (children.length - 1) * 1.25  || 100 }%;
            height: 39px;
            padding: 8px 10px;
            font-size: 18px;
            border: 1px solid ${theme.dark};
            border-radius: 4px;
            
            &::placeholder {
                color: ${theme.dark};
            }
        }
`)

export default { 
    SignUpForm,
    Row,
}