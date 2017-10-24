export default interface IContext {
	done: () => void;
	succeed: () => void;
	fail: () => void;
	logGroupName: string;
	logStreamName: string;
	functionName: string;
	memoryLimitInMB: string;
	functionVersion: string;
	getRemainingTimeInMillis: () => number;
	invokeid: string;
	awsRequestId: string;
	invokedFunctionArn: string;
}
