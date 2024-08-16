
# 📓 PadhaiKarle - A Note Sharing Website

PadhaiKarle is a community-driven notes-sharing platform designed for college students. Inspired by [AncoreNotes](https://github.com/ancoreraj/NotesPuker), this app allows students to upload, download, and share study materials seamlessly. With a modern tech stack and robust features, it's the perfect solution for facilitating academic collaboration.

## 🚀 Features
- **User Authentication:** Secure login via Google authentication.
- **Note Upload/Download:** Students can upload notes and download them by selecting their branch and semester.
- **Top Contributors:** A section that highlights the most active contributors.
- **Search & Filter:** Easily find notes by filtering through branches and semesters.
- **Responsive Design:** Optimized for both desktop and mobile viewing.

## 🛠️ Tech Stack
- **Web Framework:** [Next.js](https://nextjs.org/)
- **UI Design:** [TailwindCSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), and [Magic UI](https://magicui.design/)
- **Database:** [Drizzle ORM](https://orm.drizzle.team/) + [PostgresQL](https://www.postgresql.org/)
- **Authentication:** [Lucia](https://lucia-auth.com/)

## ⚙️ Setup and Development

To set up the project locally, follow these steps:

### 1. Clone the Repository
``` bash
git clone https://github.com/your-username/PadhaiKarle.git
cd PadhaiKarle
```
### 2. Install Dependencies
You can use your preferred JavaScript package manager to install the necessary dependencies. If you're using \`bun\`, you can install them with:
```bash
bun install
```
### 3. Configure Environment Variables
Create a \`.env.local\` file in the root directory of your project and populate it with the following environment variables:

```
env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<your-db>"
LUCIA_AUTH_URL="http://localhost:3000"

```

GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
```
Replace \`<user>\`, \`<password>\`, \`<your-db>\`, \`<your_google_client_id>\`, and \`<your_google_client_secret>\` with your actual database credentials and Google API keys.
```

### 4. Set Up the Database
Run the following command to set up your database schema:
```bash
bun run db:push
```
### 5. Start the Development Server
To start the development server, run:
```
bash
bun dev
```

The app will be available at \`http://localhost:3000\`.

## 📝 Project Structure
Here's a brief overview of the project's structure:

- **\`/pages\`**: Contains the main routes of the application.
- **\`/components\`**: Reusable UI components used across different pages.
- **\`/styles\`**: Global and component-specific styles.
- **\`/lib\`**: Utility functions and configurations, including database connections and authentication logic.
- **\`/public\`**: Static assets like images and icons.
- **\`/drizzle\`**: ORM configurations and database models.

![Landing Page](https://github.com/DeshDeepakKant/study-material/blob/main/Screenshot%20from%202024-08-17%2000-19-22.png)

![Choose Branch](https://github.com/DeshDeepakKant/study-material/blob/main/Screenshot%20from%202024-08-17%2000-19-45.png)

![Choose Semester](https://github.com/DeshDeepakKant/study-material/blob/main/Screenshot%20from%202024-08-17%2000-19-51.png)

![Dashboard](https://github.com/DeshDeepakKant/study-material/blob/main/Screenshot%20from%202024-08-17%2000-20-11.png)

## 🛡️ Security and Best Practices
- **Environment Variables:** Sensitive information like API keys and database credentials are stored in environment variables to avoid accidental exposure.
- **Authentication:** Implemented using Lucia, ensuring secure and scalable user authentication.
- **Input Validation:** Proper validation is implemented to prevent SQL injection and other common vulnerabilities.

## 📚 Resources and Documentation
For more detailed information about the tools and technologies used, refer to their official documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
- [Lucia Documentation](https://lucia-auth.com/docs)

## 👥 Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch: \`git checkout -b feature/your-feature-name\`.
3. Make your changes and commit them: \`git commit -m 'Add some feature'\`.
4. Push to the branch: \`git push origin feature/your-feature-name\`.
5. Open a pull request.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✉️ Contact
If you have any questions or feedback, feel free to reach out to me at [deshdeepakkant@gmail.com](mailto:deshdeepakkant@gmail.com).
