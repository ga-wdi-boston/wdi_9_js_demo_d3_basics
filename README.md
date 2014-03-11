# Charting with D3

To run the server which is needed to access the .tsv and .json files using JavaScript, run the following in your terminal:

    ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"

And then visit [localhost:8000](http://localhost:8000/)
