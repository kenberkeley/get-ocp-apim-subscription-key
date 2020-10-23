import { JSDOM, DOMWindow } from 'jsdom'

export function getOcpApimSubscriptionKey(obfuscatedJsCode: string): string {
  const { window } = new JSDOM(`<script>${obfuscatedJsCode}</script>`, {
    runScripts: 'dangerously', // https://github.com/jsdom/jsdom#executing-scripts
  })
  const concatLogic = extractOcpApimSubscriptionKeyConcatLogic(obfuscatedJsCode)
  return window.eval(concatLogic as string)
}

export function generateWindowInstance(jsCode: string): DOMWindow {
  const { window } = new JSDOM(`<!DOCTYPE html><script>${jsCode}</script>`, {
    runScripts: 'dangerously',
  })
  return window
}

export function extractOcpApimSubscriptionKeyConcatLogic(
  obfuscatedJsCode: string,
): string | null {
  const reg = /'Ocp-Apim-Subscription-Key':([\s\S]+?)[,|\}]/
  const matched = reg.exec(obfuscatedJsCode)
  if (!matched) {
    return null
  }
  return matched[1].trim()
}
