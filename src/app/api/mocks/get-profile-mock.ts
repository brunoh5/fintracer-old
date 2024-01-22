import { http, HttpResponse } from 'msw'

export const getProfileMock = http.get('http://localhost:3333/me', async () => {
	console.log('aqui')

	return HttpResponse.json({
		user: {
			name: 'Admin',
		},
	})
})
