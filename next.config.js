const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const serverPrefix = '/next-demo';

module.exports = (phase) => {
	const developMode = phase === PHASE_DEVELOPMENT_SERVER;
	const basePath = developMode ? '' : serverPrefix;
	return {
		basePath,
		trailingSlash: !developMode, // 路由路徑以folder為主([開發]不啟用 [釋出]啟用)
		publicRuntimeConfig: { basePath },
	};
};
