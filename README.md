JS History Logger
=================

Store Logs in Local Storage or Cookies. Requires jQuery.local-storage.js

Basic Usage
-----------

~~~ coffee
# clear log history
HistoryLogger.clear()

HistoryLogger.log('A')
> Fri Aug 23 2013 15:23:45 - A

HistoryLogger.log('B')
> Fri Aug 23 2013 15:24:13 - B

HistoryLogger.log('C')
> Fri Aug 23 2013 15:25:46 - C

HistoryLogger.listAll()
> Fri Aug 23 2013 15:23:45 - A
> Fri Aug 23 2013 15:24:13 - B
> Fri Aug 23 2013 15:25:46 - C

# display last 2 logs
HistoryLogger.list(2)
> Fri Aug 23 2013 15:24:13 - B
> Fri Aug 23 2013 15:25:46 - C

# turn off logging
HistoryLogger.off()

# turn on logging
HistoryLogger.on()
~~~