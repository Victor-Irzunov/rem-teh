import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { stiralkaData, holodilnikData, posudomojkaData } from '../../constants/service/KalkulyatorConst'
import FormKalkulyator from '../../components/form/FormKalkulyator'
import { Button, Divider } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
import { ModalComp } from '../../components/modal/ModalComp'

const KalkulyatorPage = () => {
	const [data, setData] = useState([])
	const [key, setKey] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	let location = useLocation()
	const substringToRemove = "/kalkulyator-remonta/";
	let modifiedString = location.pathname.replace(substringToRemove, '');

	useEffect(() => {
		switch (modifiedString) {
			case 'remont-stiralnikh-mashin':
				setData(stiralkaData)
				break
			case 'remont-kholodilnikov':
				setData(holodilnikData)
				break
			case 'remont-posudomoechnikh-mashin':
				setData(posudomojkaData)
				break

		}
	}, [location.pathname])
	return (
		<section className='sd:py-32 xyy:py-10'>
			{
				data.length && data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<Helmet>
								<title>
									{el.h1}
								</title>
								<meta name="description" content={el.description} />
							</Helmet>
							<div className='container mx-auto'>
								<h1 className='xyy:text-2xl sd:text-3xl text-center'>
									{el.h1}
								</h1>

								<div className='sd:mt-16 xyy:mt-8 bg-white/80 border rounded-lg shadow-2xl sd:p-10 xyy:p-5'>
									<p className='text-gray-500 font-light sd:text-base xyy:text-sm'>
										{el.p}
									</p>
									<FormKalkulyator dataForm={el.dataForm} setKey={setKey} />

									{
										key ?
											el.dataForm.result.map(elem => {
												if (key === elem.value) {
													return (
														<div
															className='py-5 px-2 mt-10'
															key={elem.id}
															id='remont'
														>
															<h2 className='text-xl font-semibold'>
																{elem.value}
															</h2>

															<ul className='mt-6'>
																{
																	elem.info.map(item => {
																		return (
																			<li className='mb-10 border bg-slate-200 py-3 px-2 rounded-md' key={item.id}>
																				<div className='flex items-center sd:flex-row xyy:flex-col'>
																					<div className='sd:p-3 xyy:p-1 text-center'>
																						<p className='text-gray-500 text-xs'>
																							Вероятность
																						</p>
																						<p className='text-green-500 font-bold text-2xl'>
																							{item.percent}
																						</p>
																					</div>

																					<div className='font-semibold sd:p-3 xyy:p-0 italic text-lg sd:ml-5 xyy:ml-0 text-center'>
																						<p className=''>
																							{item.title}
																						</p>
																					</div>
																				</div>
																				<Divider />
																				<div className='flex items-center sd:flex-row xyy:flex-col'>
																					<div className='sd:p-6 xyy:p-2'>
																						<p className='text-gray-500 text-xs'>
																							Действие
																						</p>
																						<ToolOutlined className='text-green-500 pl-3' style={{ fontSize: '1.8em' }} />
																					</div>
																					<div className='p-3 italic text-lg sd:ml-8 xyy:ml-0 text-center'>
																						<p className=''>
																							{item.remont}
																						</p>
																					</div>
																				</div>
																				<Divider />
																				<div className='p-3 text-center'>
																					<p className='font-light'>
																						Стоимость ремонта
																					</p>
																					<p className='text-green-700 font-semibold text-2xl'>
																						{item.price}
																					</p>
																				</div>
																				{
																					item.price !== '-' ?
																						<div className='mt-2 text-center'>
																							<Button
																								type='primary'
																								onClick={() => showModal(item.title)}
																							>
																								Заказать
																							</Button>
																						</div>
																						:
																						null
																				}
																			</li>
																		)
																	})
																}
															</ul>
														</div>
													)
												}
											})
											:
											null
									}

								</div>
							</div>
						</React.Fragment>
					)
				})
			}
			<ModalComp
				tel
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
			/>
		</section>
	)
}

export default KalkulyatorPage