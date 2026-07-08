CREATE TABLE videos(
    id INTEGER,
    name TEXT,
    CREATED_AT DATE,
    published boolean
);







-- Do not modify below this line --
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_name = 'videos';
