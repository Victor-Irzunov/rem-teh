import React from 'react'
import img from '../../images/click.svg'
import { Divider, Image } from 'antd'
import { data } from '../../constants/main/MainConst'
import { motion } from "framer-motion"
import { yAnimation } from '../../constants/animation/AnimationConst'
import { Link } from 'react-router-dom'
import CyrillicToTranslit from 'cyrillic-to-translit-js'

export const SectionServiceMainPageComp = () => {
	const cyrillicToTranslit = new CyrillicToTranslit()

	return (
		<section
			className='mt-20 mb-10 xyy:px-5 sm:container sm:mx-auto'
		>
			<Divider />
			<h2 className='uppercase'>
				Наши услуги
			</h2>
			{data.map((el, idx) => {
				return (
					<motion.div
						className='mt-12'
						initial="hidden"
						whileInView="visible"
						key={el.id}
						
					>
						<motion.div
							variants={yAnimation}
						>
							<p className='text-gray-500 uppercase text-xs tracking-wider'>
								ремонт от <span className='font-semibold'>{el.name}</span> руб
							</p>

							<div className=''>
								<h2 className='font-black text-2xl'>
									{el.h2}
								</h2>
								<p className='text-sm font-light'>
									{el.text}
								</p>
								<Image src={el.img} preview={false} alt={el.alt} className='shadow-2xl'/>
							</div>

							<div className='text-right mt-3'>
								<Link to={`/uslugi/${cyrillicToTranslit.transform(el.link.split(' ').join('-'))}`} className='uppercase'>
									подробнее <Image preview={false} src={img} style={{ width: '16px', marginLeft: '3px' }} />
								</Link>
							</div>
							{
								idx !== data.length - 1 &&
								<Divider />
							}
						</motion.div>
					</motion.div>
				)
			})}
		</section>
	)
}
