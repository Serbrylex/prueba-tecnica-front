
import NLink from 'next/link'
import {
    Button, Container
} from './styles'

import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai'

import { useAppSelector } from '../../hooks/useReduxH'

const UserInfo = () => {

    const user = useAppSelector(store => store.user)
    return(
        <Container>
            {!user.isAuth ? 
                <><Button><NLink href="/login"><span><AiOutlineUser/></span> Login</NLink></Button>
                <Button><NLink href="/signup"><span><AiOutlineLogin /></span>  Signup</NLink></Button> </>:
                <>
                <p>User: {user.user.username}</p>
                </>
            }
        </Container>
    )
}

export default UserInfo