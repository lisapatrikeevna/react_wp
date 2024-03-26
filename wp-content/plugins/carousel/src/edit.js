import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, PanelBody, Panel, PanelRow, TextareaControl, Button } from '@wordpress/components';
import './editor.scss';
import image from './assets/sliderImg.png'

export default function Edit({ attributes, setAttributes }) {
	console.log(attributes);

	const { titleG, titleB, itemsValue, num } = attributes;
	const onChangeNum = (index) => {
		setAttributes({ num: index });
	};
	// const [num, setNum] = useState(1);
	// Используем useState для хранения данных и функции их обновления
	// const [itemsValue, setItemsValue] = useState([
	// 	{ title: 'title banner', text: 'text banner', link: '', img: 'image' },
	// 	{ title: 'Автопарк сервиса содержит', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atqu consectetur adipisicing elit. Atque, rem', link: '', img: 'image' },
	// 	{ title: 'title 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, rem?', link: '', img: 'image' }
	// ]);

	// // Функция для обновления данных элемента
	// const handleItemChange = (index, field, value) => {
	// 	// Создаем копию массива данных
	// 	const updatedItems = [...itemsValue];
	// 	// Обновляем значение поля элемента
	// 	updatedItems[index][field] = value;
	// 	// Обновляем состояние
	// 	setItemsValue(updatedItems);
	// };


	const updateTitleG = (value) => {
		setAttributes({ titleG: value });
	};
	const updateTitleB = (value) => {
		setAttributes({ titleB: value });
	};
	// const updateText = (value) => {
	// 	setAttributes({ text: value });
	// };



	const updateItem = (index, key, value) => {
		console.log(' updateItem  key, value', key, value);
		const newItemsValue = [...itemsValue];
		newItemsValue[index][key] = value;
		setAttributes({ itemsValue: newItemsValue });
	};

	return (
		<>
			<InspectorControls>
				<Panel header='My Panel Example'>
					{/* <PanelRow>
						<PanelBody>
							<TextareaControl label='Title Banner' value={title} onChange={updateTitleG} help='Type content' />
						</PanelBody>
						<PanelBody>
							<TextareaControl label='Text' value={text} onChange={updateText} help='Type content' />
						</PanelBody>
					</PanelRow> */}
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div {...useBlockProps({ className: 'banner' })}>
					<div className='container'>
						<h3 className='bannerName'>
							<RichText
								onChange={(value) => updateTitleG(value)}
								value={titleG}
							/>
							<span>
								<RichText
									tagName="span"
									onChange={(value) => updateTitleB(value)}
									value={titleB}
								/>
							</span>
						</h3>
						<div className='wrap'>
							{itemsValue.map((item, index) => (
								<div key={index} className={num === index ? 'item active' : 'item'}>
									<div className='col6'>
										<div className='textBlock'>
											<RichText
												tagName="h2"
												className="title"
												onChange={(value) => updateItem(index, 'title', value)}
												value={item.title}
												placeholder='Enter title...'
											/>
											<RichText
												tagName="p"
												className="text"
												onChange={(value) => updateItem(index, 'text', value)}
												value={item.text}
												placeholder='Enter text...'
											/>
										</div>
										{/* <a href={item.link} className='btn'>
											{__('Order Service', 'carousel')}
										</a> */}
										<RichText
											tagName="a"
											className="btn"
											onChange={(value) => updateItem(index, 'link', value)}
											value={item.link}
											placeholder={__('Enter Link', 'carousel')}
										/>
									</div>
									<div className='col6'>
										{/* <img
											// src={item.img}
											src={image}
											alt={index}
											className='img'
										// Ideally, you should handle onChange event here if you want to allow users to edit images from the block editor
										/> */}
										<MediaUpload
											onSelect={(media) => {
												// Вызываем функцию updateItem для обновления значения img
												updateItem(index, 'img', media.url);
											}}
											type="image"
											value={item.img}
											render={({ open }) => (
												<Button onClick={open}>
													{item.img ? (
														<img key={item.img} src={item.img} alt={item.title} className='img' />
													) : (
														<>
															<img src={image} alt={item.title} className='img' /> {/* Используем image как дефолтное изображение */}
															<span>{__('Upload Image', 'carousel')}</span> {/* Добавляем текст "Upload Image" для загрузки изображения */}
														</>
													)}
												</Button>
											)}
										/>
									</div>
								</div>
							))}
						</div>
						<div className='indicatorList'>
							{itemsValue.map((item, index) => (
								<span
									key={index}
									onClick={() => onChangeNum(index)}
									className={num === index ? 'carouselIndicator active' : 'carouselIndicator'}
								></span>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
