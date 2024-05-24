from flask import Flask, request, jsonify
import json
from elastic_index import Index
from postgres_handler import Db
import requests
import os


app = Flask(__name__, static_folder='browser', static_url_path='')

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

@app.route('/', defaults={'path': ''}, methods=['GET', 'POST'])
@app.route('/<path>')
@app.route('/<path>/search')
@app.route('/<path>/detail')
@app.route('/<path>/literatuur')
@app.route('/<path>/colofon')
@app.route('/<path>/gymnastiek')
@app.route('/<path>/hockey')
@app.route('/<path>/korfbal')
@app.route('/<path>/schaken')
@app.route('/<path>/tennis')
@app.route('/<path>/voetbal')
@app.route('/<path>/inleiding')
@app.route('/<path>/database')
def catch_all(path):
    return app.send_static_file("index.html")


@app.post("/facet")
def get_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/nested-facet", methods=['GET'])
def get_nested_facet():
    facet = request.args.get("name")
    amount = request.args.get("amount")
    facet_filter = request.args.get("filter")
    ret_struc = index.get_nested_facet(facet + ".keyword", amount, facet_filter)
    return jsonify(ret_struc)

@app.route("/filter-facet", methods=['GET'])
def get_filter_facet():
    facet = request.args.get("name")
    amount = request.args.get("amount")
    facet_filter = request.args.get("filter")
    ret_struc = index.get_filter_facet(facet + ".keyword", amount, facet_filter)
    return jsonify(ret_struc)

@app.post("/browse")
def browse():
    struc = request.get_json()
    #ret_struc = index.browse(struc["page"], struc["page_length"], struc["sortorder"] + ".keyword", struc["searchvalues"])
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



@app.get('/sport')
def get_sport():
    rec = request.args.get("rec")
    return jsonify(db.detail(rec))

#Start main program

if __name__ == '__main__':
    app.run()

