import React from 'react';
import { Drawer as VaulDrawer } from 'vaul';
import { useDispatch, useSelect } from '@wordpress/data';

export function EditorDrawer( { children } ) {
	const buttonLabel = '🚀';

	const isDrawerOpen = useSelect( ( select ) => {
		return select( 'wpgraphql-ide' ).isDrawerOpen();
	} );

	const { setDrawerOpen } = useDispatch( 'wpgraphql-ide' );

	return (
		<div className="EditorDrawerRoot">
			<VaulDrawer.Root
				dismissible={ false }
				closeThreshold={ 1 }
				shouldScaleBackground={ false }
				open={ isDrawerOpen }
				onOpenChange={ setDrawerOpen }
			>
				<VaulDrawer.Trigger className="EditorDrawerButton">
					{ buttonLabel }
				</VaulDrawer.Trigger>
				<VaulDrawer.Portal>
					<VaulDrawer.Content>{ children }</VaulDrawer.Content>
					<VaulDrawer.Overlay />
				</VaulDrawer.Portal>
			</VaulDrawer.Root>
		</div>
	);
}
