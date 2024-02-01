import React from 'react'
// import { InfoOutlined } from '@ant-design/icons'

export const InfoSection = () => {
	return (
		<section className='py-10 z-10mt-24 mb-12 px-2 relative'>
			<div className='container mx-auto'>
				<div className='text-center  border border-yellow-500'>

				{/* <InfoOutlined className='text-2xl text-orange-500' /> */}
					<p className='mt-4 text-2xl font-light uppercase text-yellow-500'>
						Информация <span className=''>для </span> клиента
					</p>

					<p className='font-light text-sm'>
						Выкупаем неисправную технику или заменяем на восстановленную.
					</p>
					<p className='font-light text-sm'>
						В случае длительного ремонта, предоставляем технику на время ремонта.
					</p>
				</div>
			</div>
		</section>
	)
}
