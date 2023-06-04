import React from 'react'
// import { LineOutlined } from '@ant-design/icons'

export const PriceSection = ({ data }) => {
	return (
		<section className='py-6 w-full'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='uppercase text-orange-500 text-sm'>Лучшая
						<span className='text-[#1e283a]'> цена</span>
					</h2>
					<h3 className='text-xl uppercase'>
						{data.price_title}
					</h3>
					<div className='text-center uppercase'>
						<p className='text-[10px] font-light leading-3'>
							В 20% случаев, проблема решается по телефону с помощью
							<span className='font-semibold'>{" "} БЕСПЛАТНОЙ {" "}</span>
							консультации.
						</p>
						<p className='text-[10px] font-light leading-3'>
							В 96% случаев, мастер производит ремонт на месте в день обращения.
						</p>
					</div>
					<div className='text-xs mt-6 mb-7'>
						<p className='uppercase font-light'>
							ДИАГНОСТИКА НЕИСПРАВНОСТИ <span className='font-semibold'>{" "}БЕСПЛАТНО</span>*
						</p>
					</div>
				</div>

				<div className=''>
					<div className='flex justify-between items-center'>
						<div className='w-1/3 invisible m-0.5'></div>
						<div className='w-1/3 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-white text-[9px] mb-0'>стоимость</p>
								<p className='uppercase text-white text-[9px] mb-0'>ремонта</p>
							</div>
						</div>
						<div className='w-1/3 h-20 shadow-lg bg-[#1e283a] flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-white text-[9px] mb-0'>сроки</p>
								<p className='uppercase text-white text-[9px] mb-0'>ремонта</p>
							</div>
						</div>
						{/* <div className='w-1/4 h-20 shadow-lg bg-[#1e283a] flex justify-center items-center m-0.5'>
							<div className='text-center'>
								<p className='uppercase text-white text-[9px] mb-0'>гарантия</p>
								<p className='uppercase text-white text-[9px] mb-0'>на работы</p>
							</div>
						</div> */}
					</div>
					{
						data.price.map(elem => {
							return (
								<div key={elem.id} className='flex justify-between items-center'>
									<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5 p-1'>
										<p className='uppercase text-black text-[11px] mb-0 font-semibold text-center'>
											{elem.title}
										</p>
									</div>
									<div className='w-1/3 h-20 shadow-lg bg-[#f8862e] flex justify-center items-center m-0.5'>
										<p className='text-white text-[13px] mb-0 font-semibold'>
											от {elem.price}
										</p>
									</div>
									<div className='w-1/3 h-20 shadow-lg bg-white flex justify-center items-center m-0.5'>
										<p className='text-black text-[13px] mb-0 font-semibold'>
											{elem.time}
										</p>
									</div>
									
								</div>
							)
						})
					}
				</div>
				<p className='mt-8 uppercase text-sm'>
					Гарантия на ремонтные работы до 2-х лет
				</p>
				<p className='font-light text-xs mt-6 text-gray-600'>
					* Мы предлагаем бесплатную диагностику неисправностей вашей техники при условии, что вы выберете нас для последующего ремонта. Это означает, что вы можете получить полное представление о проблеме без дополнительных затрат. Наша цель - обеспечить прозрачность и доверие, поэтому мы предлагаем эту бесплатную услугу, чтобы вы могли принять информированное решение относительно ремонта. Когда вы решите сотрудничать с нами, наши опытные мастера приступят к ремонту вашей техники с полным пониманием проблемы, что поможет вам сэкономить время и решить проблему более эффективно.
				</p>
			</div>
		</section>
	)
}
