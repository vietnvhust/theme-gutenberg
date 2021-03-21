import { registerBlockType } from '@wordpress/blocks';
import {RichText, useBlockProps,InspectorControls} from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import { getIconComponent } from './icons-map';
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};

registerBlockType( 'chestnut-blocks/heading', {
    title: __("Heading with icon", 'chestnut'),
    icon: 'admin-customizer',
    category: 'chestnut',
    attributes: {
        option: {
            type: 'string',
            default: 'dos'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: __("Heading", 'chestnut')
        },
    },
    edit: Edit,
    save( props ) {
        const {
            attributes: { option, content },
        } = props;
        const HeadingIcon = getIconComponent( option );

        return (
            <div className="aquila-icon-heading">
                <span className="aquila-icon-heading__heading">
                    <HeadingIcon />
                </span>
                { /* Saves <h2>Content added in the editor...</h2> to the database for frontend display */ }
                <RichText.Content tagName="h4" value={ content } />
            </div>
        );
    },
} );