// React 
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Assets
import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, Element,
	LinkFacebook, Signin, Link, Description, ImagesContainer, ImageApp, 
	LinkImage, ErrorP, PHeader, ImageLeft, SigninForm
} from '../styles/Signin' 
 
import { AiFillFacebook } from 'react-icons/ai'

import { useRouter } from 'next/router'
import {useInputValue} from '../hooks/useInputValue';
import NLink from 'next/link';

// Components
import Loading from '../components/Loading'

// API
import apiCall from '../api/apiCall'

const SignIn = () => {
	
	const history = useRouter()
	const [loading, setLoading] = useState(false)

	// Inputs form
	const email = useInputValue('Email')
	const username = useInputValue('Username')
	const password = useInputValue('Password')
	const password_confirmation = useInputValue('Password confirmation')
	const first_name = useInputValue('First name')
	const last_name = useInputValue('Last name')

	const [errorResponse, setErrorRespose] = useState<{error: boolean, listErrors: any}>({
		error: false,
		listErrors: ''
	})

	const handleSubmit = async (e: any) => {		
		e.preventDefault()
		setLoading(true)

		const response = await apiCall({  
			url: 'http://127.0.0.1:8000/signup/', 
			method: "POST", 
			headers:  {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				email: email.value,
				username: username.value,
				password: password.value,
				password_confirmation: password_confirmation.value,
				first_name: first_name.value,
				last_name: last_name.value
			})
		})
		const data = await response.json()	
		if (response.ok) {
			history.push("/login")
		} else {			
			setErrorRespose({
				error: true,
				listErrors: 'Verify that the password is right'
			})
			setLoading(false)
		}	

		console.log(response)
	}
	
	return(
		<LoginContainer>			
			<ImageLeft src='/Server-amico.svg' alt='image' />
			<SigninForm>
				<MainData>
					<Title>The Best Place</Title>	

					<PHeader>Sign In</PHeader>

					<Form onSubmit={handleSubmit}>

						{errorResponse.listErrors.length > 0 &&
							<ErrorP>{errorResponse.listErrors}</ErrorP>
						}

						<Input type="email" {...email}  />
						
						<Input type="text" {...username} />

						<Input type="password" {...password} />

						<Input type="password" {...password_confirmation} />

						<Input type="text" {...first_name} />

						<Input type="text" {...last_name} />

						<Button type="submit" value="Registrarte" />
					</Form>				

					{errorResponse.listErrors?.non_field_errors &&
						<ErrorP>{errorResponse.listErrors?.non_field_errors}</ErrorP>
					}
					{loading && 
						<Loading />
					}
					
				</MainData>

				<Signin>
					<p>Do you have an account? <NLink href="/login"><Link>Start Session</Link></NLink></p>
				</Signin>				
			</SigninForm>
		</LoginContainer>
	)
}

export default SignIn 