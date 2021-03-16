import React from 'react';
import FixImg from './FixImg';


const ImgList = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<FixImg
				url={img.urls.thumb}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
                likes={img.likes}
                description={img.description}
				key={img.id}
			/>
		);
	} else {
		;
	}
	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ImgList;
