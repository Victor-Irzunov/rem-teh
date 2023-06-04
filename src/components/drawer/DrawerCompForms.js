import React from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel';
import { FormDate } from '../form/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil';

export const DrawerCompForms = ({ open, placement, setOpen, isActiveForm, title }) => {
	const onClose = () => {
		setOpen(false)
	}
	return (
		<Drawer
			title={title}
			placement={placement}
			onClose={onClose}
			open={open}
			key={placement}
		>
			{
				isActiveForm.tel && <FormTel onClose={onClose} />
			}
			{
				isActiveForm.date && <FormDate onClose={onClose} />
			}
		</Drawer>
	)
}
