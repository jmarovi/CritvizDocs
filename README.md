## CritvizDocs

### Overview of PNPM

PNPM serves as a robust package manager tailored for Node.js applications. Alongside npm and Yarn, PNPM facilitates streamlined management of dependency installation, updates, and removal within Node.js projects. Notably, PNPM distinguishes itself through its efficient disk space allocation and accelerated installation processes, attributed to its innovative dependency management technique known as "content-addressable storage." This methodology fosters dependency sharing across multiple projects, effectively minimizing redundancy and conserving disk space.

### Getting Started

To commence, adhere to the following steps:

1. **Cloning the Repository:**
   Begin by cloning the CritvizDocs repository from the designated GitHub repository. Execute the following command in your terminal:

   ```sh
   git clone https://github.com/jmarovi/CritvizDocs.git
   ```

2. **Installation of Dependencies:**
   Navigate to the cloned directory within your terminal environment and execute the subsequent command to install essential dependencies. It is imperative to ensure prior installation of Node.js and PNPM:

   ```sh
   pnpm install
   ```

3. **Application Initialization:**
   Once the dependencies have been successfully installed, initiate the application by executing the ensuing command:

   ```sh
   pnpm vitepress dev docs
   ```

### Testing

Upon execution of the initialization command, the terminal will promptly provide the address and port for conducting testing procedures.
