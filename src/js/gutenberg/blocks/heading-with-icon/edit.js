import { PanelBody, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { getIconComponent } from './icons-map';
const Edit = ( props ) => {
    const { className, attributes, setAttributes } = props;
    const { option, content } = attributes;
    const HeadingIcon = getIconComponent( option );
    return <div className={'chestnut-icon-heading'}>
        <span className={'chestnut-icon-heading__heading'}><HeadingIcon /></span>
        <RichText
            tagName="h4"
            value={ content }
            onChange={ ( content ) => setAttributes( {...attributes, content: content} ) }
            placeholder={ __( 'Heading...', 'chestnut' ) }
        />
        <InspectorControls>
            <PanelBody title={ __( 'Block Settings', 'chestnut' ) }>
                <RadioControl
                    label={ __( 'Select the icon', 'chestnut' ) }
                    help={ __( 'Controls icon selection', 'chestnut' ) }
                    selected={ option }
                    options={ [
                        { label: 'Dos', value: 'dos' },
                        { label: "Dont's", value: 'donts' },
                    ] }
                    onChange={ ( optionVal ) => {
                        setAttributes( {...attributes, option: optionVal} );
                    } }
                />
            </PanelBody>
        </InspectorControls>
    </div>;
}
export default Edit;