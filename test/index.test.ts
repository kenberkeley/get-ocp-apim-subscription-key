import fs from 'fs'
import path from 'path'
import {
  getOcpApimSubscriptionKey,
  extractOcpApimSubscriptionKeyConcatLogic,
} from '../src'

test(getOcpApimSubscriptionKey.name, () => {
  const obfuscatedJsCode = fs.readFileSync(
    path.join(__dirname, 'app_min_js'),
    'utf-8',
  )
  expect(getOcpApimSubscriptionKey(obfuscatedJsCode)).toBe(
    '82c4c17a2f614302bfdd80639440c38e',
  )
})

test(extractOcpApimSubscriptionKeyConcatLogic.name, () => {
  const obfuscatedJsCode1 = `if (!(location[a11_0x5b39('0x2cd8')] !== _0x251d6a['a'][a11_0x5b39('0x53e3')]) || !Object(_0x361f1e['a'])() || Object(_0x361f1e['d'])()) {
      _0x15620c[a11_0x5b39('0x77a6')] = 0x263d + 0x1b9e + -0x41d4 * 0x1;
      break;
  }
  return _0xa11e43 = localStorage[a11_0x5b39('0x977b')](a11_0x5b39('0xb3d6') + 'en'), _0x485ad2 = '', _0x15620c[a11_0x5b39('0x77a6')] = 0x15c1 + 0xef * 0x8 + 0x145 * -0x17, _0x2daa18['a']['post']('' + _0x1f12b5() + _0x485179['a'][a11_0x5b39('0x9f92') + a11_0x5b39('0x70c7')], a11_0x5b39('0x9e17') + a11_0x5b39('0x2e48') + _0xa11e43, { 'headers': { 'Ocp-Apim-Subscription-Key': a11_0x5b39('0xb308') + a11_0x5b39('0x4ff1') + a11_0x5b39('0x6a7e') + '8e' } })[a11_0x5b39('0xa61b')](function (_0x2369ff) {
      localStorage['setItem'](a11_0x5b39('0xb3d6') + 'en', _0x2369ff['data'][a11_0x5b39('0x9e17') + 'ken']), localStorage[a11_0x5b39('0x3bb9')]('accessToke' + 'n', _0x2369ff[a11_0x5b39('0x8715')][a11_0x5b39('0x5a52') + 'en']), _0x485ad2 = _0x2369ff[a11_0x5b39('0x8715')][a11_0x5b39('0x5a52') + 'en'];
      var _0x6cb2e0 = _0x2369ff['data'];
      _0x11dd01['b'][a11_0x5b39('0xb4f0')]({
          'type': _0x3d4702['c'],
          'payload': {
              'data': _0x6cb2e0,
              'decodedToken': _0x191ca7()(_0x6cb2e0['access_tok' + 'en'])
          }
      });`
  expect(extractOcpApimSubscriptionKeyConcatLogic(obfuscatedJsCode1)).toBe(
    `a11_0x5b39('0xb308') + a11_0x5b39('0x4ff1') + a11_0x5b39('0x6a7e') + '8e'`,
  )

  const obfuscatedJsCode2 = `return _0x8e5426['a'][a11_0x5b39('0x8276')](function (_0x4bc0df) {
    for (;;)
          switch (_0x4bc0df[a11_0x5b39('0x7644')] = _0x4bc0df[a11_0x5b39('0x77a6')]) {
          case -0xe1c + -0x1209 + -0xd * -0x279:
              return _0x4bc0df[a11_0x5b39('0x77a6')] = 0x1 * 0x1fa5 + 0x7fa + -0x279d, _0x4defd2();
          case -0x980 + 0x1 * -0x1a62 + 0x23e4:
              return _0xe696fc = _0x4bc0df[a11_0x5b39('0x2008')], _0x16e315[a11_0x5b39('0xaad3')] = {
                  'Authorization': a11_0x5b39('0x7b09') + _0xe696fc,
                  'Ocp-Apim-Subscription-Key': a11_0x5b39('0xb308') + '614302bfdd' + a11_0x5b39('0x6a7e') + '8e',
                  'Cache-Control': a11_0x5b39('0x2252') + 'idate,\x20pri' + a11_0x5b39('0x7081'),
                  'Pragma': 'no-cache',
                  'Expires': -(0x1e0a + -0x14 * -0xf0 + -0x30c9)
              }, _0x4bc0df[a11_0x5b39('0x90d3')](a11_0x5b39('0x8c73'), _0x16e315);
          case 0x13 * 0x13d + 0x35f * 0x5 + 0x285d * -0x1:
          case 'end':
              return _0x4bc0df[a11_0x5b39('0xd75')]();
          }
  }, _0x22f97a);`
  expect(extractOcpApimSubscriptionKeyConcatLogic(obfuscatedJsCode2)).toBe(
    `a11_0x5b39('0xb308') + '614302bfdd' + a11_0x5b39('0x6a7e') + '8e'`,
  )
})
