import styled, { css } from 'styled-components'
import { Theme } from '../../styles/theme'

type CreatePostProps = {
    theme: Theme;
    focus?: boolean;
    visible?: boolean;
}

const CreatePost = styled.div(({ theme, focus }: CreatePostProps) => css`
    width: 100%;
    max-width: 500px;
    font-size: 16px;
    border: 1px solid ${theme.dark};
    border-radius: 4px;
    background: ${theme.light};
    overflow: hidden;
    height: ${ focus ? 140 : 100}px;
    transition: height .5s;
`)

const Header = styled.div(({ theme }: CreatePostProps) => css`
    padding: 0 20px;
    display: flex;
    align-items: center;
    background: ${theme.light};
    height: 30px;
`)

const Form = styled.div(({ theme }: CreatePostProps) => css`
    display: flex;
    align-items: center;
    background: white;
    padding-left: 20px;
    height: 70px;
    border-top: 1px solid ${theme.dark};
    border-bottom: 1px solid ${theme.dark};
`)

const ProfilePicture = styled.img(({ theme }: CreatePostProps) => css`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`)

const Textarea = styled.textarea(({ theme }: CreatePostProps) => css`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    align-items: center;
    font-size: 16px;
    border: none;
    resize: none;
`)

const PostButton = styled.button(({ theme, visible }: CreatePostProps) => css`
    height: ${visible ? 26 : 0}px;
    width: ${visible ? 90 : 0}%;
    margin: 5px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.primary + 'AA'};
    color: ${theme.light};
    font-size: 16px;
    border: none;
    border-radius: 2px;
    opacity: ${visible ? 1 : 0};
    transition: all .5s;
`)

export default {
    CreatePost,
    Header,
    Form,
    ProfilePicture,
    Textarea,
    PostButton,
}