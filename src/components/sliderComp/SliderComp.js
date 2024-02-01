import { Image } from 'antd';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../images/slider/1.webp'
import img2 from '../../images/slider/2.webp'
import img3 from '../../images/slider/3.webp'
import img4 from '../../images/slider/4.webp'
import img5 from '../../images/slider/5.webp'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 mx-7 '>
			<div className='container mx-auto'>
				<div className='flex flex-col justify-between mb-8'>
					<div className='text-center'>
						<h4 className='text-3xl uppercase'>
							Почему выбирают нас для ремонта
						</h4>
					</div>
				</div>

				<Carousel responsive={responsive}>
					<div className='bg-white rounded-md overflow-hidden mx-2'>
						<Image src={img1} preview={false} className='rounded-t-md' />
						<div className='mt-4 px-3 py-4 h-44'>
							<p className='font-semibold'>
								Быстрый выезд
							</p>
							<p className=''>
								Наши преимущества включают в себя быстрый выезд специалистов с необходимым инструментом, позволяющим немедленно приступить к диагностике или ремонту вашей бытовой техники.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-md overflow-hidden mx-2'>
						<Image src={img2} preview={false} className='rounded-t-md' />
						<div className='mt-4 px-3 py-4 h-44'>
							<p className='font-semibold'>
								Ремонт любой сложности
							</p>
							<p className=''>
								Наши преимущества включают в себя способность проводить ремонт бытовой техники любой сложности, обеспечивая надежное и качественное восстановление вашего оборудования.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-md overflow-hidden mx-2'>
						<Image src={img3} preview={false} className='rounded-t-md' />
						<div className='mt-4 px-3 py-4 h-44'>
							<p className='font-semibold'>
								Официальная гарантия
							</p>
							<p className=''>
								Мы предоставляем официальную гарантию на все наши услуги, обеспечивая надежность и качество в каждом ремонте.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-md overflow-hidden mx-2'>
						<Image src={img5} preview={false} className='rounded-t-md' />
						<div className='mt-4 px-3 py-4 h-44'>
							<p className='font-semibold'>
								Точная диагностика
							</p>
							<p className=''>
								Наша команда специалистов проводит точную диагностику вашей бытовой техники, чтобы избежать лишнего и ненужного ремонта, экономя ваши время и средства.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-md overflow-hidden mx-2'>
						<Image src={img4} preview={false} className='rounded-t-md' />
						<div className='mt-4 px-3 py-4 h-44'>
							<p className='font-semibold'>
								Экономия на ремонте
							</p>
							<p className=''>
								С нами вы можете сэкономить на ремонте бытовой техники, получив доступные цены и высокое качество обслуживания.
							</p>
						</div>
					</div>


				

				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp