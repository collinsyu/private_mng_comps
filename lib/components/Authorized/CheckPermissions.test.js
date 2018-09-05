import { checkPermissions } from './CheckPermissions.js';

var target = 'ok';
var error = 'error';

describe('test CheckPermissions', function () {
  it('Correct string permission authentication', function () {
    expect(checkPermissions('user', 'user', target, error)).toEqual('ok');
  });
  it('Correct string permission authentication', function () {
    expect(checkPermissions('user', 'NULL', target, error)).toEqual('error');
  });
  it('authority is undefined , return ok', function () {
    expect(checkPermissions(null, 'NULL', target, error)).toEqual('ok');
  });
  it('currentAuthority is undefined , return error', function () {
    expect(checkPermissions('admin', null, target, error)).toEqual('error');
  });
  it('Wrong string permission authentication', function () {
    expect(checkPermissions('admin', 'user', target, error)).toEqual('error');
  });
  it('Correct Array permission authentication', function () {
    expect(checkPermissions(['user', 'admin'], 'user', target, error)).toEqual('ok');
  });
  it('Wrong Array permission authentication,currentAuthority error', function () {
    expect(checkPermissions(['user', 'admin'], 'user,admin', target, error)).toEqual('error');
  });
  it('Wrong Array permission authentication', function () {
    expect(checkPermissions(['user', 'admin'], 'guest', target, error)).toEqual('error');
  });
  it('Wrong Function permission authentication', function () {
    expect(checkPermissions(function () {
      return false;
    }, 'guest', target, error)).toEqual('error');
  });
  it('Correct Function permission authentication', function () {
    expect(checkPermissions(function () {
      return true;
    }, 'guest', target, error)).toEqual('ok');
  });
});