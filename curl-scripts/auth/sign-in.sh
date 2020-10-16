curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json"  \
--data '{
  "credetials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'
