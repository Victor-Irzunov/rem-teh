import React from 'react'
import img1 from '../../images/remont/1.webp'
import img2 from '../../images/remont/2.webp'
import img3 from '../../images/remont/3.webp'
import img4 from '../../images/remont/4.webp'
import img5 from '../../images/remont/5.webp'
import img6 from '../../images/remont/6.webp'
import img7 from '../../images/remont/7.webp'
import img8 from '../../images/remont/8.webp'
import img9 from '../../images/remont/9.webp'
import img10 from '../../images/remont/10.webp'
import img11 from '../../images/remont/11.webp'
import img12 from '../../images/remont/12.webp'
import img13 from '../../images/remont/13.webp'
import img15 from '../../images/remont/15.webp'
import img16 from '../../images/remont/16.webp'
import img17 from '../../images/remont/17.webp'
import img18 from '../../images/remont/18.webp'
import img19 from '../../images/remont/19.webp'
import img20 from '../../images/remont/20.webp'
import img21 from '../../images/remont/21.webp'
import { Image } from 'antd'

export const BrandSectionComp = () => {
	return (
		<section className='py-16 mt-10 bg-white w-full'>
			<div className='container mx-auto'>

				<div className='border-dashed border-2 border-sky-500 rounded-lg px-2 pt-8 pb-12 relative bg-white'>
					<div className='flex flex-col justify-between mb-8 absolute -top-5 left-0 right-0'>
						<div className='text-center'>
							<h4 className='xyy:text-2xl xm:text-4xl uppercase bg-white inline px-2 rounded-lg py-2'>
								Мы ремонтируем
							</h4>
						</div>
					</div>

					<div className='mt-8'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							<Image src={img1} preview={false} alt='Изображение 1' />
							<Image src={img2} alt='Изображение 2' preview={false} />
							<Image src={img3} alt='Изображение 2' preview={false} />
							<Image src={img4} alt='Изображение 2' preview={false} />
							<Image src={img5} alt='Изображение 2' preview={false} />
							<Image src={img6} alt='Изображение 2' preview={false} />
							<Image src={img7} alt='Изображение 2' preview={false} />
							<Image src={img8} alt='Изображение 2' preview={false} />
							<Image src={img9} alt='Изображение 2' preview={false} />
							<Image src={img10} alt='Изображение 2' preview={false} />
							<Image src={img11} alt='Изображение 2' preview={false} />
							<Image src={img12} alt='Изображение 2' preview={false} />
							<Image src={img13} alt='Изображение 2' preview={false} />
							{/* <Image src={img14} alt='Изображение 2' preview={false} /> */}
							<Image src={img20} alt='Изображение 2' preview={false} />
							
							<Image src={img16} alt='Изображение 2' preview={false} />
							<Image src={img17} alt='Изображение 2' preview={false} />
							<Image src={img18} alt='Изображение 2' preview={false} />
							<Image src={img19} alt='Изображение 2' preview={false} />
							<Image src={img15} alt='Изображение 2' preview={false} />
							<Image src={img21} alt='Изображение 2' preview={false} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
