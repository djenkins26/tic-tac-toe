curl "https://tic-tac-toe-api-production.herokuapp.com" \
  --include \
  --request DELETE \

  --header "Authorization: Bearer ${TOKEN}" \

echo
