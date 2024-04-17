

/*
Escribe una clase llamada SocialMediaErrorque extienda Error . También necesitará un constructor con 2 argumentos, uno para msg y los parámetros. 
Asegúrese de crear la msg propiedad dentro del constructor. ( No te preocupes por escribir el tryy catch, etc. Solo escribe la clase )

*/
class SocialMediaError extends Error {
	constructor(msg = 'An error occurred', ...params) {
		super(msg, ...params);
		this.msg = msg;
	}
}

