import React, { useContext } from 'react'
import { LineOutlined } from '@ant-design/icons'
import CollapseComp from '../collapse/CollapseComp'
import { useScreens } from '../../constants/Constants'


function VoprosOtvet() {
	const screens = useScreens()
	const color = '#eab308'
	
	return (
		<section id='vopros' className='py-8 w-full z-10 relative mt-20'>
			<div className=''>
				<div className='container mx-auto'>
					<div className='flex flex-col justify-between'>
						<div className='text-center'>
							<h2 className='text-4xl uppercase'>
								Часто задаваемые<span className='text-black'> вопросы</span>
							</h2>
							<h3 className='uppercase '>Ремонт бытовой техники в Минске</h3>
							<LineOutlined style={{ color, fontSize: '3rem' }} />
						</div>
						<div className={screens.xs ? 'pl-1' : 'pl-10'}>
							<CollapseComp />
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
export default VoprosOtvet