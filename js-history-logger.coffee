class HistoryLogger
  @_storageOn = 'history-logger-is-running'

  @_storageData = 'history-logger-data'

  @_data = =>
    $.localStorage(@_storageData) || []

  @isOn = =>
    $.localStorage(@_storageOn) == true

  @on = =>
    $.localStorage(@_storageOn, true)

  @off = =>
    $.localStorage(@_storageOn, false)

  @push = (data) =>
    temp = @_data()
    temp.push(data)
    $.localStorage(@_storageData, temp)

  @log = (message) =>
    return false unless @isOn

    now = new Date()
    date = now.toDateString()
    time = now.toTimeString().split(" ")[0]
    datetime = "#{date} #{time}"

    console.log("#{datetime} - #{message}")

    json =
      message: message
      datetime: datetime

    @push(json)

  @clear = =>
    $.localStorage(@_storageData, [])

  @listAll = =>
    temp = @_data()

    for dict in temp
      console.log("#{dict['datetime']} - #{dict['message']}")

  @list = (n) =>
    temp = @_data()
    length = temp.length
    first = 0
    first = length - n if length - n >= 0

    temp = temp[first..]

    for dict in temp
      console.log("#{dict['datetime']} - #{dict['message']}")