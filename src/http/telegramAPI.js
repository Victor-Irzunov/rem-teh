import axios from 'axios'
// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'
// const uri_api = `https://api.telegram.org/bot${token}/sendMessage`
const token = '6189562118:AAF7He5YKhKtqPHcFx7VDOTVfFvXl_Biz8U'
const chat_id = '-1001870401513'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}




