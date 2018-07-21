const defaultMessages = {
  unknown: 'Lỗi không xác định, xin hãy thử lại'
}
export default (messages, key) => {
  console.log('mapped messgage: ', messages[key])
  if (!messages[key]) return defaultMessages.unknown
  return messages[key]
}
