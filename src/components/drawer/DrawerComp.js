import React, { useState } from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel';
import { FormDate } from '../form/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil'
import { useScreens } from '../../constants/Constants';
// import { MenuMobilPremium } from '../header/mobilMenu/MenuMobilPremium';

export const DrawerComp = ({ open, placement, setOpen, isActiveForm, title }) => {
	const screens = useScreens()

	const onclose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			title={title}
			placement={placement}
			onClose={onclose}
			open={open}
			key={placement}
			width='330px'
		>
			{
				isActiveForm.tel && <FormTel />
			}
			{
				isActiveForm.date && <FormDate />
			}
			{
				isActiveForm.menu && <MenuMobil onclose={ onclose} />
			}
			{/* {
				isActiveForm.menu2 && <MenuMobilPremium onClose={onClose} />
			} */}
		</Drawer>
	)
}
