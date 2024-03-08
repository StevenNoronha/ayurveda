import pandas as pd
import joblib

# Load the trained model and one-hot encoder
clf = joblib.load('decision_tree_model.joblib')

# Load new data
data = [1,3,1,1,1,1,1,1,5,3,2,3,2,2,2,2,3,2,3,3,1,2,2,1,1,1,1,1]
new_data = pd.read_csv('test.csv')
question_data = new_data.copy()
question_data.iloc[-1] = data
question_with_dummies = pd.get_dummies(data=question_data)
prediction_data = question_with_dummies.iloc[[0, -1]]
# Make predictions
y_pred = clf.predict(prediction_data)
print(y_pred[1])


