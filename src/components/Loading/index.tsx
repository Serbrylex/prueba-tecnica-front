
// Redux

import {
	ImageLoading, Container
} from './style'


const Loading = () => {

	return(
		<Container theme='black'>
			<ImageLoading src='/circle.svg' alt='loading' />
		</Container>
	)
}

export default Loading