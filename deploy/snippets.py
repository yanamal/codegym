
from flask import Flask,redirect,render_template,request
import logging, os

app = Flask(__name__)

# Set up debug messages, when not in "real world" production mode
production_environment = os.getenv('SERVER_SOFTWARE').startswith('Google App Engine/')
if not production_environment:
    app.debug = True
    logging.info('debugging!')


@app.route('/snippet/new', methods=['POST'])
def addSnippet():
    logging.info(request.data)
    return request.data

'''
@app.route('/snippet', methods=['GET']')
def formresponse():
  return 'test'
'''
