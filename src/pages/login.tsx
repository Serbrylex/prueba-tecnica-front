// React 
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Assets 
import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, 
	Element, LinkFacebook, Forgot, Signin, Link, Apps, Description, 
	ImagesContainer, ImageApp, LinkImage, ErrorP, LoginForm, ImageLeft
} from '../styles/Login' 
 
import { AiFillFacebook } from 'react-icons/ai' 

import {useInputValue} from '../hooks/useInputValue'
import { useRouter } from 'next/router'

import Loading from '../components/Loading'

// API
import apiCall from '../api/apiCall'

// Actions
import { setLogin } from '../actions'

type userRes = {
    username: string,
    password: string,
    non_field_errors: string
}

const Login = () => {	

 	const dispatch = useDispatch()

	const history = useRouter()

	const username = useInputValue('Username')
	const password = useInputValue('Password')

	const [errorResponse, setErrorRespose] = useState<{error: boolean, listErrors: userRes}>({
		error: false,
		listErrors: {
            username: '',
            password: '',
            non_field_errors: ''
        }
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		setLoading(true)

		const response = await apiCall({  
			url: 'http://127.0.0.1:8000/login/',
			method: 'POST',
			headers:  {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username.value,
				password: password.value				
			})
		})
		if (response.ok) {			
			const data = await response.json()			
			dispatch(setLogin({
				...data,
				isAuth: true
			}))
			history.push("/")
		} else {			
			setErrorRespose({
				error: true,
				listErrors: response
			})			
			setLoading(false)
		}			
	}


	return(		
		<LoginContainer>
			<ImageLeft src='/virtual-reality-cuate.svg' alt='image' />
			<LoginForm>
				<MainData>
					<Title>The Best Place</Title>	
					<Form onSubmit={handleSubmit}>
						{errorResponse.listErrors?.username &&
							<ErrorP>{errorResponse.listErrors.username}</ErrorP>
						}
						<Input type="text" {...username}  />
						{errorResponse.listErrors?.password &&
							<ErrorP>{errorResponse.listErrors.password}</ErrorP>
						}
						<Input type="password" {...password} />
						{errorResponse.listErrors?.non_field_errors &&
							<ErrorP>{errorResponse.listErrors?.non_field_errors}</ErrorP>
						}
						{loading && 
							<Loading />
						}
						<Button type="submit" value="Start Session" />
					</Form>

					<Separator>
						<Line></Line>
						<Element> O </Element>
						<Line></Line>
					</Separator>
				</MainData>

				<Signin>
					<p>You do not have an account <Link to='/signin'>Sign In</Link></p>
				</Signin>	
			</LoginForm>
		</LoginContainer>
	)
}

export default Login 