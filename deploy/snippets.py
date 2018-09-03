
from flask import Flask,redirect,render_template,request, Response
import logging, os
from google.appengine.ext import ndb

### Post/Get handling

app = Flask(__name__)

# Set up debug messages, when not in "real world" production mode
production_environment = os.getenv('SERVER_SOFTWARE').startswith('Google App Engine/')
if not production_environment:
    app.debug = True
    logging.info('debugging!')


@app.route('/snippet/new', methods=['POST'])
def addSnippet():
    new_snippet = Snippet(code=request.data)
    new_snippet_key = new_snippet.put()
    return str(new_snippet_key.id())

@app.route('/snippet/<snipid>', methods=['GET'])
def formresponse(snipid):
    snip = Snippet.get_by_id(long(snipid))
    return Response(snip.code, mimetype='text/coffeescript')

### NDB Storage
class Snippet(ndb.Model):
    timestamp = ndb.DateTimeProperty(auto_now_add=True) # timestamp. auto_now_add makes it so that the timestamp is automatically added when an instance is created.
    code = ndb.StringProperty()
