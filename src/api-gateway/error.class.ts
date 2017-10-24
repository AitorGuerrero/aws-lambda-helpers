export default class ApiGatewayError extends Error {
	constructor(code: string, public statusCode: number, message: string, public detail?: any) {
		super(message);
		this.name = code;
	}
}
