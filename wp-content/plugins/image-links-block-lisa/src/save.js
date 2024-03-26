/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
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
	);
}
