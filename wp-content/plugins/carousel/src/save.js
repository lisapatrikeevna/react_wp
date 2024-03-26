import { useState } from 'react';
import { RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const { titleG, titleB, itemsValue } = attributes;
	const [num, setNum] = useState(0); // Состояние для хранения индекса текущего активного слайда

	const onChangeNum = (index) => {
		setNum(index); // Обновляем текущий активный слайд
	};

	return (
		<div className="banner">
			<div className="container">
				<h3 className="bannerName">
					<RichText.Content value={titleG} />
					<span>
						<RichText.Content value={titleB} />
					</span>
				</h3>
				<div className="wrap">
					{itemsValue.map((item, index) => (
						<div key={index} className={num === index ? 'item active' : 'item'}>
							<div className="col6">
								<div className="textBlock">
									<h2 className="title">
										<RichText.Content value={item.title} />
									</h2>
									<p className="text">
										<RichText.Content value={item.text} />
									</p>
								</div>
								<a href={item.link} className="btn">
									Заказать услугу
								</a>
							</div>
							<div className="col6">
								<img src={item.img} alt={item.title} className="img" />
							</div>
						</div>
					))}
				</div>
				<div className='indicatorList'>
					{itemsValue.map((item, index) => (
						<span
							key={index}
							onClick={() => onChangeNum(index)} // Обработчик клика для изменения текущего слайда
							className={num === index ? 'carouselIndicator active' : 'carouselIndicator'}
						></span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Save;
