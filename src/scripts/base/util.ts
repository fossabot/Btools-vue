import Singleton from '@/scripts/base/singletonBase/Singleton'

export default class Util extends Singleton {
  private bvTool = {
    table: [...'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'],
    s: [11, 10, 3, 8, 4, 6],
    xor: 177451812,
    add: 8728348608
  }

  /**
   * AV号 转 BV号
   * @param av AV号
   * @param isLower 开头的 BV 是否小写，默认为 false
   * @returns BV 号
   */
  public av2bv(av: number, isLower = false): string {
    let num = NaN
    if (Object.prototype.toString.call(av) === '[object Number]') {
      num = av
    } else if (Object.prototype.toString.call(av) === '[object String]') {
      num = parseInt(av.toString().replace(/[^0-9]/gu, ''))
    }
    if (isNaN(num) || num <= 0) {
      throw new Error('¿你在想桃子?')
    }

    num = (num ^ this.bvTool.xor) + this.bvTool.add
    const result = [...`${isLower ? 'bv' : 'BV'}1  4 1 7  `]
    let i = 0
    while (i < 6) {
      result[this.bvTool.s[i]] =
        this.bvTool.table[Math.floor(num / 58 ** i) % 58]
      i += 1
    }
    return result.join('')
  }

  /**
   * BV号 转 AV号
   * @param bv AV号
   * @returns AV 号
   */
  public bv2av(bv: string): number {
    let str = ''
    if (bv.length === 12) {
      str = bv
    } else if (bv.length === 10) {
      str = `BV${bv}`
    } else if (bv.length === 9) {
      str = `BV1${bv}`
    } else {
      throw new Error('¿你在想桃子?')
    }
    if (
      !str.match(
        /[Bb][Vv][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/gu
      )
    ) {
      throw new Error('¿你在想桃子?')
    }

    let result = 0
    let i = 0
    while (i < 6) {
      result += this.bvTool.table.indexOf(str[this.bvTool.s[i]]) * 58 ** i
      i += 1
    }
    return (result - this.bvTool.add) ^ this.bvTool.xor
  }

  public getLogoSvg(color: string, className: string): string {
    return `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 579.25 616.13"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:${color};}.cls-4{clip-path:url(#clip-path-2);}</style><clipPath id="clip-path" transform="translate(-16 -88.67)"><rect class="cls-1" x="16" y="88" width="579.84" height="617.76"/></clipPath><clipPath id="clip-path-2" transform="translate(-16 -88.67)"><rect class="cls-1" x="156.89" y="330.23" width="298.11" height="236.52"/></clipPath></defs><title>Btools</title><g class="cls-2"><path class="cls-3" d="M231.62,234.68q-21-11.38-42-22.87l-69.77-37.95c-9.44-5.15-13.33-13-8-22.76s14.31-10.52,23.55-5.45C189.88,175.32,244.47,204.9,298.86,235c13.92,7.69,39,3.11,47.87-9.92Q388.48,164.46,430,103.8c1-1.45,1.94-2.91,2.91-4.28,7.89-11,16.94-13.91,25.11-7.49,9.44,7.49,7.88,16.35,1.75,25.3-11.28,16.45-22.57,33-33.76,49.43-15.57,22.87-31.14,45.73-48.56,71.13H573.55c18.29,0,21.11,2.92,21.21,21.21q.3,188.14.49,376.18c0,17.9-3.21,21-21.5,21.11-4.77,0-9.64.49-14.31-.09-17.32-1.95-30-.3-36,21.11-5.45,19.27-26,29.09-44.47,27.15-21.41-2.24-35.51-14.89-41-34.84-3.31-12.06-9-13.72-19.85-13.62-75.22.49-150.34.29-225.56.1-8.66,0-13.71.77-16.25,11.29-5.44,22.57-24,36.87-44.56,37.26-21.31.39-39.79-13.52-46-37-2.63-9.83-7-12.07-16.06-11.58-11.67.68-23.45.29-35.22.1C21.64,656,16,650.75,16,638.2q.15-191.21.58-382.6c0-13.23,5.35-17.61,20.05-17.61q90.63-.15,181.18,0h12.65c.39-1.07.77-2.14,1.16-3.31Zm334,392.23V266.5H46.94V626.91ZM148.92,657.27H113.21c2.43,10.22,7.39,17.42,16.93,18,10.6.78,15.66-7.1,18.78-18Zm315.55-.1c3.6,10.9,8.47,18.88,19.17,18.1,9.63-.68,14.11-8.17,17-18.1Zm0,0" transform="translate(-16 -88.67)"/></g><path class="cls-3" d="M306.74,602.1H98.22c-20.24,0-23.45-3.21-23.45-23.45q.15-130.78.39-261.65c0-18.39,3.8-22.19,22.09-22.19H515.66c18.58,0,22.37,3.7,22.47,21.9q.43,131.51.59,262.91c0,18.78-3.9,22.38-23.26,22.48Zm200.54-30.85V326H105.81v245.3Zm0,0" transform="translate(-16 -88.67)"/><path class="cls-3" d="M226.57,378.4" transform="translate(-16 -88.67)"/><g class="cls-4"><path class="cls-3" d="M329.69,463.19h-9.14a9.94,9.94,0,0,1-8.92-6.57l-4.75-11.51a9.91,9.91,0,0,1,1.62-10.93L315,427.7a6,6,0,0,0,0-8.47l-11-11a6,6,0,0,0-8.46,0L289,414.72a9.87,9.87,0,0,1-10.93,1.62l-11.51-4.74a10,10,0,0,1-6.57-8.92v-9.15a6,6,0,0,0-6-6H238.48a6,6,0,0,0-6,6v9.15a9.94,9.94,0,0,1-6.56,8.92l-11.52,4.74a9.82,9.82,0,0,1-10.91-1.62L197,408.24a6,6,0,0,0-8.46,0l-11,11a6,6,0,0,0,0,8.46l6.48,6.49a9.84,9.84,0,0,1,1.62,10.93l-4.74,11.52A9.94,9.94,0,0,1,172,463.2h-9.15a6,6,0,0,0-6,6v15.54a6,6,0,0,0,6,6H172a10,10,0,0,1,8.91,6.57l4.75,11.52A9.88,9.88,0,0,1,184,519.74l-6.49,6.48a6,6,0,0,0,0,8.48l11,11a6,6,0,0,0,8.46,0l6.5-6.48a9.77,9.77,0,0,1,10.89-1.6l11.55,4.74a9.94,9.94,0,0,1,6.56,8.92v9.12a6,6,0,0,0,6,6H254a6,6,0,0,0,6-6v-9.12a10,10,0,0,1,6.56-8.92l11.53-4.74a9.85,9.85,0,0,1,10.94,1.6l6.46,6.47a6,6,0,0,0,8.47,0l11-11a6,6,0,0,0,0-8.47l-6.49-6.48a9.9,9.9,0,0,1-1.62-10.93l4.75-11.52a10,10,0,0,1,8.92-6.56h9.14a6,6,0,0,0,6-6V469.19a6,6,0,0,0-6-6Zm-83.41,48.14A34.39,34.39,0,1,1,280.67,477a34.37,34.37,0,0,1-34.39,34.38ZM453.34,386.7a4.32,4.32,0,0,0-3.06-1.27h-6.63a7.21,7.21,0,0,1-6.46-4.76l-3.44-8.35a7.16,7.16,0,0,1,1.17-7.91l4.7-4.7a4.28,4.28,0,0,0,1.28-3.06,4.35,4.35,0,0,0-1.28-3.08l-8-8a4.33,4.33,0,0,0-6.13,0l-4.71,4.7a7.13,7.13,0,0,1-7.92,1.17l-8.33-3.43a7.22,7.22,0,0,1-4.76-6.47V335a4.34,4.34,0,0,0-4.34-4.34H384.2a4.34,4.34,0,0,0-4.34,4.34v6.63a7.2,7.2,0,0,1-4.75,6.47l-8.35,3.43a7.12,7.12,0,0,1-7.91-1.17l-4.72-4.7a4.36,4.36,0,0,0-6.13,0l-8,8a4.4,4.4,0,0,0-1.27,3.07A4.31,4.31,0,0,0,340,359.7l4.7,4.71a7.12,7.12,0,0,1,1.17,7.91l-3.44,8.35a7.19,7.19,0,0,1-6.46,4.76h-6.63a4.28,4.28,0,0,0-3.06,1.27,4.33,4.33,0,0,0-1.28,3.07V401a4.35,4.35,0,0,0,4.34,4.34H336a7.22,7.22,0,0,1,6.46,4.76l3.44,8.34a7.18,7.18,0,0,1-1.17,7.93L340,431.09a4.35,4.35,0,0,0,0,6.14l8,8a4.36,4.36,0,0,0,6.13,0l4.71-4.7a7.07,7.07,0,0,1,7.89-1.16l8.36,3.44a7.19,7.19,0,0,1,4.76,6.46v6.61a4.34,4.34,0,0,0,4.34,4.33h11.26a4.34,4.34,0,0,0,4.34-4.33v-6.61a7.21,7.21,0,0,1,4.76-6.46l8.35-3.44a7.12,7.12,0,0,1,7.92,1.16l4.68,4.69a4.33,4.33,0,0,0,6.14,0l8-8a4.32,4.32,0,0,0,0-6.14l-4.7-4.69a7.17,7.17,0,0,1-1.17-7.92l3.44-8.35a7.22,7.22,0,0,1,6.46-4.75h6.63a4.35,4.35,0,0,0,4.33-4.34V389.77a4.32,4.32,0,0,0-1.27-3.07Zm-63.49,33.6a24.91,24.91,0,1,1,24.91-24.91,24.9,24.9,0,0,1-24.91,24.91Zm0,0" transform="translate(-16 -88.67)"/></g></svg>`
  }

  public getElement(selector: string): Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
      let timeout = 20
      const timer = setInterval(() => {
        const element: HTMLElement | null = document.querySelector(selector)

        // 成功获取
        if (element !== null) {
          resolve(element)
          clearInterval(timer)
        }

        // timeout
        if (timeout === 0) {
          reject(new Error('Empty Element'))
          clearInterval(timer)
        }

        timeout--
      }, 500)
    })
  }

  /**
   * 获取页面上的元素，10秒内如果没获取到则停止获取
   * @param selector 选择器
   */
  public getElements(selector: string): Promise<NodeListOf<HTMLElement>> {
    return new Promise((resolve, reject) => {
      let timeout = 20
      const timer = setInterval(() => {
        const elements: NodeListOf<HTMLElement> | null =
          document.querySelectorAll(selector)

        // 成功获取
        if (elements.length !== 0) {
          resolve(elements)
          clearInterval(timer)
        }

        // timeout
        if (timeout === 0) {
          reject(new Error('Empty Element'))
          clearInterval(timer)
        }

        timeout--
      }, 500)
    })
  }

  public random(length = 8, type?: string): string {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (typeof type !== 'undefined') {
      switch (type) {
        case 'string':
          chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          break

        case 'number':
          chars = '0123456789'
          break

        default:
          break
      }
    }

    let result = ''

    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }

    return result
  }

  public inNodeList(
    element: HTMLElement,
    nodeList: NodeListOf<HTMLElement>
  ): number {
    let result = -1

    nodeList.forEach((nodeItem, index) => {
      if (element === nodeItem) {
        result = index
        return false
      }
    })

    return result
  }

  public position(element: HTMLElement, x: number, y: number) {
    element.style.top = y + 'px'
    element.style.left = x + 'px'
  }

  public console(
    message: any,
    type?: 'success' | 'waring' | 'error',
    prefix = 'Btools'
  ) {
    let css: string

    switch (type) {
      case 'success':
        prefix += ' Success:'
        css =
          'background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);'
        break
      case 'waring':
        prefix += ' Waring:'
        css =
          'background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);'
        break

      case 'error':
        prefix += ' Error:'
        css =
          'background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);'
        break

      default:
        prefix += ' Info:'
        css =
          'background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; background-blend-mode: multiply,multiply;'
    }

    css += 'color: #FFF; padding: 2px 3px; border-radius: 3px;'

    console.log('%c' + prefix, css, message)
  }
}
