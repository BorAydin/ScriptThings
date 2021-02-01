/**
 * CustomHTTP Kütüphanesi
 * 
 * @versiyon 1.0.0
 * @yazarlar Brad Traversy - BA
 * @lisans MIT
 * 
 **/

function customHTTP() {
	this.http = new XMLHttpRequest();
}

// HTTP GET isteği oluşturma
customHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);

	let that = this; /* Buranın tanımlanması sebebi: if bloğunda this.http.status yazınca onload'ın altındaki kapsamda kalıyor ve bir üst kapsamdaki asıl istekle bağlantısız hale gelip status of undefined 
	hatası dönüyor. Bu bağlantıyı kaybetmemek adına bir çözüm budur. Ötekisi de onload fonksiyon tanımlamasında arrow fonksiyon formatı kullanmak hatayı çözüyor. */
	this.http.onload = function() {
		if(that.http.status === 200) {
			callback(null, that.http.responseText);
		} else {
			callback('Hata: ' + that.http.status);
		}
	}

	this.http.send();
}

// HTTP POST isteği oluşturma
customHTTP.prototype.post = function(url, data, callback) {
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let that = this;
	this.http.onload = function() {		
		callback(null, that.http.responseText);
	}

	this.http.send(JSON.stringify(data));
}

// HTTP PUT isteği oluşturma
customHTTP.prototype.put = function(url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let that = this;
	this.http.onload = function() {		
		callback(null, that.http.responseText);
	}

	this.http.send(JSON.stringify(data));
}

// HTTP DELETE isteği oluşturma
customHTTP.prototype.delete = function(url, callback) {
	this.http.open('DELETE', url, true);

	let that = this; 
	this.http.onload = function() {
		if(that.http.status === 200) {
			callback(null, 'Post Silindi');
		} else {
			callback('Hata: ' + that.http.status);
		}
	}

	this.http.send();
}