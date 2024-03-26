import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('custom-blocks/banner', {
    title: 'Custom Banner',
    icon: 'smiley',
    category: 'common',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h3',
        },
        content: {
            type: 'string',
            source: 'html',
            selector: '.text',
        },
        imageURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { title, content, imageURL } = attributes;

        return (
            <div className="banner">
                <div className="container">
                    <RichText
                        tagName="h3"
                        value={title}
                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                        placeholder="Enter title"
                    />
                    <div className="wrap">
                        <div className="item">
                            <div className="col6">
                                <div className="textBlock">
                                    <RichText
                                        tagName="p"
                                        value={content}
                                        onChange={(newContent) => setAttributes({ content: newContent })}
                                        placeholder="Enter text"
                                    />
                                </div>
                                <a href="#" className="btn">Заказать услугу</a>
                            </div>
                            <div className="col6">
                                <img src={imageURL} alt="Banner" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { title, content, imageURL } = attributes;

        return (
            <div className="banner">
                <div className="container">
                    <h3 className="bannerName">{title}</h3>
                    <div className="wrap">
                        <div className="item">
                            <div className="col6">
                                <div className="textBlock">
                                    <p className="text">{content}</p>
                                </div>
                                <a href="#" className="btn">Заказать услугу</a>
                            </div>
                            <div className="col6">
                                <img src={imageURL} alt="Banner" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});
