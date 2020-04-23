'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
var _ = require('underscore');

var AV = require('./av');

AV._ = _;
AV.version = require('./version');
AV.Promise = _promise2.default;
AV.localStorage = require('./localstorage');
AV.Cache = require('./cache');
AV.Error = require('./error');

require('./init');
require('./event')(AV);
require('./geopoint')(AV);
require('./acl')(AV);
require('./op')(AV);
require('./relation')(AV);
require('./file')(AV);
require('./object')(AV);
require('./role')(AV);
require('./user')(AV);
require('./query')(AV);
require('./live-query')(AV);
require('./captcha')(AV);
require('./cloudfunction')(AV);
require('./push')(AV);
require('./status')(AV);
require('./search')(AV);
require('./insight')(AV);

AV.Conversation = require('./conversation');
require('./leaderboard');
module.exports = AV;

/**
 * Options to controll the authentication for an operation
 * @typedef {Object} AuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 */