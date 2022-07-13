import React from 'react'
import './card.css'
import Menu from './menu'


function Card(props) {
	console.log(props)
	const onDelete = () => {
		console.log()
		props.onDelete(props.id)
	}

	return (
		<div className='card'>
			<div>
				<img src={props.img} />
				<p>{props.p}</p>
				<div>{props.price}</div>
				<div className='btn'>
					<button onClick={onDelete}>Купить</button>
				</div>
			</div>
		</div>
	)
}

export default Card