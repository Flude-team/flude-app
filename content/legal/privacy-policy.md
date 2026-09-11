# Privacy Policy

**Last Updated:** September 11, 2026

This Privacy Policy describes how Flude collects, uses, and handles your information when you use our free-tier technical documentation generation service.

## What Information We Collect

When you use Flude, we collect the following data:
- **Profile Information:** Your name and email address when you authenticate.
- **Job Metadata:** The URL of the repository you submit, the specific commit SHA (if provided), the CI platform you are using (GitHub, GitLab, or Bitbucket), your chosen output format and configuration options (such as strict mode or included/excluded paths), an identifier linking the job to your account, the execution status of the job, and associated timestamps.
- **Source Code:** Your repository's source code is processed during the execution of a documentation generation job.

## Why We Collect It

We collect this information solely to provide you with the Flude documentation generation service:
- **Authentication:** To identify you and secure your access to the service.
- **Service Execution:** To fetch your repository, compile the documentation, and return the result to you.
- **Operational Tracking:** To monitor the status and success of your generation jobs.

## Where It Is Stored and For How Long

Flude is designed to retain your data for the absolute minimum time required:

- **Source Code:** Your source code is processed strictly inside an isolated, single-use container. It is **never** saved or persisted anywhere after the completion of the generation job. It is **not** used to train any models.
- **Generated Documentation (Job Results):** The output of your generation job is temporarily stored in Google Cloud Storage. The download link (signed URL) provided to you is valid for only 12 hours. The physical file is automatically and permanently deleted by a lifecycle rule within 24–48 hours after creation.
- **Job Status (Metadata):** The metadata regarding your job (repository URL, execution status, and timestamps) is stored in Google Cloud Firestore. This record is automatically scheduled for deletion 7 days after creation via a Time-To-Live (TTL) policy. *Please note: Due to how Google Cloud Firestore's TTL mechanism operates, the actual physical deletion of the metadata record may take a short additional time (up to a few days) after the 7-day mark. This is standard system behavior, not a failure.*

## Who Has Access (Data Processors)

We do not sell your data or share it with unauthorized third parties. We use the following third-party processors exclusively to operate our service:
- **Clerk:** Handles OAuth authentication (via GitHub, GitLab, or Bitbucket) and securely stores your profile name and email.
- **Google Cloud Platform (GCP):** Provides the isolated compute containers for processing your code, and the temporary storage (Firestore and Cloud Storage) for job metadata and results.
- **Cloudflare:** Acts as a network-level DNS and web application firewall (WAF) proxy in front of our service. It sees network traffic (including your IP address) as part of routing and filtering requests, but does not store or process the contents of your source code or job results.

## Your Rights

You have the right to control your access to Flude. At any time, you can view and revoke your access credentials (API keys) by visiting the [app.flude.guide](https://app.flude.guide) dashboard.

## Contact

If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at: **unidocengine@gmail.com**.
