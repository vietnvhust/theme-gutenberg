import {RichText} from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
const Edit = ( props ) => {
    const { className, attributes, setAttributes } = props;
    const { option, content } = attributes;
    console.log("className", className);
    console.log("attributes", attributes);
    console.log("setAttributes", setAttributes);
    return <div className={'chestnut-icon-heading'}>
        <span className={'chestnut-icon-heading__heading'}></span>
        <RichText
            tagName="h4"
            value={ content }
            onChange={ ( content ) => setAttributes( {...attributes, content: content, option: "option"} ) }
            placeholder={ __( 'Heading...', 'chestnut' ) }
        />
    </div>;
}
export default Edit;