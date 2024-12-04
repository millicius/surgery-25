CREATE TABLE IF NOT EXISTS "surgery" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"urgent" text NOT NULL,
	"ep" boolean DEFAULT false
);
