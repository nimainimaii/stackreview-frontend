import status from 'statuses'

const DEFAULT_STATUS = 500
const DEFAULT_MESSAGE = status(DEFAULT_STATUS)

export const sendError = (res, code, body) => {
  try {
    body
      ? res.status(code).json(body)
      : res.status(code).send(status(code)) // default message
  } catch (e) {
    res.status(DEFAULT_STATUS).send(DEFAULT_MESSAGE)
  }
}
