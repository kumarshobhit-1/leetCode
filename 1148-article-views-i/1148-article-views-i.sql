SELECT DISTINCT author_id AS id # return author id, name column to id. don't return duplicates
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id ASC; 