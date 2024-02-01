import React, { useEffect, useState } from 'react'
import { Button, Image, Tag } from 'antd'
import { CalculatorOutlined, InfoCircleTwoTone } from '@ant-design/icons'
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
	Link,
	useLocation,
} from 'react-router-dom'
import { ModalComp } from '../../components/modal/ModalComp'
import { PriceSection } from '../../components/priceSection/PriceSection'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'
import { Link as LinkScroll } from 'react-scroll'
import CarouselComp from '../../components/carousel/CarouselComp'
import VideoPlayer from '../../components/video/VideoPlayer'

export const ServicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])
	let location = useLocation()
	const substringToRemove = "/uslugi/";
	let modifiedString = location.pathname.replace(substringToRemove, '');

	const objLink = [
		{
			link: '/uslugi/remont-kholodilnikov'
		},
		{
			link: '/uslugi/remont-stiralnikh-mashin'
		},
		{
			link: '/uslugi/remont-posudomoechnikh-mashin'
		},
	]

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}



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
		<section className='relative'>

			{
				objLink.find(el => el.link === location.pathname) ?
					<div className='fixed bottom-5 left-1/2 -translate-x-1/2 z-40'>
						<Button icon={<CalculatorOutlined />} type="primary" shape="round">
							<Link to={`/kalkulyator-remonta/${modifiedString}`}
								className="cursor-pointe ml-2"
							>
								Калькулятор
							</Link>
						</Button>
					</div>
					:
					null
			}



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
										variants={titleAnimation2}
									>
										{el.h1}
									</motion.h1>

									<motion.h2
										className='font-light text-xl underline mb-5 text-blue-600'
										variants={titleAnimation}
									>
										<LinkScroll to='plan'
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
										>


											{el.h2 || ''}
										</LinkScroll>
									</motion.h2>

									<motion.p
										className='font-light text-sm'
										variants={titleAnimation2}
									>
										{el.p}
									</motion.p>
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
											<InfoCircleTwoTone />{' '} Чтобы получить более точную информацию о стоимости и сроках ремонта, просто позвоните нам по телефону <a href='tel:80333504025' className='font-semibold'>+375 (33) 350-40-25
											</a> либо отправив нам сообщение (кнопка ниже). Наши специалисты будут рады проконсультировать вас и предоставить всю необходимую информацию о вашем устройстве. Мы стремимся обеспечить прозрачность и предоставить вам наиболее точную оценку, чтобы вы могли принять информированное решение. Не стесняйтесь обращаться к нам, и мы с удовольствием поможем вам с ремонтом вашей техники.
										</p>
										<Tag
											color="yellow"
											onClick={() => showModal('Стоимость и сроки ремонта')}
										>
											Узнать стоимость и сроки ремонта
										</Tag>
									</motion.div>
								</motion.div>

								{
									el.isActive ?
										<motion.div
											className='mt-20 py-5'
											id='plan'
											initial="hidden"
											whileInView="visible"
										>
											<motion.h3
												variants={yAnimation}
												className='text-2xl uppercase'
											>
												{el.h3}
											</motion.h3>

											<div className='mt-9'>
												<CarouselComp isActive={el.isActive} data={el.img2} />
											</div>

											<div className='mt-6'>
												<p className='font-light text-justify'>
													{el.p2}
												</p>
											</div>

											<div className='mt-8'>
												<h5 className=''>
													{el.h5}
												</h5>
												<ul className='text-sm font-light text-justify'>
													{
														el.text.map((elem, i) => {
															return (
																<li key={i} className='mb-3'>
																	{elem}
																</li>
															)
														})
													}
												</ul>
												<Tag
													color="yellow"
													onClick={() => showModal('Стоимость обслуживания')}
													style={{ textTransform: 'capitalize' }}
													className='cursor-pointer'
												>
													узнать стоимость обслуживания
												</Tag>
											</div>

										</motion.div>
										:
										null
								}

							</div>

							<VideoPlayer />

							{
								el.content.map((elem, idx) => {
									return (
										<div key={idx} className='bg-white pt-8 pb-1'>
											<div className='container mx-auto'>
												<motion.div
													className='leading-6'
													initial="hidden"
													whileInView="visible"
												>
													<motion.div
														variants={yAnimation}

													>
														<h4 className='font-bold text-lg'>
															{elem.h4}
														</h4>
														<p className='font-light text-black text-[13px] leading-4 text-justify'>
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
