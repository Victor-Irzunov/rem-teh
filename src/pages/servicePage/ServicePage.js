import React, { useEffect, useState } from 'react'
import { Image, Tag, FloatButton } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import {
	dataHolodilnik,
	dataLedogenerator,
	dataMorozilnik,
	dataKondicioner,
	dataStiralnyeMashiny,
	dataSushilnyeMashiny,
	dataPosudomoechnayaMashina,
	dataVarochnyePaneli,
	dataIndukcionnyePlity,
	dataDuhovyeShkafy,
	dataTelevizory,
	dataRobotPylesos,
	dataPylesosy
} from '../../constants/service/ServiceConst'
import {
	useLocation,
} from 'react-router-dom'
import { ModalComp } from '../../components/modal/ModalComp'
import { PriceSection } from '../../components/priceSection/PriceSection'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'

export const ServicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	// let data
	let location = useLocation()

	useEffect(() => {
		switch (location.pathname) {
			case '/uslugi/remont-kholodilnikov':
				setData(dataHolodilnik)
				break
			case '/uslugi/remont-morozilnikov':
				setData(dataMorozilnik)
				break
			case '/uslugi/remont-ldogeneratorov':
				setData(dataLedogenerator)
				break
			case '/uslugi/remont-konditsionerov':
				setData(dataKondicioner)
				break
			case '/uslugi/remont-stiralnikh-mashin':
				setData(dataStiralnyeMashiny)
				break
			case '/uslugi/remont-sushilnikh-mashin':
				setData(dataSushilnyeMashiny)
				break
			case '/uslugi/remont-posudomoechnikh-mashin':
				setData(dataPosudomoechnayaMashina)
				break
			case '/uslugi/remont-varochnikh-panelei':
				setData(dataVarochnyePaneli)
				break
			case '/uslugi/remont-induktsionnikh-plit':
				setData(dataIndukcionnyePlity)
				break
			case '/uslugi/remont-dukhovikh-shkafov':
				setData(dataDuhovyeShkafy)
				break
			case '/uslugi/remont-televizorov':
				setData(dataTelevizory)
				break
			case '/uslugi/remont-robot-pilesosov':
				setData(dataRobotPylesos)
				break
			case '/uslugi/remont-pilesosa':
				setData(dataPylesosy)
				break
		}
	}, [location.pathname])



	return (
		<section className=''>

			{/* <FloatButton.BackTop shape="square" /> */}
			<BreadCrumbComp />

			{
				data.length && data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<Helmet>
								<title>{el.h1}</title>
								<meta name="description" content={el.description} />
							</Helmet>
							<div className='pb-10 mt-12 container mx-auto'>
								<motion.div
									className=''
									initial="hidden"
									whileInView="visible"
								>
									<motion.h1
										className='text-2xl uppercase font-black mb-4'
										variants={titleAnimation}
									>
										{el.h1}
									</motion.h1>
									<motion.h2
										className='font-light text-sm'
										variants={titleAnimation2}
									>
										{el.p}
									</motion.h2>

								</motion.div>
								<motion.div className='mt-4'>
									<Image
										src={el.img}
										preview={false}
										alt={el.alt}
										className='shadow-2xl'
									/>
								</motion.div>

								<motion.div
									className='mt-10 overflow-hidden'
									initial="hidden"
									whileInView="visible"
								>
									<motion.div
										variants={yAnimation}
									>
										<PriceSection data={el} />

										<p className='text-sm text-gray-600 font-light mt-4'>
											<InfoCircleTwoTone />{' '} Чтобы получить более точную информацию о стоимости и сроках ремонта, просто позвоните нам по телефону <a href='tel:80339174921' className='font-semibold'>+375 33 917-49-21</a> либо отправив нам сообщение (кнопка ниже). Наши специалисты будут рады проконсультировать вас и предоставить всю необходимую информацию о вашем устройстве. Мы стремимся обеспечить прозрачность и предоставить вам наиболее точную оценку, чтобы вы могли принять информированное решение. Не стесняйтесь обращаться к нам, и мы с удовольствием поможем вам с ремонтом вашей техники.
										</p>
										<Tag
											color="blue"
											onClick={() => showModal('Стоимость и сроки ремонта')}
										>
											узнать стоимость и сроки ремонта
										</Tag>
									</motion.div>
								</motion.div>
							</div>

							{
								el.content.map((elem, idx )=> {
									return (
										<div key={idx} className='bg-[#5338FF] pt-8 pb-1'>
											<div className='container mx-auto'>
											<motion.div
												className='leading-6'
												initial="hidden"
												whileInView="visible"
											>
												<motion.div
													variants={yAnimation}

												>
													<h3 className='font-bold text-white text-lg'>
														{elem.h4}
													</h3>
													<p className='font-light text-[#F4F4F4] text-[13px] leading-4'>
														{elem.p}
													</p>
												</motion.div>
												</motion.div>
												</div>
										</div>
									)
								})
							}
						</React.Fragment>
					)
				})
			}

			<ModalComp isActive={{ question: true }} isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} />
		</section>
	)
}
