## Crivitz Documentation
### Version 1.0

### Introduction
Crivitz Documentation serves as a comprehensive guide for understanding and utilizing the Crivitz web application—a platform designed to streamline assignment management for various university courses, particularly those in technical fields like programming, offered at ASU. This documentation provides detailed instructions on how to use Crivitz effectively, covering its features, usage, and additional functionalities.

### Features
#### Assignment Management
- **New Assignments:** Create assignments with title, description, and visibility settings.
- **Visibility Settings:** Choose visibility options for assignments.
- **Deadline Management:** Set deadlines for assignments.
- **Validation Options:** Enforce specific requirements for submissions.
- **Late Submission:** Allow late submissions if necessary.
- **Finalization of Submissions:** Choose whether submissions are final.

#### Question Creation
- **Question Management:** Add various types of questions to assignments.
- **Question Types:** Support for File upload, YouTube URL submission, Multiple Choice, and Critique questions.
- **Ordering of Questions:** Arrange the order of questions within assignments.

#### Critique Assignments
- **Assignment Selection:** Choose assignments for critique.
- **Student Selection:** Specify students for critique.
- **Number of Assignments:** Define the number of assignments each student should critique.
- **Ranking Critiques:** Enable ranking of critiques based on predefined parameters.

### Usage
#### Creating Assignments
1. Navigate to the "New Assignments" section.
2. Fill out the form with assignment details.
3. Set visibility, deadlines, validation, and late submission options.
4. Finalize and create the assignment.

#### Adding Questions
1. Within assignment creation, navigate to the questions section.
2. Click on "Add Question" and specify question details.

#### Managing Critique Assignments
- Select assignments for critique.
- Choose students for critique.
- Define the number of critiques per student.
- Set parameters for ranking critiques.

### Additional Functionality
- **Visibility Settings**
- **Deadline Management**
- **Validation Options**
- **Late Submission**
- **Finalization of Submissions**

### Running the Test App
To test Crivitz Documentation, follow these steps:
1. Clone the Crivitz Documentation repository from [GitHub](https://github.com/jmarovi/CrivitzDocs).
2. Navigate to the cloned directory.
3. Install dependencies using `pnpm install`.
4. Initiate the test app with `pnpm vitepress dev docs`.
5. Access the provided address and port in your browser.

### Conclusion
Crivitz offers a comprehensive solution for assignment management, enhancing the teaching and learning experience at academic institutions like ASU. Its intuitive interface and robust functionality make it an invaluable tool for both teachers and students alike.


To include information about Vitepress in your README, you can add a section that explains how the documentation website is generated and any relevant details about its usage. Here's an example of how you can structure this section:

```markdown
## Documentation Website

The Crivitz Documentation website is generated using Vitepress, a static site generator built on top of Vite, a modern build tool for JavaScript applications. Vitepress allows for easy creation of documentation websites using Markdown and Vue components.

### Generating the Documentation Site

To generate the documentation site locally or for deployment, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/jmarovi/CrivitzDocs.git
   ```

2. **Navigate to the Repository:**
   ```
   cd CrivitzDocs
   ```

3. **Install Dependencies:**
   ```
   pnpm install
   ```

4. **Run Vitepress:**
   ```
   pnpm run dev
   ```

5. **Access the Documentation Site:**
   Once Vitepress has successfully compiled the documentation site, you can access it in your web browser at the provided address (typically http://localhost:3000).

### Contributing to Documentation

To contribute to the documentation, you can edit the Markdown files located in the `docs` directory. After making changes, commit your changes to a new branch and create a pull request for review.

For more information on Vitepress, refer to the [official documentation](https://vitepress.vuejs.org/).
```

This section provides clear instructions on how to generate and access the documentation website using Vitepress, as well as guidance on how to contribute to the documentation. Additionally, it includes a link to the official Vitepress documentation for further reference. Adjust the instructions as needed based on your specific setup and requirements.
