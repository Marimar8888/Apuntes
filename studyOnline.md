### 1. Tabla de Usuarios (Users)
Para gestionar el registro y logueo de los usuarios.

```sql
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('registered', 'client', 'professor', 'superadmin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Tabla de Clientes (Clients)
Para almacenar datos específicos de clientes.

```sql
CREATE TABLE Clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
```
### 3. Tabla de datos facturación (BillingAddresses)
```sql
CREATE TABLE BillingAddresses (
    billing_address_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    company_name VARCHAR(100),
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    province_id INT,
    postal_code VARCHAR(20),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id) ON DELETE CASCADE,
    FOREIGN KEY (province_id) REFERENCES Provinces(province_id),
    FOREIGN KEY (postal_code) REFERENCES PostalCodes(postal_code)
);
```

### 4. Tabla de Provincias (Provinces)
Para almacenar provincias de España.

```sql
CREATE TABLE Provinces (
    province_id INT AUTO_INCREMENT PRIMARY KEY,
    province_name VARCHAR(100) UNIQUE NOT NULL
);
```

### 5. Tabla de Códigos Postales (PostalCodes)
Para almacenar códigos postales.

```sql
CREATE TABLE PostalCodes (
    postal_code VARCHAR(20) PRIMARY KEY,
    city VARCHAR(100),
    province_id INT,
    FOREIGN KEY (province_id) REFERENCES Provinces(province_id)
);
```

### 6. Tabla de Cursos (Courses)
Para almacenar información sobre los cursos.

```sql
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    professor_id INT NOT NULL,
    center_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (professor_id) REFERENCES Professors(professor_id),
    FOREIGN KEY (center_id) REFERENCES StudyCenters(center_id)
);
```
### 7. Tabla de Usuarios (UserCourses)
Para almacenar información sobre los cursos.

```sql
CREATE TABLE UserCourses (
    user_course_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);
```

### 8. Tabla de Lecciones (Lessons)
Para almacenar información sobre los lecciones.

```sql
CREATE TABLE Lessons (
    lesson_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    video_url VARCHAR(255),
    document_url VARCHAR(255),
    is_approved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);
```
### 9. Tabla de relacion usuario y Lecciones (Lessons)
Para almacenar información sobre los lecciones.

```sql
CREATE TABLE UserLessons (
    user_lesson_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    lesson_id INT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    completion_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES Lessons(lesson_id) ON DELETE CASCADE
);
```

### 8. Tabla de Pruebas (AssessmentTypes)

```sql
CREATE TABLE AssessmentTypes (
    assessment_type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name ENUM('text', 'document', 'file', 'text_answer') NOT NULL
);

CREATE TABLE Assessments (
    assessment_id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT NOT NULL,
    assessment_type_id INT NOT NULL,
    details TEXT,
    FOREIGN KEY (lesson_id) REFERENCES Lessons(lesson_id) ON DELETE CASCADE,
    FOREIGN KEY (assessment_type_id) REFERENCES AssessmentTypes(assessment_type_id)
);
```
### 8. Tabla de respuestas a las pruebas (AssessmentTypes)

```sql
CREATE TABLE AssessmentResponses (
    response_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    assessment_id INT NOT NULL,
    response_text TEXT,
    document_url VARCHAR(255),
    file_url VARCHAR(255),
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (assessment_id) REFERENCES Assessments(assessment_id) ON DELETE CASCADE
);
```

### 8. Tabla de Pruebas (AssessmentTypes)

```sql

### 7. Tabla de Centros (StudyCenters)
Para almacenar información sobre los profesores.

```sql
CREATE TABLE StudyCenters (
    center_id INT AUTO_INCREMENT PRIMARY KEY,
    center_name VARCHAR(255) NOT NULL,
    center_description TEXT,
    center_address VARCHAR(255),
    center_city VARCHAR(100),
    center_province_id INT,
    center_postal_code VARCHAR(20),
    FOREIGN KEY (center_province_id) REFERENCES Provinces(province_id),
    FOREIGN KEY (center_postal_code) REFERENCES PostalCodes(postal_code)
);
```

### 8. Tabla de Profesores (Professors)
Para almacenar información sobre los profesores.

```sql
CREATE TABLE Professors (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    center_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (center_id) REFERENCES StudyCenters(center_id) ON DELETE CASCADE,
    bio TEXT,
    profile_picture VARCHAR(255)
);
```

### 7. Tabla de Roles (Roles)
Para definir los roles disponibles en el sistema. 

```sql
CREATE TABLE Roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name ENUM('registered', 'client', 'professor', 'superadmin') UNIQUE NOT NULL
);
```

### 8. Tabla de Favoritos de Profesores (ProfessorFavorites)
Para almacenar los profesores favoritos de los usuarios.

```sql
CREATE TABLE ProfessorFavorites (
    user_id INT,
    professor_id INT,
    PRIMARY KEY (user_id, professor_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (professor_id) REFERENCES Professors(professor_id) ON DELETE CASCADE
);
```

### 9. Tabla de Favoritos de Cursos (CourseFavorites)
Para almacenar los cursos favoritos de los usuarios.

```sql
CREATE TABLE CourseFavorites (
    user_id INT,
    course_id INT,
    PRIMARY KEY (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);
```

### 10. Tabla de Comentarios (Comments)
Para almacenar comentarios y opiniones sobre cursos y profesores.

```sql
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT,
    professor_id INT,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE SET NULL,
    FOREIGN KEY (professor_id) REFERENCES Professors(professor_id) ON DELETE SET NULL
);
```

### 11. Tabla de Calificaciones (Ratings)
Para almacenar calificaciones de cursos del 1 al 5.

```sql
CREATE TABLE Ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);
```

### 12. Tabla de Transacciones (Transactions)
Para controlar el proceso de pagos.

```sql
CREATE TABLE Transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    course_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'completed', 'failed') NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES Clients(client_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

### 13. Tabla de Pagos (Payments)
Para almacenar detalles del proceso de pago.

```sql
CREATE TABLE Payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_id INT NOT NULL,
    payment_method ENUM('credit_card', 'paypal', 'bank_transfer') NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (transaction_id) REFERENCES Transactions(transaction_id) ON DELETE CASCADE
);
```

### Resumen de Relaciones
- **Users** tiene un rol (superadmin, profesor, cliente, registrado) y puede tener una o más filas en **Clients**.
- **Clients** tiene una dirección de facturación asociada con **Provinces** y **PostalCodes**.
- **Professors** se vincula con **Users** y pueden tener uno o más cursos en **Courses**.
- **Courses** y **Professors** están relacionados a través de la clave foránea en **Courses**.
- **ProfessorFavorites** y **CourseFavorites** gestionan los favoritos de los usuarios.
- **Comments** pueden estar asociados a **Courses** o **Professors**.
- **Ratings** asignan una calificación a **Courses**.
- **Transactions** y **Payments** manejan el proceso de pago y su estado.

Este esquema proporciona una base sólida para desarrollar tu API en Python. Puedes ajustar los detalles según tus necesidades específicas y los requisitos de implementación.


VIDEO 59 MODULO 10 PARA ANIMACIÓN APARECER CONTENIDO NOMBRE: VIDEO Utilizing the React Animate Height NPM Package to Add Hover Animations
