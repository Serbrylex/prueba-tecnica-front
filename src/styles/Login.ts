import styled from 'styled-components'

export const LoginContainer = styled.div`
	width: 100%; 
	height: 100%;	
	display: flex;
	justify-content: center;
	@media (min-width: 800px){
	    flex-direction: row;
	    justify-content: center;
    }
`

export const ImageLeft = styled.img`
	display: none;
	@media (min-width: 800px){
	    display: flex;
	    width: 350px;
	    height: 90vh;
	    margin: auto 50px auto 0;
	    border-radius: 4px;
	    object-fit: cover;
    }
`

export const LoginForm = styled.div`
	width: 350px;	
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`

export const MainData = styled.div`
	width: 350px;
	height: auto;	
	padding: 3% 5%;	
	border: 1px solid #dbdbdb;
	margin: 1% 5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;	
`

export const Title = styled.h1`
	margin: 5% 0 10% 0;
	font-family: 'ZCOOL KuaiLe', cursive;
`

export const Form = styled.form`
	width: 100%;	
	height: 180px;
	display: flex;
	flex-direction: column;
`

export const Input = styled.input`
	background: #fafafa;		
	margin: 5px 0;	
	padding: 9px 0 7px 8px;
	width: 100%;
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	color: #8e8e8e;	
`

export const Button = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 2px;
	background-color: #b2dffc;
	color: white;
	margin: 10px 0;
	border: none;
	cursor: pointer;
`

export const Separator = styled.div`
	width: 100%;
	height: 0;
	display: flex;
	align-items: center;
	margin: 10px 0;
`

export const Line = styled.div`
	border-bottom: 1px solid #dbdbdb;	
	width: 35%;
`

export const Element = styled.p`
	width: 30%;
	text-align: center;
`

export const Signin = styled.div`
	width: 350px;
	height: 50px;
	padding: 5px 10px;
	margin: 5px 10px;
	border: 1px solid #dbdbdb;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Link = styled.em`
	color: #0095f6;
	text-decoration: none;	
    width: fit-content;
`

export const Apps = styled.div`
	width: 350px;
	height: 100px;
	padding: 10%;
	padding: 2% 5%;
	margin: 1% 5%;	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const Description = styled.p`
	
`

export const ImagesContainer = styled.div`
	width: 100%;
	display: flex;	
	justify-content: space-between;
`

export const ErrorP = styled.p`
	color: #ed4956;
    margin: 5px 0;
`