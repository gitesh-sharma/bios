# InfinityFree deployment

1. Create the MySQL database in InfinityFree.
2. Import `database/schema.sql` with phpMyAdmin.
3. Upload the production PHP application to the domain document root.
4. Create `config/database.php` on the server from `config/database.example.php`.
5. Enter the real database credentials only on the server.
6. Enable HTTPS.
7. Test guest shortening, account registration, custom aliases, analytics and Link-in-Bio.

Never commit database credentials to GitHub.
