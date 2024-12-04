# mongodb x angular x nestjs

A simple note taking app made with MAN stack.

## Setup the environment

### 1. Start MongoDB Docker container

Make sure Docker is running, and the MongoDB container has already been created. (Or start MongoDB locally or use MongoDB Atlas)

```bash
docker start mongo
```

### 2. Start NestJS Backend

This will start your NestJS server, typically available on http://localhost:3000.

```bash
npm run start
```

### 3. Start Angular Frontend

The Angular app will typically be available at http://localhost:4200.

```bash
ng serve
```

## **API Endpoints**

### Base URL:

`http://localhost:3000`

### **Endpoints**

| Method | Endpoint    | Description         | Payload                       |
| ------ | ----------- | ------------------- | ----------------------------- |
| POST   | `/note`     | Create a new note   | JSON body of the note         |
| GET    | `/note`     | Retrieve all notes  | N/A                           |
| PUT    | `/note/:id` | Update a note by ID | JSON body of the updated note |
| DELETE | `/note/:id` | Delete a note by ID | N/A                           |

---

### **Note Entity**

| Field | Type | Description | Example |  
|------------|----------|---------------------------------|------------------------------| |  
| `title` | `string` | Title of the note | `Meeting Notes` |  
| `description` | `string` | Content of the note | `Discuss project timelines.` |  
| `tag`| `string[]` | Categories of the note | `office, personal` |

---
