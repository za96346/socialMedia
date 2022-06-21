from flask import Flask, request, jsonify
from package.flask_cors import CORS, cross_origin
import package.jwt as jwt
from package.dotenv import load_dotenv
app = Flask(__name__)

@app.route('/login',methods=['POST'])
@cross_origin()
def login():
    data=request.get_json()
    print(data)
    return jsonify({'data':'everything is good'})


if __name__=='__main__':
    
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    app.run(port=5000,debug=True,host='0.0.0.0',threaded=True)
