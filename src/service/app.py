from flask import Flask, request, jsonify
from flask_cors import CORS
from elastic_index import Index
from postgres_handler import Db
import os


app = Flask(__name__, static_folder='browser', static_url_path='')

CORS(app)

# config = {
#     "url" : "sport-elastic",
#     "port" : "9200",
#     "doc_type" : "sport"
# }

config = {
    "url" : os.getenv("ES_URI", "http://localhost"),
    "port" : os.getenv("ES_PORT ", "9200"),
    "doc_type" : "sport"
}

index = Index(config)
db = Db()

@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    return response

@app.route('/', methods=['GET', 'POST'])
@app.route('/search')
@app.route('/literatuur')
@app.route('/colofon')
@app.route('/gymnastiek')
@app.route('/hockey')
@app.route('/korfbal')
@app.route('/schaken')
@app.route('/tennis')
@app.route('/voetbal')
@app.route('/inleiding')
@app.route('/database')
def catch_all():
    return app.send_static_file("index.html")

@app.route('/detail/<id>')
def detail(id):
    return app.send_static_file("index.html")

@app.route("/facet", methods=['POST', 'GET'])
def get_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return jsonify(ret_struc)


@app.route("/browse",  methods=['POST', 'GET'])
def browse():
    struc = request.get_json()
    ret_struc = index.browse(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)



# @app.get('/typeinfo')
# def typeinfo():
#     if not request.values.get('url'):
#         return 'No url specified', 400
#
#     url = request.values.get('url')
#     try:
#         res = requests.head(url, allow_redirects=True)
#         return jsonify(ok=res.ok,
#                        url=url,
#                        content_type=res.headers['content-type'] if res.ok else None)
#     except:
#         return jsonify(ok=False, url=url, content_type=None)



@app.route('/sport', methods=['GET'])
def get_sport():
    rec = request.args.get("rec")
    return jsonify(db.detail(rec))

#Start main program

if __name__ == '__main__':
    app.run()

