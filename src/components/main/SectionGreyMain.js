import React from 'react'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'

export const SectionGreyMain = () => {
	return (
		<section className='bg-[#5338FF] text-[#F4F4F4] px-5 py-10'>
			<motion.div
				className=''
				initial="hidden"
				whileInView="visible"
			>
				<motion.h4
					className='text-2xl text-[#F97315]'
					variants={titleAnimation}
				>
					rem-teh.by
				</motion.h4>
				<motion.p
					className='font-light leading-6 text-sm tracking-wide'
					variants={titleAnimation2}
				>
					Мы REM-TEH.BY – профессиональная фирма, специализирующаяся на ремонте бытовой техники. Мы понимаем, насколько важно иметь надежное и исправное оборудование в своем доме или офисе. Бытовая техника – это сердце и душа современного быстрого образа жизни, и когда она выходит из строя, это может вызвать серьезные неудобства и повлиять на наше ежедневное функционирование.
					<span className='block mt-2'>
						Однако, не стоит беспокоиться! Мы готовы помочь вам восстановить работоспособность вашей бытовой техники и вернуть вам уверенность в ее надежности. Позвольте нам рассказать вам о наших преимуществах.
					</span>
					<span className='block mt-2'>
						Опыт и надежность: Мы - команда высококвалифицированных и опытных специалистов. Мы занимаемся ремонтом бытовой техники уже более 10 лет и за это время накопили огромный опыт в решении самых разнообразных проблем. Наша команда справляется с ремонтом различных видов техники, включая холодильники, стиральные машины, посудомоечные машины, плиты, микроволновые печи и многое другое. Мы знаем, как быстро и эффективно выявлять неисправности и предлагать наиболее оптимальные решения.
					</span>
					<span className='block mt-2'>
						Профессиональный подход: Мы относимся к каждому заказу со всей ответственностью и серьезностью. Наша цель - не только устранить проблему, но и обеспечить долгосрочную работоспособность вашей техники. Мы используем только качественные запчасти и современные инструменты, чтобы гарантировать, что ваше оборудование будет работать на высоком уровне после ремонта.
					</span>
					<span className='block mt-2'>
						Быстрый и удобный сервис: Мы ценим ваше время, поэтому предлагаем быстрый и удобный сервис. Как только вы обратитесь к нам с проблемой, наша команда оперативно свяжется с вами, чтобы назначить удобное время визита мастера. Мы стараемся решить проблему максимально быстро и эффективно, чтобы вы могли вновь пользоваться своей бытовой техникой без задержек.
					</span>
					<span className='block mt-2'>
						Гарантия качества: В "Мастерах Ремонта" мы гордимся своей работой и уверены в качестве предоставляемых услуг. Поэтому мы предоставляем гарантию на все выполненные работы и установленные запчасти. Если возникнут какие-либо проблемы после ремонта, мы бесплатно устраним их в рамках гарантийных обязательств. Ваше удовлетворение и доверие - наш главный приоритет.
					</span>
					<span className='block mt-2'>
						Конкурентные цены: Мы понимаем, что ремонт бытовой техники может быть непредвиденной финансовой нагрузкой. Поэтому мы предлагаем конкурентные и разумные цены за наши услуги. Мы стремимся предоставлять высококачественный ремонт по доступным тарифам, чтобы сделать его доступным для всех наших клиентов.
					</span>
					<span className='block mt-2'>
						Полный спектр услуг: Мы предлагаем полный спектр услуг по ремонту бытовой техники. Это включает диагностику неисправностей, замену деталей, настройку и профилактику, а также консультации по эксплуатации и уходу за техникой. Независимо от марки или модели вашей бытовой техники, мы готовы помочь вам восстановить ее работоспособность.
					</span>
					<span className='block mt-2'>
						Если у вас возникли проблемы с бытовой техникой, не откладывайте ремонт в долгий ящик. Обратитесь к нам и доверьте свою технику профессионалам. Мы обещаем быстрый, надежный и качественный ремонт, который вернет вам комфорт и уверенность в вашей бытовой технике.
					</span>
				</motion.p>
			</motion.div>
		</section>
	)
}
