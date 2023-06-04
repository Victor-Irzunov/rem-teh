import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { FloatButton } from 'antd'
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import { Image } from 'antd'
import aktsii from '../../images/aktsii/aktsii.webp'
import aktsii2 from '../../images/aktsii/aktsii2.webp'
import aktsii3 from '../../images/aktsii/aktsii3.webp'
import aktsii4 from '../../images/aktsii/aktsii4.webp'
import { ModalComp } from '../../components/modal/ModalComp'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'

export const AktsiiPage = () => {
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
		<section className='pb-12 w-full z-10 min-h-[60vh]' id='aktsii'>
			<Helmet>
				<title>{'Акциии и скидки'}</title>
				<meta name="description" content={'Акции и скидки'} />
			</Helmet>
			<FloatButton.BackTop shape="square" />
			<BreadCrumbComp />
			<div className='container mx-auto mt-12'>
				<motion.div
					className='mb-16'
					initial="hidden"
					whileInView="visible"
				>
					<motion.h1
						className='text-2xl uppercase font-black mb-8'
						variants={titleAnimation}
					>
						Акции и Скидки
					</motion.h1>
					<motion.h2
						className='font-light text-sm'
						variants={titleAnimation2}
					>
					</motion.h2>
				</motion.div>

				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						variants={yAnimation}
						className='mb-20'

					>
						<Image
							src={aktsii}
							preview={false}
							className='shadow-xl'
							onClick={() => showModal('Скидка за предаварительную запись 15%', "date")}
						/>
					</motion.div>

				</motion.div>
				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						variants={yAnimation}
						className='mb-20'
						onClick={() => showModal('Получить скидку 20%', "sale")}
					>
						<Image src={aktsii4} preview={false} className='shadow-xl' />
					</motion.div>
				</motion.div>
				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						variants={yAnimation}
						className='mb-20'
						onClick={() => showModal('Получить скидку 20%', "sale")}
					>
						<Image src={aktsii2} preview={false} className='shadow-xl' />
					</motion.div>
				</motion.div>
				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						variants={yAnimation}
						className='mb-20'
						onClick={() => showModal('Получить скидку 20%', "sale")}
					>
						<Image src={aktsii3} preview={false} className='shadow-xl' />
					</motion.div>

				</motion.div>

				<motion.div
					className=''
					initial="hidden"
					whileInView="visible"
				>
					<motion.div
						variants={yAnimation}
						className='font-light'
					>
						<p>
							Уважаемые клиенты,
						</p>
						<p>
							Мы с радостью объявляем о запуске нашей новой акции, призванной облегчить вам ремонт бытовой техники и сэкономить ваши средства. Теперь, предварительно записавшись на определенное время, вы можете получить скидку в размере 15% на любой ремонт!
						</p>
						<p>
							Мы ценим ваше время и хотим предложить вам преимущество предварительной записи. Просто позвоните нам или оставьте заявку на нашем веб-сайте, указав удобную для вас дату и время, и вы получите не только гарантированное место в нашем расписании, но и приятную скидку 15% на стоимость ремонта. Таким образом, вы сможете не только избежать долгих ожиданий, но и сэкономить деньги!
						</p>
						<p>
							Кроме того, мы хотели бы выразить нашу признательность и уважение к пенсионерам, ветеранам и многодетным семьям. В связи с этим, мы предлагаем им специальную скидку в размере 20% на любые услуги ремонта. Мы считаем, что это небольшое проявление нашей благодарности за ваше мудрое поколение, невероятные жизненные достижения и важную роль, которую вы играете в нашем обществе.
						</p>
						<p>
							Не упустите эту отличную возможность сэкономить на ремонте бытовой техники. Запишитесь заранее на удобное для вас время и воспользуйтесь скидкой в 15%. И если вы являетесь пенсионером, ветераном или многодетной семьей, вы получите дополнительные 5% скидки, что в сумме составляет 20%.
						</p>
						<p>
							Наши опытные и квалифицированные специалисты готовы помочь вам с любыми проблемами бытовой техники. Мы используем только высококачественные запчасти и предлагаем гарантию на все наши работы.
						</p>
						<p>
							Не откладывайте ремонт на потом. Запишитесь сегодня и воспользуйтесь нашей акцией!
						</p>
					</motion.div>
				</motion.div>


				<ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} isActive={isActive} />
			</div>
		</section>
	)
}
