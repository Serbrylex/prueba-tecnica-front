// React 
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Assets 
import {
	LoginContainer, MainData, Title, 
    Form, Input, Button, Signin, Link, ErrorP, LoginForm, ImageLeft
} from '../styles/Login'


import {useInputValue} from '../hooks/useInputValue'
import { useRouter } from 'next/router'
import NLink from 'next/link'

import Loading from '../components/Loading'

// API
import apiCall from '../api/apiCall'

// Actions
import { setLogin } from '../actions'


const Login = () => {	

 	const dispatch = useDispatch()

	const history = useRouter()

	const username = useInputValue('Username')
	const password = useInputValue('Password')

	const [errorResponse, setErrorRespose] = useState<{error: boolean, listErrors: string}>({
		error: false,
		listErrors: ''
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
        const data = await response.json()			
		if (response.ok) {			
			dispatch(setLogin({
				...data,
				isAuth: true
			}))
			history.push("/")
		} else {			            
			setErrorRespose({
				error: true,
				listErrors: data.descriptionResponse
			})			
			setLoading(false)
		}			
        console.log(data)
	}


	return(		
		<LoginContainer>
			<ImageLeft src='/Fingerprint-amico.svg' alt='image' />
			<LoginForm>
				<MainData>
					<Title>The Best Place</Title>	
					<Form onSubmit={handleSubmit}>
						{errorResponse.listErrors.length != 0 &&
							<ErrorP>{errorResponse.listErrors}</ErrorP>
						}
						<Input type="text" {...username}  />						
						<Input type="password" {...password} />						
						{loading && 
							<Loading />
						}
						<Button type="submit" value="Start Session" />
					</Form>
				</MainData>

				<Signin>
					<p>You do not have an account <NLink href='/signup'><Link>Sign Up</Link></NLink></p>
				</Signin>	
			</LoginForm>
		</LoginContainer>
	)
}

export default Login 