import { useState } from "react";
import { RiAddFill, RiCheckboxCircleFill, RiShieldCheckFill } from "react-icons/ri"
import { Badge, Rate } from 'antd';

const ImgProductDetails = ({ product }) => {
	const { id, name, images, alt, description, price, discount, dost1, dost2, dost3 } = product
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModalOrder = () => {
		document.getElementById("my_modal_3").close();
	};

	const handleImageClick = (index) => {
		setSelectedImageIndex(index);
	};
	const handleImageView = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="bg-white p-6 rounded-lg border border-gray-300 flex sd:flex-row xyy:flex-col gap-6">
			<div>
				<div className="sd:w-[32rem] xz:w-auto overflow-hidden rounded-lg border border-gray-300">
					<div className="max-w-full"
						onClick={handleImageView}
					>
						<img src={images[selectedImageIndex]} alt={alt} className="w-full h-full object-cover" />
					</div>
				</div>
				<div className="flex items-center gap-3 mt-6 overflow-x-auto">
					{images.map((img, idx) => (
						<div
							key={idx}
							className="w-20 h-16 rounded border border-gray-300 overflow-hidden cursor-pointer"
							onClick={() => handleImageClick(idx)}
						>
							<img src={img} alt="" className="w-full h-full object-cover" />
						</div>
					))}
				</div>
			</div>

			<div className="flex-1">
				<h2 className="font-bold sd:text-4xl xz:text-3xl mb-6">{name}</h2>

				<div className="pb-3 pt-1 text-sm text-gray-400">Артикль: 234{id}</div>
				<div className="pt-1 flex items-center gap-3">
					<strong className="text-2xl font-semibold text-gray-800">{price} BYN</strong>
					<span className="font-medium text-gray-500 line-through">{(price / 100 * discount) + price} BYN</span>
					<span className="text-green-500 text-sm font-semibold">-{discount}%</span>
				</div>
				<div className="flex items-center gap-2 mt-3 mb-3">
					<Rate allowHalf defaultValue={5} /> <Badge className="pl-1.5 mt-3" color='#52c41a' count='Рекомендуем' />

				</div>
				<div className='mb-4'>
					<p className="sd:text-base xz:text-xs mb-1 font-semibold">
						Доставка:
					</p>
					<ul className='text-sm'>
						<li className=''>
							- до подьезда - {dost1} руб.
						</li>
						<li className=''>
							- до розетки - {dost2} руб.
						</li>
						<li className=''>
							- по РБ - {dost3} руб.
						</li>
					</ul>
				</div>

				<div className="py-4 max-w-lg">
					<ul className='text-sm'>
						{
							description.map((el, idx) => {
								return (
									<li className='' key={idx}>
										{el}
									</li>
								)
							})
						}
					</ul>
				</div>

				<div className='mt-2 mb-3'>
					<p className='mb-0'>
						Купить
					</p>
					<a href="tel:80257213718" className="font-semibold text-lg">
						+375 25 721-37-18
					</a>
				</div>

				<div className="pt-4 flex items-center gap-3 text-sm text-gray-500">
					<RiShieldCheckFill fontSize={22} />
					Быстрая доставка. Гарантия.
				</div>

				<div className='mt-2 pl-2'>
					<p className='sd:text-sm xyy:text-xs text-gray-500'>
						Уважаемые покупатели, сообщаем Вам, что наша компания  предоставляет гарантию на всю технику, приобретенную у нас.
						После покупки Вы получите  гарантийный талон, на котором будет изложена вся информация, касающаяся гарантии.
						На протяжении всего срока гарантии Вам будет предоставлена:
						бесплатная диагностика в нашем сервисном центре, или в сервисе, который является непосредственным партнером компании.

						От 3-х до 12 месяцев.
					</p>
				</div>
			</div>


			{isModalOpen && (
				<div className="fixed inset-0 z-10 flex items-center justify-center">
					<div className="fixed inset-0 bg-black opacity-50"></div>
					<div className="relative bg-white p-8 rounded-lg max-w-2xl w-full">
						<img
							src={images[selectedImageIndex]}
							alt=""
							className="w-full h-[80vh] object-cover rounded-lg"
						/>
						<div className="absolute top-4 right-4 cursor-pointer" onClick={closeModal}>
							<span className="text-3xl font-bold">✕</span>
						</div>
					</div>
				</div>
			)}

			<dialog id="my_modal_3" className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<h3 className="font-bold text-lg">Ваш заказ: csdcd</h3>
					<h4 className="font-bold text-base">Cумма заказа:  руб</h4>
					<p className="py-4 text-xs">Заполните, пожалуйста, данные формы, чтобы быстро оформить заказ.</p>
					<div className="modal-action">
						{/* <FormOrder product={product} closeModalOrder={closeModalOrder} /> */}

					</div>
					<p className="py-4 text-sm">
						После получения вашего заказа мы перезвоним вам для подтверждения.
					</p>
				</div>
			</dialog>
		</div>
	)
}

export default ImgProductDetails;