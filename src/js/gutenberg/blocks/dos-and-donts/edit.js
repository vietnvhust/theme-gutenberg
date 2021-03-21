import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
const INNER_BLOCKS_TEMPLATE = [
    [
        'core/group',
        {
            className: 'aquila-dos-and-donts__group',
            backgroundColor: 'pale-cyan-blue',
        },
        blockColumns,
    ],
];

const ALLOWED_BLOCKS = [ 'core/group' ];
const Edit = () => {
    return <div className={'chestnut-icon-heading'}>
        <InspectorControls allowedBlocks={ ALLOWED_BLOCKS } templateLock={ true } template={ INNER_BLOCKS_TEMPLATE } />
    </div>;
}
export default Edit;