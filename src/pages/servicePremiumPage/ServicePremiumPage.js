import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import { Space, Image, Tag } from 'antd'
import { ModalComp } from '../../components/modal/ModalComp'
import { PriceSection } from '../../components/priceSection/PriceSection'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { dataHolod, dataKofemashina, dataPosudamojka, dataStiralka } from '../../constants/service/ServicePremiumConst'
import {
	useLocation,
} from 'react-router-dom'
import { ScrollVelocity } from '../../components/scrollVelocity/ScrollVelocity'
// import idea from '../../images/servicePremium/idea.webp'



export const ServicePremiumPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])
	let location = useLocation()


	useEffect(() => {
		switch (location.pathname) {
			case '/uslugi-premium/remont-holodilnikov-premium-brendov':
				setData(dataHolod)
				break
			case '/uslugi-premium/remont-stiralnyh-mashin-premium-brendov':
				setData(dataStiralka)
				break
			case '/uslugi-premium/remont-posudomoechnyh-mashin-premium-brendov':
				setData(dataPosudamojka)
				break
			case '/uslugi-premium/remont-kofemashin-premium-brendov':
				setData(dataKofemashina)
				break
		}
	}, [location.pathname])

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	return (
		<section className=''>
			<BreadCrumbComp />

			{
				data.length && data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<Helmet>
								<title>
									{el.h1}
								</title>
								<meta name="description"
									content={el.description}
								/>
							</Helmet>
							<div className='pb-10 mt-12 container mx-auto'>

								<motion.div
									className=''
									initial="hidden"
									whileInView="visible"
								>
									<motion.h1
										className='text-2xl uppercase font-black mb-4 text-amber-600'
										variants={titleAnimation}
									>
										{el.h1}
									</motion.h1>
									<motion.div
										className='font-light text-sm mb-8'
										variants={titleAnimation2}
									>
										<Space size={[0, 8]} wrap>
											<span className='text-amber-600'>
												{el.list}
											</span>
										</Space>
									</motion.div>
									<motion.h3
										className='font-light text-sm text-justify'
										variants={titleAnimation}
									>
										{el.h3}
									</motion.h3>
								</motion.div>

								<motion.div className='mt-6'>
									<Image
										src={el.img}
										preview={false}
										alt='fff'
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
										<PriceSection data={el} premium={true} />

										<p className='text-sm text-gray-600 font-light mt-4'>
											<InfoCircleTwoTone twoToneColor="#f59e0b" />{' '} Чтобы получить более точную информацию о стоимости и сроках ремонта, просто позвоните нам по телефону  <a href='tel:80333504025' className='font-semibold'>+375 (33) 350-40-25
											</a> либо отправив нам сообщение (кнопка ниже). Наши специалисты будут рады проконсультировать вас и предоставить всю необходимую информацию о вашем устройстве. Мы стремимся обеспечить прозрачность и предоставить вам наиболее точную оценку, чтобы вы могли принять взвешенное решение. Не откладывайте на потом - звяжитесь с нами прямо сейчас для оперативного решения вопроса с ремонтом!
										</p>
										<Tag
											color="gold"
											className='cursor-pointer'
											onClick={() => showModal('Стоимость и сроки ремонта Премиум техники')}
										>
											узнать стоимость и сроки ремонта
										</Tag>
									</motion.div>

									<motion.div
										variants={yAnimation}
										className='text-center mt-10'
									>
										<p className='font-light text-amber-600'>
											{el.priziv}
										</p>
										{/* <Image src={idea} className='mt-5' width={150} /> */}
									</motion.div>
								</motion.div>
							</div>

							<div className='mt-10 border-b border-black'>
								<ScrollVelocity baseVelocity={-10} />
								<ScrollVelocity baseVelocity={10} />
							</div>


							{
								el.content.map((elem, idx) => {
									return (
										<div key={idx} className='bg-amber-500 pt-8 pb-1'>
											<div className='container mx-auto'>
												<motion.div
													className='leading-6'
													initial="hidden"
													whileInView="visible"
												>
													<motion.div
														variants={yAnimation}
													>
														<h3 className='text-lg'>
															{elem.h4}
														</h3>
														<p className='font-light text-[13px] leading-4 text-justify'>
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
				}
				)
			}

			<ModalComp isActive={{ question: true }} isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} />
		</section>
	)
}
