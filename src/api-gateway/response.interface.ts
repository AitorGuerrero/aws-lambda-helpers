export default interface IResponse {
	body: string;
	headers?: {[name: string]: any};
	isBase64Encoded?: boolean;
	statusCode: number;
}
