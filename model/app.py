from flask import Flask, request, jsonify
import pandas as pd
import joblib


app = Flask(__name__)

# Sample ML model function for demonstration
def predict(data):
    clf = joblib.load('decision_tree_model.joblib')
    new_data = pd.read_csv('test.csv')
    question_data = new_data.copy()
    question_data.iloc[-1] = data
    question_with_dummies = pd.get_dummies(data=question_data)
    prediction_data = question_with_dummies.iloc[[0, -1]]
    y_pred = clf.predict(prediction_data)
    print(y_pred)
    string = str(y_pred[1])

    with open('store.csv', 'a') as f:
        int_data = [str(value) for value in data]
        f.write(','.join(map(str, int_data)) + ',' + string + '\n')

    return {'predicted_label': string}


@app.route('/predict', methods=['POST'])
def predict_endpoint():
    data = request.json  # Assuming data is sent in JSON format
    vals = [str(value) for value in data.values()]
    prediction = predict(vals)  # Make predictions using the model
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
