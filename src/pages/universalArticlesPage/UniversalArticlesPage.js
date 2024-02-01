import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {
	useLocation,
} from 'react-router-dom'
import { data_article1 } from '../../constants/articlesData/DataArticles1'
import { Image } from 'antd'
import eye from '../../images/articles/eye.svg'
import { data_article2 } from '../../constants/articlesData/DataArticles2'

const UniversalArticlesPage = () => {
	let location = useLocation()
	const [data, setData] = useState({})

	useEffect(() => {
		switch (location.pathname) {
			case '/article/udar-molnii-ili-skachok-napryazheniya':
				setData(data_article1)
				break
			case '/article/kak-predotvratit-remont-holodilnika':
				setData(data_article2)
				break

		}
	}, [location.pathname])

	return (
		<main className='sd:pt-32 xyy:pt-24 pb-24'>
			<Helmet>
				<title>{data.title}</title>
				<meta name="description" content={data.description} />
			</Helmet>

			<div className='container mx-auto'>
				<section className=''>
					<div className=''>
						<h1 className='uppercase sd:text-center leading-9 xyy:text-left text-2xl'>
							{data.h1}
						</h1>
					</div>

					<div className='flex items-center mb-7 justify-center'>
						<div className='w-6'>
							<Image src={eye} alt='Просмотры' className='' preview={false} />
						</div>
						<span className='ml-2'>
							{data.view2}
						</span>
					</div>

					<div className=''>
						<div className='sd:w-1/3 xyy:w-full sd:float-right xyy:float-none'>
							<Image src={data.img} preview={false} className='sd:pl-6 xyy:pl-0' alt={data.alt} />
						</div>



						<div className='mt-16 leading-6'>
							{data.content}
						</div>
					</div>

				</section>
			</div>
		</main>
	)
}

export default UniversalArticlesPage