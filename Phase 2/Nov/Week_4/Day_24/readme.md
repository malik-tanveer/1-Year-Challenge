Here’s the **English version** of the **Day 24 README.md** file you asked for, bhai!  
Professional, clean, and explains everything we did in Day 24: how the model, controller, middleware, and overall Create Blog Post API work.

### `README.md` (English Version - Day 24)

```markdown
# Day 24 - Create Blog Post API 

Today we successfully built a fully functional **Create Blog Post API** in our Node.js + Express + MongoDB blog project. This API allows us to create a complete blog post with title, content, author, and an optional image!

## What We Accomplished Today

We created a complete **POST API** that:
- Accepts title, content, and author from the request body
- Handles image upload using Multer and saves it to the server
- Saves all data (including image filename) to MongoDB
- Returns the newly created blog post in the response

## API Details

### Endpoint
```
POST /api/blogs/create
```

### Request Format
`multipart/form-data` (required for file upload)

### Fields
| Field    | Type     | Description                  | Required |
|----------|----------|------------------------------|----------|
| title    | String   | Blog title                   | Yes      |
| content  | String   | Blog content/body            | Yes      |
| author   | String   | Name of the author           | Yes      |
| image    | File     | Blog feature image (optional) | No       |

### Example Request (via Form or Postman)
- title: "My First Full Blog Post"
- content: "Today we learned how to build a complete blog system in Node.js..."
- author: "Tanveer"
- image: Select any JPG/PNG file

## Success Response (201 Created)
```json
{
  "message": "Blog created successfully!",
  "blog": {
    "_id": "694f56c74b5cb2c1d3ca124c",
    "title": "My First Full Blog Post",
    "content": "Today we learned how to build...",
    "author": "Tanveer",
    "image": "/uploads/blog-1766807239272-786256678.png",
    "createdAt": "2025-12-27T03:47:19.281Z"
  }
}
```

## How It All Works Together

### 1. **Model** (`models/Blog.js`)
Defines the structure of a blog post in MongoDB:
```js
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});
```

### 2. **Middleware** (`middleware/upload.js`)
Uses **Multer** to:
- Save uploaded images to the `uploads/` folder
- Generate unique filenames
- Only allow image files (jpg, png, gif, webp)
- Limit file size to 5MB

```js
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});
export default upload;
```

### 3. **Controller** (`controllers/blogController.js`)
Handles the main logic:
- Extracts title, content, author from `req.body`
- Gets uploaded image filename from `req.file`
- Creates and saves a new Blog document
- Returns clean success response with full blog data

### 4. **Route** (`routes/blogRoutes.js`)
```js
router.post('/create', upload.single('image'), createBlog);
```
→ First runs multer middleware (handles image), then calls controller.

### 5. **Static Folder**
Images are served statically:
```js
app.use('/uploads', express.static('uploads'));
```
So images can be viewed at: `http://localhost:3000/uploads/filename.png`

## How to Test

1. Run the server: `node app.js` or `nodemon`
2. Open browser: `http://localhost:3000`
3. Fill the form and submit
4. Or use Postman/Thunder Client with form-data

## Result
- New document created in MongoDB `blogs` collection
- Image saved on server
- Full blog returned in JSON response


---
