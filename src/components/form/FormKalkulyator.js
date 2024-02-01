import React from 'react';
import { Button, Select, Form } from 'antd';
import { scroller} from 'react-scroll'

const FormKalkulyator = ({ dataForm, setKey }) => {
	const { name, age, priznak } = dataForm
	const scrollDown = () => {
		scroller.scrollTo('remont', {
		  smooth: true,
		  duration: 800,
		  offset: -100,
		  onSettled: () => {
			 // Прокрутка выполнена, можно добавить дополнительные действия
			 console.log('Прокрутка выполнена');
		  },
		});
	 };
	 
	 const onFinish = (values) => {
		console.log('Success:', values);
		setKey(values.priznak);
	 
		setTimeout(scrollDown, 0);
	 };
	
	
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};



	return (
		<Form
			name="kalkulyator"
			initialValues={{
				name: "LG",
				age: "до 3 лет",
				priznak: priznak[0].value

			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			labelCol={{
				span: 24,
			}}
			wrapperCol={{
				span: 18,
			}}
			size='large'
		>

			<Form.Item
				label="Марка техники"
				name="name"
			>
				<Select
					// defaultValue="LG"
					options={name}
				/>
			</Form.Item>

			<Form.Item
				label="Возраст"
				name="age"
			>
				<Select
					// defaultValue="до 3 лет"
					options={age}
				/>
			</Form.Item>

			<Form.Item
				label="Признак неисправности"
				name="priznak"
			>
				<Select
					// defaultValue="Не открывается люк"
					options={priznak}
				/>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Узнать
				</Button>
			</Form.Item>
		</Form>
	)
};
export default FormKalkulyator;