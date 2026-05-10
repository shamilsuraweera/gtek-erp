CREATE DATABASE gtek_erp;
GO

CREATE LOGIN gtek_user WITH PASSWORD = 'StrongPassword123!';
GO

USE gtek_erp;
CREATE USER gtek_user FOR LOGIN gtek_user;
ALTER ROLE db_owner ADD MEMBER gtek_user;
GO
