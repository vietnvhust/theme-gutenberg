import { registerBlockType } from '@wordpress/blocks';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};

registerBlockType( 'chestnut-blocks/dos-and-donts', {
    title: __("Dos and Dont\'s", 'chestnut'),
    icon: 'editor-table',
    category: 'chestnut',
    edit: Edit,
    save() {
        <div className={'chestnut-icon-heading'}>
            <span className={'chestnut-icon-heading__heading'}></span>
            <RichText.Content
                tagName="h4"
                value={ attributes.content }
            />
        </div>
    },
} );