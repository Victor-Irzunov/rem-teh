import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { Button, FloatButton, Image } from 'antd'
import { motion } from "framer-motion"
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import StepsComp from '../../components/steps/StepsComp'
import { ModalComp } from '../../components/modal/ModalComp'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'
import support from '../../images/garantia.webp'
export const GarantiyaPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const showModal = () => {
		setIsModalOpen(!isModalOpen)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}
	return (
		<section className='pb-12 w-full z-10 min-h-[60vh]' id='garantiya'>
			<Helmet>
				<title>{'Гарантийные случаи'}</title>
				<meta name="description" content={'Гарантийные случаи'} />
			</Helmet>
			{/* <FloatButton.BackTop shape="square"  /> */}
			<BreadCrumbComp />
			<div className='container mx-auto mt-12'>
				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.h1
						className='text-2xl uppercase font-black mb-2'
						variants={titleAnimation}
					>
						Гарантия на ремонтные работы
					</motion.h1>
					<motion.div
						className='text-center mb-2'
						variants={titleAnimation2}
					>
						<Image src={support} width={150} className='' preview={false} />
					</motion.div>
					<motion.div
						className='font-light text-sm'
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							variants={yAnimation}>
							<p
								className='mb-2'
								variants={yAnimation}
							>
								Мы с гордостью предлагаем нашим клиентам высококачественные услуги по ремонту бытовой техники, а также гарантируем качество и надежность нашей работы. Мы полностью осознаем, что поломка любой домашней техники может создать неприятности и причинить неудобства, поэтому наша цель - обеспечить максимально быстрое и эффективное восстановление функциональности ваших устройств.
							</p>

							<span className='mb-2 block'>
								В рамках нашего сервиса мы предоставляем гарантию на ремонт бытовой техники в течение периода от 3 до 24 месяцев, в зависимости от типа и сложности неисправности. Наша команда профессиональных мастеров обладает богатым опытом и широким набором навыков, чтобы оперативно диагностировать и устранить проблемы с вашей техникой.
							</span>

							<span className='mb-2 block'>
								Кроме того, для вашего удобства мы предлагаем бесплатный выезд мастера на место для устранения неисправностей. Мы понимаем, что время и комфорт наших клиентов являются важными факторами, поэтому стараемся минимизировать ваши затраты на ремонт и обеспечить максимальное удовлетворение от нашего обслуживания.
							</span>

							<span className='mb-2 block'>
								Наша цель - не только предоставить качественный ремонт, но и установить долгосрочные отношения с нашими клиентами. Мы стремимся к тому, чтобы каждый клиент чувствовал себя уверенно и удовлетворенно, обратившись к нам. Мы гордимся тем, что наши клиенты могут полностью доверять нам, зная, что мы сделаем все возможное, чтобы восстановить функциональность и надежность их бытовой техники.
							</span>
							<span className='block'>
								Если у вас возникла неисправность с вашими бытовыми устройствами, не стесняйтесь обращаться к нам. Мы будем рады предоставить вам нашу гарантию на ремонт, бесплатный выезд мастера и оперативное устранение проблемы. Ваше удовлетворение - наша главная цель, и мы готовы сделать все возможное, чтобы обеспечить вас качественным и надежным обслуживанием.
							</span>
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div
					className='mt-16'
					initial="hidden"
					whileInView="visible"
				>
					<motion.h2
						variants={titleAnimation}
						className='text-xl mb-10'
					>
						Как вызвать мастера по гарантии
					</motion.h2>

					<StepsComp />
				</motion.div>

				<Button
					type='primary'
					className='mt-16'
					onClick={showModal}
				>
					Оставить заявку на гарантию
				</Button>
			</div>

			<ModalComp
				isModalOpen={isModalOpen}
				title='Заявка на гарантийный ремонт'
				handleCancel={handleCancel}
				tel={true}
			/>
		</section>
	)
}
