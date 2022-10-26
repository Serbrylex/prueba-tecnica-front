
// Redux

import {
	ImageLoading, Container
} from './style'


const Loading = () => {

	return(
		<Container theme='black'>
			<ImageLoading src='/public/circle.svg' alt='loading' />
		</Container>
	)
}

export default Loading