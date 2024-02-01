import React from 'react'
import { Helmet } from "react-helmet"
import { LineOutlined } from '@ant-design/icons'
import BreadCrumbComp from '../../components/breadcrumb/BreadcrumbComp'
import Catalog from '../../components/catalog/Catalog'

const ProdazhaPage = () => {
	return (
		<section className='pb-12 w-full z-10 min-h-screen' id='prodazha'>
			<Helmet>
				<title>{'Бытовая техника б/у с гарантией'}</title>
				<meta name="description" content={'Продаём востановленную бытовую технику б/у. Холодильники, мини холодильники стиральные машины, посудомоечные машины. Купите качественную технику по выгодным ценам.'} />
			</Helmet>
			<BreadCrumbComp />
			<div className='container mx-auto mt-12'>
				<div className='text-center mb-12 text-[#042A3F]'>
					<h1 className='sd:text-6xl xyy:text-3xl uppercase'>Продаём <span className='text-yellow-500 block'> бытовую технику</span> б/у</h1>
				</div>


				<div className=''>
					<Catalog />
				</div>


			</div>
		</section>
	)
}

export default ProdazhaPage