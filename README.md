# Web Test Automation - Playwright

### General requirements

### Installation of the testing framework

#### **Clone the repository**

#### **Install dependencies.**

```bash
npm install
```

#### **Install Playwright.**

```bash
npm install -g playwright
```

#### **Install libraries for working with browsers.**

```bash
playwright install
```

#### **To run the tests go to the root of the project and run (headless mode)**

```bash
npm run test
```

#### **To open Playwright's unified Html report of test results**

```bash
npm run play-report
```

#### **IMPORTANT**

After each upgrade of **Playwright**, the project must be restarted locally with the command:

```bash
npm run reinstall
```

To download the latest versions of the Browsers.

# Trigger GitHub Actions Workflow

To manually trigger a GitHub Actions workflow run, you can use cURL with the GitHub API. Follow the steps below:

1. Copy and paste the following cURL command into your terminal:

    ```bash
    curl -H "Accept: application/vnd.github.everest-preview+json" \
        -H "Authorization: token YOUR_PERSONAL_ACCESS_TOKEN" \
        --request POST \
        --data '{"event_type": "run"}' \
        https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/dispatches
    ```

   Make sure to replace `YOUR_PERSONAL_ACCESS_TOKEN` with your GitHub personal access token and `YOUR_USERNAME/YOUR_REPOSITORY` with your GitHub username and repository name.

2. Execute the cURL command in your terminal.

This command will trigger a GitHub Actions workflow run for the specified repository.
