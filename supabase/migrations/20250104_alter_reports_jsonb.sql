-- Alter reports table to use JSONB for content
-- First, we need to handle existing data. If it's valid JSON text, cast it. If not, wrap it in a JSON object.

-- Step 1: Add a temporary column
ALTER TABLE reports ADD COLUMN content_jsonb JSONB;

-- Step 2: Migrate data (attempting to parse, falling back to wrapping)
UPDATE reports 
SET content_jsonb = 
  CASE 
    WHEN content::text ~ '^\{.*\}$' THEN content::jsonb 
    ELSE jsonb_build_object('text', content) 
  END;

-- Step 3: Drop old column and rename new one
ALTER TABLE reports DROP COLUMN content;
ALTER TABLE reports RENAME COLUMN content_jsonb TO content;

-- Step 4: Add constraint to ensure it's not null (optional, based on previous schema)
ALTER TABLE reports ALTER COLUMN content SET NOT NULL;
