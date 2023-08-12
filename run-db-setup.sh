source .env
psql $DB_URL -f ./database/setup.sql