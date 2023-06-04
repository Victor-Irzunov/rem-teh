import React from 'react'
import { Helmet } from "react-helmet"

export const ContactPage = () => {
	return (
		<>
			<section className='xyy:px-5 sm:container sm:mx-auto pt-10'>
				<Helmet>
					<title>{'Контакты | Ремонт крыш | Строительство бань | Печей и каминов'}</title>
					<meta name="description" content={`
					Контактные телефоны фирмы по строительтву и ремонту бань, крыш, заборо, печей и каминов. 
					`} />
				</Helmet>

				<h1 className='text-2xl uppercase font-black mb-6'>
					Наши контакты
				</h1>
				<div className='text-lg font-extralight flex flex-col justify-between items-start'>
					{/* <a href="https://yandex.by/maps/157/minsk/house/Zk4Ycg9pSEYOQFtpfXR4c3VrZw==/?ll=27.489139%2C53.892983&z=16.81"
						title="Наш адрес"
						target='_blank'
						rel="noreferrer"
						className='mb-3'
					>
						г.Могилёв, Могилёвская 100
					</a> */}
					{/* <a
						href="mailto:brigady.by@gmail.com"
						title="Наша почта"
						className='mb-3'
					>
						........@gmail.com
					</a> */}
					<a href='tel:80293089091'>+375 (29) 308-90-91</a>
					<a href='tel:80298423398'>+375 (29) 842-33-98</a>
				</div>


			</section>
			<div className='mt-10'>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3864cfd3e8c113bbb32b6523cb00a12ea6c2afdccbfda77915e356c1f544523c&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
			</div>
		</>
	)
}
