/**
 * CustomHTTP Kütüphanesi
 * 
 * @versiyon 2.0.0
 * @yazarlar Brad Traversy - BA
 * @lisans MIT
 * 
 **/

 class CustomHTTP {
 	// HTTP GET isteği oluşturma
 	get(url) {
 		return new Promise((resolve, reject) => {
 			fetch(url)
 			.then(res => res.json())
 			.then(data => resolve(data))
 			.catch (err => reject(err));
 		});	
 	}

 	// HTTP POST isteği oluşturma
 	post(url, data){
 		return new Promise((resolve, reject) => {
 			fetch(url, {
 				method: 'POST',
 				headers: {
 					'Content-type': 'application/json'
 				},
 				body: JSON.stringify(data)
 			})
 			.then(res => res.json())
 			.then(data => resolve(data))
 			.catch (err => reject(err));
 		});	
 	}

 	// HTTP PUT isteği oluşturma
 	put(url, data){
 		return new Promise((resolve, reject) => {
 			fetch(url, {
 				method: 'PUT',
 				headers: {
 					'Content-type': 'application/json'
 				},
 				body: JSON.stringify(data)
 			})
 			.then(res => res.json())
 			.then(data => resolve(data))
 			.catch (err => reject(err));
 		});	
 	}

 	// HTTP DELETE isteği oluşturma
 	delete(url){
 		return new Promise((resolve, reject) => {
 			fetch(url, {
 				method: 'DELETE',
 				headers: {
 					'Content-type': 'application/json'
 				}
 			})
 			.then(res => res.json())
 			.then(() => resolve('Post Silindi'))
 			.catch (err => reject(err));
 		});	
 	}
 }