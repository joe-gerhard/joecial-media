import React, { Dispatch, useState } from 'react'
import Styled from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'
import { UIActions } from '../../redux/actions/UIActions'
import { Link } from 'react-router-dom'

const CreatePost = () => {
    const [ hovering, setHovering ] = useState<boolean>(false);

    const { user } = useSelector((state: AppState) => state.user)
    const { isTextareaFocused } = useSelector((state: AppState) => state.UI)

    const UIDispatch = useDispatch<Dispatch<UIActions>>()

    const handleClick = (e: React.MouseEvent): void => {
        if(!isTextareaFocused) {
            UIDispatch({ type: 'SET_TEXTAREA_FOCUS', payload: true })
        }
    }

    const handleBlur = (): void => {
        if(!hovering) {
            UIDispatch({ type: 'SET_TEXTAREA_FOCUS', payload: false })
        }
    }

    const handleMouseEnter = () => {
        setHovering(true)
    }

    const handleMouseLeave = () => {
        setHovering(false)
    }



    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log('post will be created now')
        //TODO: Add create post logic
    }

    return (
        <Styled.CreatePost 
            onClick={handleClick}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            focus={isTextareaFocused}
        >
            {
                user?.photoURL && user?.displayName && 
                <>
                    <Styled.Header>
                        Create Post: 
                    </Styled.Header>
                    <Styled.Form>
                        <Link to="/profile">
                            <Styled.ProfilePicture src={user.photoURL} alt={user.displayName}/>
                        </Link>
                        <Styled.Textarea placeholder={`What's on your mind, ${user?.displayName?.split(' ')[0]}?`} />
                    </Styled.Form>
                    <Styled.PostButton onClick={handleSubmit} visible={isTextareaFocused}>Post</Styled.PostButton>
                </>
            }
        </Styled.CreatePost>
    )
}

export default CreatePost
