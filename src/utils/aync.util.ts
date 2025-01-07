
export const asyncRun = (asyncFn: any, that: any, ...args: any[]) => {
  void Promise.resolve().then(() => {
    try {
      const result = asyncFn.apply(that, ...args)
      if (result instanceof Promise) {
        result
          .then(() => {
            //
          })
          .catch(() => {
            //
          })
      }
    } catch (e) {
      //
    }
  })
}

