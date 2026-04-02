# Spring Security Basic Authentication

A simple Spring Boot project demonstrating in-memory Basic Authentication.

## How to run

1. Ensure you have Java 17 and Maven installed on your system.
2. Clone this repository (if not already cloned).
3. Navigate to the project root directory.
4. Run the application using the Maven CLI:
   ```bash
   mvn spring-boot:run
   ```
5. The server will start on `http://localhost:8080`.

## Endpoints and Test Credentials

The application exposes two endpoints:

### 1. Public Endpoint (`/public`)
- **URL:** `http://localhost:8080/public`
- **Access:** Unrestricted. No login is required.

### 2. Secure Endpoint (`/secure`)
- **URL:** `http://localhost:8080/secure`
- **Access:** Requires Basic Authentication.

**Test Credentials:**
- **Username:** `user`
- **Password:** `password`
