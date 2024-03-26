import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, PanelBody, Panel, PanelRow, TextareaControl, Button } from '@wordpress/components';
import './editor.scss';



export default function Edit({ attributes, setAttributes }) {
	const { itemsList1, itemsList2 } = attributes

	return (
		<>

			{/* <p { ...useBlockProps() }>
			{ __(
				'Image Links Block Lisa – hello from the editor!',
				'image-links-block-lisa'
			) }
		</p> */}
			<div className="container bg">
				<div className="row" >
					<div className="col-md-6">
						<div className="pos-rel">
							{itemsList1.map(item => {
								return <>
									<a key={item.id} href={item.link} className="wrapp-img__link">
										<span className="wrapp-img__link_deck">

											<h3 className="wrapp-img__link_title">{item.title}</h3>
											<p className="wrapp-img__link_text">{item.text}</p>
										</span>
										<img src={item.img} style={{ width: '841px' }} />
									</a>
								</>
							})}

						</div>
					</div>
				</div>
				<div className="row" style={{ margin: '0 0 60px', position: 'relative', minHeight: '300px' }}>
					<div className="col-md-4">
						<div class="pos-rel">
							{itemsList2.map(item => {
								return <>

									<a key={item.id} href={item.link} className="wrapp-img__link">
										<span className="wrapp-img__link_deck">
											<h3 className="wrapp-img__link_title">{item.title}</h3>
											<p className="wrapp-img__link_text">{item.text}</p>
										</span>
										<img src={item.img} style={{ width: '841px' }} />
									</a>
								</>
							})}

						</div>
					</div>

				</div>
			</div>
		</>
	);
}
