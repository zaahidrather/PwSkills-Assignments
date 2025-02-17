# **API Documentation**

## **Base URL**:

`http://localhost:port`

## **API endpoints :**

### 1. **/register**

**Description**:  
Registers a new user with email, password, and name.

**Request**:  
- **URL**: `/register`  
- **Method**: `POST`
- **Headers**:  
  - `Content-Type: application/json`
- **Body** (JSON):
```json
{
  "name": "John Doe",
  "email": "example@example.com",
  "password": "password123"
}
```

**Response**:

- **Success (201 Created)**:
```json
{
  "success": true,
  "message": "User created successfully"
}
```

- **Error Responses**:
  - **400 Bad Request** (missing or invalid input):
    ```json
    {
      "msg": "All input fields are required"
    }
    ```
  - **400 Bad Request** (duplicate email):
    ```json
    {
      "msg": "User already exists"
    }
    ```
  - **500 Internal Server Error** (failed to create user):
    ```json
    {
      "success": false,
      "message": "Internal Server Error"
    }
    ```

---

### 2. **/login**

**Description**:  
Logs in an existing user by validating email and password.

**Request**:  
- **URL**: `/login`  
- **Method**: `POST`
- **Headers**:  
  - `Content-Type: application/json`
- **Body** (JSON):
```json
{
  "email": "example@example.com",
  "password": "password123"
}
```

**Response**:

- **Success (200 OK)**:
```json
{
  "msg": "User login successfully"
}
```

- **Error Responses**:
  - **400 Bad Request** (missing input):
    ```json
    {
      "msg": "All input fields are required"
    }
    ```
  - **400 Bad Request** (email not found):
    ```json
    {
      "msg": "No account associated with this email"
    }
    ```
  - **400 Bad Request** (wrong password):
    ```json
    {
      "msg": "Password is wrong"
    }
    ```
  - **400 Bad Request** (general error):
    ```json
    {
      "successs": false,
      "message": "Error message"
    }
    ```

---

## **Error Handling**:
- **400 Bad Request**: When required fields are missing or input is invalid.
- **401 Unauthorized**: For authentication issues (e.g., incorrect credentials).
- **500 Internal Server Error**: For any unhandled server-side errors.  
  Example:
  ```json
  {
    "msg": "Internal server error"
  }
  ```

