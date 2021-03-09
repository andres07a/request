const { ConnectionError, AxiosError } = require('./errors-types')
const {  ServerNotResponse, ModelError } = require('./errors-types')

const adapterConnectionError = (message, error) => { 
    const { message: reason } = error
    if(reason) throw new ConnectionError(`${message}: ${reason}}`)
    throw new ConnectionError(message)
}

const adapterAxiosError = (error) => {
    const { message } = error
    throw new AxiosError(message)
}

const adapterServerNotResponse = (error) => { 
    const { message } = error
    throw new ServerNotResponse(message)
}

const adapterModelError = (error) => {
    const { message } = error
    throw new ModelError(message)
}

module.exports = {
    adapterConnectionError,
    adapterAxiosError,
    adapterServerNotResponse,
    adapterModelError
}