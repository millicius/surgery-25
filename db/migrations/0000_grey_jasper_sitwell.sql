CREATE TABLE IF NOT EXISTS "surgery" (
	"id" serial PRIMARY KEY NOT NULL,
	"urgent" text NOT NULL,
	"description" text NOT NULL,
	"prosthesis" boolean
);
