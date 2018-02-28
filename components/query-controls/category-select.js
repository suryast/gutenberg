/**
 * WordPress dependencies
 */
import { buildTermsTree } from '@wordpress/utils';

/**
 * Internal dependencies
 */
import TreeSelect from '../tree-select';

export default function CategorySelect( { label, noOptionLabel, categories, selectedCategory, onChange } ) {
	const termsTree = buildTermsTree( categories );
	return (
		<TreeSelect
			{ ...{ label, noOptionLabel, onChange } }
			tree={ termsTree }
			selectedId={ selectedCategory }
		/>
	);
}
