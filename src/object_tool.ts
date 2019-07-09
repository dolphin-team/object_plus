Object.defineProperty(Object.prototype, 'isArray', {
  value: function () {
    return typeof this === 'object' && Object.prototype.toString.call(this) === '[object Array]'
  }
})

Object.defineProperty(Object.prototype, 'arrayLength', {
  value: function () {
    if (typeof this === 'object') {
      if (Object.prototype.toString.call(this) === '[object Array]') {
        return this.length
      }
    }
    return -1
  }
})

Object.defineProperty(Object.prototype, 'objectLength', {
  value: function () {
    if (typeof this === 'object') {
      if (Object.prototype.toString.call(this) === '[object Object]') {
        return Object.keys(this).length
      }
    }
    return -1
  }
})

Object.defineProperty(Object.prototype, 'getter', {
  value: function (path: string, options: any = {}) {
    const REG_KEY = /\[(['"_a-zA-Z0-9]*)\]|\./gi
    const pathArr = path.split(REG_KEY).filter(item => !!item)
    const result = pathArr.reduce(
      (result: any, currentPath: string, currentIndex: number): string => {
        if (!result.errorPath) {
          let key = currentPath.replace(/[\'\"]/gi, '')
          result.value = result.value[key]

          if (currentIndex !== pathArr.length - 1) {
            const currentValueType = Object.prototype.toString.call(result.value)
            if (/String|Number|Boolean|Null|Undefined/.test(currentValueType)) {
              result.errorPath = currentPath
            }
          }
        }
        return result
      },
      {
        value: this,
        errorPath: null
      }
    )

    if (options.errorCallback && 
      Object.prototype.toString.call(options.errorCallback) === '[object Function]'
    ) {
      options.errorCallback(result.errorPath, pathArr)
    }
    return result.value
  }
})

