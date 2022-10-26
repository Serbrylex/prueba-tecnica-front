const apiCall = async (
    { url, method = "GET", body, headers } : 
    { url: string, method: string, body: any, headers: any }
) => {
	
	try{

		const response = await fetch(url, {
			method,
			headers,
			body,
		})
		
		return response
	}catch(error){	
		return Promise.reject(error)
	}

}

export default apiCall