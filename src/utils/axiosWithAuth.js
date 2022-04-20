import axios from 'axios'

export const axiosWithAuth = () => {
    const token = 'sk_test_42456f33161dad1c790a1b1f2a9257d1ab94f197ea9ba'

	return axios.create({
        baseURL: 'https://api.stripe.com/v1',
		headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type':  'application/x-www-form-urlencoded'
        },
	})
}   
