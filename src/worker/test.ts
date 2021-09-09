const worker: Worker = self as any

worker.addEventListener('message', (event) => {
    console.log('worker Received:', event.data)
    worker.postMessage({ result: event.data })
})