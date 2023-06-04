import React, { useState } from 'react'
import CarouselComp from '../../components/carousel/CarouselComp'
import { SectionGreyMain } from '../../components/main/SectionGreyMain'
import { SectionServiceMainPageComp } from '../../components/main/SectionServiceMainPageComp'
import { useScreens } from '../../constants/Constants'
import { FloatButton, Button, Image } from 'antd'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'
import { Helmet } from "react-helmet"
import { ModalComp } from '../../components/modal/ModalComp'
import { PercentageOutlined, DollarCircleOutlined } from '@ant-design/icons'
import VoprosOtvet from '../../components/voprosOtvet/VoprosOtvet'
import { InfoSection } from '../../components/infoSection/InfoSection'
import run from '../../images/run.svg'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'

export const MainPage = () => {
	const screens = useScreens()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [isActive, setIsActive] = useState({
		question: false,
		sale: false,
		date: false

	})
	const showModal = (title, active) => {
		setIsModalOpen(true)
		setTitle(title)
		if (active === "question") {
			setIsActive(prev => ({ ...prev, question: true, sale: false, date: false }))
		}
		if (active === "sale") {
			setIsActive(prev => ({ ...prev, sale: true, question: false, date: false }))
		}
		if (active === "date") {
			setIsActive(prev => ({ ...prev, sale: false, question: false, date: true, }))
		}

	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<div className=''>
			<Helmet>
				<title>{`
				Строительство и ремонт бань, крыш, заборов, печей и каминов под ключ в Могилеве`}</title>
				<meta
					name="description"
					content={'Выполняем строительство и ремонт бань, крыш, заборов, печей и каминов. Услуга сантехника.'}
				/>
			</Helmet>
			{
				screens.md ?
					<div className='relative'>
						<div className='container mx-auto'>
							<div className='h-16' />
							<CarouselComp />
							<BreadCrumbComp />
							<div className='pt-10'>
								<h1 className='xy:text-3xl sd:text-7xl font-semibold  mb-2 tracking-wide uppercase'>
									Ремонт бытовой техники в Минске
								</h1>
								<span className='text-orange-600 text-lg md:text-4xl tracking-widest'>
									с выездом к клиенту
								</span>
								<p className=' uppercase text-lg mt-3'>
									выезд в течении часа
								</p>
							</div>

						</div>
					</div>
					:
					<div className='relative'>
						<CarouselComp />
						<BreadCrumbComp />
						<div className='container px-5 mt-2'>

							<motion.div
								className='mt-8'
								initial="hidden"
								whileInView="visible"
							>
								<motion.h1
									className='xyy:text-2xl xy:text-3xl uppercase tracking-wide font-extrabold'
									variants={titleAnimation}
								>
									Ремонт бытовой техники в Минске
								</motion.h1>

								<motion.p
									className='xyy:text-sm xy:text-lg font-light tracking-wide uppercase leading-6'
									variants={titleAnimation2}
								>
									с выездом к клиенту
								</motion.p>
								<motion.div
									className='mt-12 font-light leading-5 flex items-center'
									variants={titleAnimation2}
								>
									<Image src={run} width={20} />
									<span className='ml-2'>выезд в течении часа</span>
								</motion.div>
							</motion.div>

							<div className='w-full mt-10 mb-20'>
								<span
									className='uppercase sd:text-2xl xyy:text-xs cursor-pointer border border-black px-2 py-2'
									onClick={() => showModal('Задать вопрос', "question")}
								>
									Задать вопрос
								</span>
							</div>
							<div className='flex xyy:flex-col xy:flex-row xy:justify-between w-full'>
								<div className='flex justify-start items-center text-black sd:text-lg xy:text-xs xy:mr-1 sd:mr-10 '>
									<div
										className='px-2.5 py-2 shadow-xl bg-white rounded-md border border-black/10 flex justify-center items-center'
									>
										<PercentageOutlined className='sd:text-lg xy:text-lg text-black' />

									</div>
									<span
										className='font-light ml-2'
										onClick={() => showModal('Скидка за предаварительную запись 15%', "date")}
									>
										Скидка за запись 15%
									</span>
								</div>
								<div className='flex justify-start items-center sd:text-lg xyy:mt-2 xy:mt-0 xy:text-xs text-black'>
									<div
										className='px-2.5 py-2 shadow-xl bg-white rounded-md border border-black/10 flex justify-center items-center'
									>
										<DollarCircleOutlined className='sd:text-lg xy:text-lg text-black' />
									</div>
									<span
										className='font-light ml-2'
										onClick={() => showModal('Получить скидку 20%', "sale")}
									>
										Скидка пенсионерам и многодетным 20%
									</span>
								</div>
							</div>
						</div>
						<ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} isActive={isActive} />
					</div>
			}

			<SectionServiceMainPageComp />

			<InfoSection />

			<VoprosOtvet />

			<SectionGreyMain />
			{/* <FloatButton.BackTop shape="square" /> */}

		</div>
	)
}
