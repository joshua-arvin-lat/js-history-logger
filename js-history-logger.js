var HistoryLogger;

HistoryLogger = (function() {
  var _this = this;

  function HistoryLogger() {}

  HistoryLogger._storageOn = 'history-logger-is-running';

  HistoryLogger._storageData = 'history-logger-data';

  HistoryLogger._data = function() {
    return $.localStorage(HistoryLogger._storageData) || [];
  };

  HistoryLogger.isOn = function() {
    return $.localStorage(HistoryLogger._storageOn) === true;
  };

  HistoryLogger.on = function() {
    return $.localStorage(HistoryLogger._storageOn, true);
  };

  HistoryLogger.off = function() {
    return $.localStorage(HistoryLogger._storageOn, false);
  };

  HistoryLogger.push = function(data) {
    var temp;
    temp = HistoryLogger._data();
    temp.push(data);
    return $.localStorage(HistoryLogger._storageData, temp);
  };

  HistoryLogger.log = function(message) {
    var date, datetime, json, now, time;
    if (!HistoryLogger.isOn()) {
      return false;
    }
    now = new Date();
    date = now.toDateString();
    time = now.toTimeString().split(" ")[0];
    datetime = "" + date + " " + time;
    console.log("" + datetime + " - " + message);
    json = {
      message: message,
      datetime: datetime
    };
    return HistoryLogger.push(json);
  };

  HistoryLogger.clear = function() {
    return $.localStorage(HistoryLogger._storageData, []);
  };

  HistoryLogger.listAll = function() {
    var dict, temp, _i, _len, _results;
    temp = HistoryLogger._data();
    _results = [];
    for (_i = 0, _len = temp.length; _i < _len; _i++) {
      dict = temp[_i];
      _results.push(console.log("" + dict['datetime'] + " - " + dict['message']));
    }
    return _results;
  };

  HistoryLogger.list = function(n) {
    var dict, first, length, temp, _i, _len, _results;
    temp = HistoryLogger._data();
    length = temp.length;
    first = 0;
    if (length - n >= 0) {
      first = length - n;
    }
    temp = temp.slice(first);
    _results = [];
    for (_i = 0, _len = temp.length; _i < _len; _i++) {
      dict = temp[_i];
      _results.push(console.log("" + dict['datetime'] + " - " + dict['message']));
    }
    return _results;
  };

  return HistoryLogger;

}).call(this);
