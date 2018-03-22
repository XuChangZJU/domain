'use strict';

module.exports = {
	errorUndefined: { code: 999, message: "未定义的错误" },
	errorInternal: { code: 998, message: "服务器开小差了" },
	errorUnexistedApi: { code: 997, message: "请求了不存在的接口" },
	errorUncompletedApi: { code: 996, message: "请求了尚未实现的接口" },
	errorUserNotLoggedIn: { code: 995, message: "用户没有登录" },
	errorInvalidAccessToken: { code: 994, message: "用户使用的访问令牌非法" },
	errorExpiredAccessToken: { code: 993, message: "登录已失效，请重新登录" },
	errorSuspiciousAccessToken: { code: 992, message: "可疑的访问令牌" },
	errorNoAccessRight: { code: 991, message: "该用户没有访问此数据的权限" },
	errorUnexistedApiMethod: { code: 990, message: "请求了不支持的http方法" },

	errorIllegalFileUrl: { code: 986, message: '非法的URL' },
	errorInvalidAccessTokenOrRefreshToken: { code: 985, message: '访问令牌或刷新令牌非法' },
	errorVersionTooLow: { code: 984, message: '应用的版本过低' },
	errorDataInconsistency: { code: 983, message: '数据已经过期' },
	errorDataObsoleted: { code: 982, message: '数据失效了' },

	errorLegalDataConflict: { code: 799, message: '合法的数据冲突' },
	errorLegalParamError: { code: 798, message: '合法的参数错误' },
	errorLegalBodyError: { code: 797, message: '合法的请求错误' },

	createErrorByCode: function createErrorByCode(errorCode, msg, entity) {
		var err = new Error(msg || errorCode.message);
		err.code = errorCode.code;
		if (entity) {
			err.entity = entity;
		}
		return err;
	},

	errorNeedAlert: function errorNeedAlert(errorCode) {
		if (errorCode.code < 700) {
			return true;
		} else {
			return false;
		}
	}
};