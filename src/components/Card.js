import React from 'react';


const Card=(props)=>
{
	return(
		<div className="bg-light-blue dib br3 pa3 ma2 grow tc bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;