export default interface IResponse {
	statusCode: number;
	headers: {[name: string]: string | boolean | void};
	body: string;
}
