import React from 'react';

const Img = props =>
	<center>
		<card className="Bd1">
		<div className="fx1">
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<p className="Pl1">
			Photo by
			<a href={props.user}>{props.name}</a>
			<br></br>
			<a href={props.link}>ดูภาพต้นฉบับ</a>
			<p> likes:  {props.likes}</p>
			<p>Description: {props.description}</p>

		</p>
		</div>
		</card>
		</center>;

export default Img;
