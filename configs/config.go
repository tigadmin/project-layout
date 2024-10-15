// configs/config.go
package configs

import (
	"context"
	"log"
)

var DB *pgx.Conn

func InitDB() {
	var err error
	dbURL := "postgres://username:password@your-vultr-ip:5432/my_go_site" // Update with your connection details

	DB, err = pgx.Connect(context.Background(), dbURL)
	if err != nil {
		log.Fatal("Unable to connect to database:", err)
	}

	// Test the connection
	if err = DB.Ping(context.Background()); err != nil {
		log.Fatal("Unable to reach the database:", err)
	}
}
