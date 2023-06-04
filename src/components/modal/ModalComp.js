import React from 'react'
import { Modal } from 'antd'
import { FormTel } from '../form/FormTel'
import { FormQuestion } from '../form/FormQuestion'
import { FormSale } from '../form/FormSale'
import { FormDate } from '../form/FormDate'

export const ModalComp = ({ isModalOpen, title, handleCancel, isActive, tel}) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive?.question &&
				<FormQuestion handleCancel={handleCancel} />
			}
			{
				isActive?.sale &&
				<FormSale handleCancel={handleCancel} title={title} />
			}
			{
				isActive?.date &&
				<FormDate handleCancel={handleCancel} title={title} />
			}
			{
				tel &&
				<FormTel
					btn={'Отправить'}
				/>
			}

		</Modal>
	)
}
