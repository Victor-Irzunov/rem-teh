import React from 'react'
import { Drawer } from 'antd'
import { useScreens } from '../../constants/Constants';
import { MenuMobilPremium } from '../header/mobilMenu/MenuMobilPremium';
export const DrawerComp2 = ({ setOpen2, open2, onCloseAll }) => {
	const screens = useScreens()
	const onClose2 = () => {
		setOpen2(false)
	}
	const onClose3 = () => {
		onCloseAll()
	}
	return (
		<Drawer
			title='Меню премиум техники'
			placement='right'
			onClose={onClose2}
			open={open2}
			key='right'
			width='330px'
		>
			<MenuMobilPremium onClose={onClose3} />
		</Drawer>
	)
}
