import React from 'react'
import { Helmet } from "react-helmet"
import { LineOutlined } from '@ant-design/icons'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'
import user from '../../images/user.svg'
import truck from '../../images/truck.svg'
import deals from '../../images/deals.svg'
import money from '../../images/money.svg'
import delivery from '../../images/delivery.svg'
import recycling from '../../images/recycling.svg'
import { Image, Card } from 'antd'

const SkupkaPage = () => {
	return (
		<section className='pb-24 w-full z-10 min-h-screen' id='prodazha'>
			<Helmet>
				<title>{'Выкупаем неисправную бытовую технику'}</title>
				<meta name="description" content={'Продажа неисправной бытовой техники – получите выгодное предложение за вашу старую технику. Выкупаем и забираем неисправные устройства. Быстро и удобно.'} />
			</Helmet>

			<BreadCrumbComp />
			<div className='container mx-auto mt-12'>
				<div className='text-center text-[#042A3F]'>
					<h1 className='text-4xl'>Выкуп<span className=''> неисправной техники</span></h1>
				</div>

				<div className='mt-32'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sd:gap-8 xl:gap-10'>

						<Card className="transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={user} preview={false} alt='Делайет заявку' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Оставьте заявку на сайте или по телефону
								</h2>
								<p className=''>
									Важно правильно указать модель техники
								</p>
							</div>
						</Card>

						<Card className="transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={truck} preview={false} alt='Выезд бесплатно' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Мы приедем к вам бесплатно
								</h2>
								<p className=''>
									Быстрый выезд
								</p>
							</div>
						</Card>

						<Card className="transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={deals} preview={false} alt='Купим вашу технику' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Купим вашу технику в неразобраном состоянии
								</h2>
								<p className=''>
									30,00-250,00 рублей
								</p>
							</div>
						</Card>
					</div>
				</div>

				<div className='sd:mt-28 xyy:mt-16'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 lg:gap-8 xl:gap-10'>

						<Card className="mb-24 transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={money} preview={false} alt='Заплатим деньги вам на месте' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Заплатим сразу деньги вам на месте
								</h2>

							</div>
						</Card>

						<Card className="mb-24 transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={delivery} preview={false} alt='Мы сами вынесем и загрузим' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Мы сами вынесем и загрузим технику
								</h2>

							</div>
						</Card>



						<Card className="mb-24 transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
							<div className="card-body items-center text-center gap-4 text-black relative bg-white">
								<div className='p-6 rounded-full bg-yellow-500 absolute -top-20 left-1/2 -translate-x-1/2'>
									<Image src={recycling} preview={false} alt='Утилизация' width={80} height={80} className="" />
								</div>

								<h2 className="card-title mt-2 pt-20 text-xl font-bold">
									Утилизируем согласно законодательству
								</h2>
							</div>
						</Card>
					</div>
				</div>

			</div>
		</section>
	)
}

export default SkupkaPage