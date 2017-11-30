export class ApiGatewayError extends Error {

	public statusCode: number;

	constructor(code: string, statusCode?: number, message?: string, public detail?: any) {
		super(message);
		this.name = code;
		this.statusCode = statusCode || 500;
	}
}
